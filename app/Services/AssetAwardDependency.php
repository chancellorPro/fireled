<?php

namespace App\Services;

use App\Models\Cms\AssetChain;
use App\Models\Cms\AwardAssetChain;
use App\Models\Cms\AwardChain;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

/**
 * Class AssetAwardDependency
 */
class AssetAwardDependency
{
    /**
     * Max dependency level
     */
    const MAX_DEPENDENCY_LEVEL = 7;

    /**
     * Chain max call level counter
     */
    private $chainMaxCallCounter = [];

    /**
     * Env
     *
     * @var string|null
     */
    protected $env;

    /**
     * DB
     *
     * @var \Illuminate\Database\ConnectionInterface
     */
    protected $db;

    protected $chainRelations = [];

    protected $sources      = [];
    protected $assets       = [];
    protected $awards       = [];
    protected $randomAwards = [];

    protected $childFreeAssets = [];
    protected $childFreeAwards = [];
    /**
     * Time restricted assets
     * @var array
     */
    protected $timeRestrictedAssets = [];

    /**
     * AssetAwardDependency constructor.
     *
     * @param string|null $env Env
     */
    public function __construct(?string $env = null)
    {
        $this->env = $env ?? environment();
        $this->db  = DB::connection("$this->env.cms");
    }

    /**
     * Get dependent assets
     *
     * @param Collection $assetIds Asset ids
     *
     * @return array|\Illuminate\Support\Collection
     */
    public function getDependentAssets(Collection $assetIds, $source = '')
    {
        $dependentAssets = collect([]);

        $this->sources[$source] = $source;
        foreach ($assetIds as $assetId) {
            $this->assets[$assetId][] = ['parentSource' => $source];
            $this->childFreeAssets[$assetId] = $assetId;
        }

        $this->scanDependency(1, $assetIds, $dependentAssets);

        return $dependentAssets;
    }

    /**
     * Get dependent assets from awards
     *
     * @param Collection $awardIds Award ids
     *
     * @return array|\Illuminate\Support\Collection
     */
    public function getAwardDependentAssets(Collection $awardIds, $source = '')
    {
        $dependentAssets = collect([]);

        foreach ($awardIds as $awardId) {
            $this->awards[$awardId][] = ['parentSource' => $source];
            $this->childFreeAwards[$awardId] = $awardId;
        }

        $assets = $this->db
            ->table('award_assets')
            ->select('asset_id', 'award_id')
            ->whereIn('award_id', $awardIds)
            ->get();

        $assetIds = $assets->pluck('asset_id');

        foreach ($assets as $asset) {
            $this->childFreeAssets[$asset->asset_id] = $asset->asset_id;
            $this->assets[$asset->asset_id][] = ['parentAward' => $asset->award_id];
            unset($this->childFreeAwards[$asset->award_id]);
        }

        $dependentAssets   = $dependentAssets->merge($assetIds);
        $randomAwardAssets = $this
            ->scanRandomAwardDependency(collect($awardIds), 1, $dependentAssets);

        $assetIds = $assetIds->merge($randomAwardAssets);

        $this->scanDependency(2, $assetIds, $dependentAssets);

        return $dependentAssets;
    }

    /**
     * Scan dependency
     *
     * @param integer    $level           Nested level
     * @param Collection $assetIds        Asset ids
     * @param Collection $dependentAssets Dependent assets
     *
     * @return void
     */
    private function scanDependency(int $level, Collection $assetIds, Collection &$dependentAssets)
    {
        if ($assetIds->isNotEmpty() && $level < self::MAX_DEPENDENCY_LEVEL) {
            $assets = $this->db
                ->table('asset_action_type_states as ats')
                ->select('ats.asset_id as source_asset_id', 'awa.asset_id', 'ats.award_id')
                ->join('award_assets as awa', 'ats.award_id', '=', 'awa.award_id')
                ->whereIn('ats.asset_id', $assetIds)
                ->get();

            if ($assets->isNotEmpty()) {
                $assetIds = $assets->pluck('asset_id');

                foreach ($assets as $asset) {
                    $this->childFreeAssets[$asset->asset_id] = $asset->asset_id;

                    $this->assets[$asset->asset_id][] = ['parentAward' => $asset->award_id];
                    $this->awards[$asset->award_id][] = ['parentAsset' => $asset->source_asset_id];

                    unset($this->childFreeAssets[$asset->source_asset_id]);
                }
                
                $dependentAssets   = $dependentAssets->merge($assetIds);
                $randomAwardAssets = $this
                    ->scanRandomAwardDependency($assets->pluck('award_id'), $level, $dependentAssets);
                $assetIds          = $assetIds->merge($randomAwardAssets);
                $this->scanDependency($level + 1, $assetIds, $dependentAssets);
            }
        }
    }

    /**
     * Scan random award dependency
     *
     * @param Collection $awardIds        Award ids
     * @param integer    $level           Level
     * @param Collection $dependentAssets Dependent assets
     *
     * @return Collection
     */
    private function scanRandomAwardDependency(Collection $awardIds, int $level, Collection &$dependentAssets)
    {
        $awards = $this->db
            ->table('award_random_awards as ara')
            ->select('ara.award_id as source_award_id', 'awa.asset_id', 'ras.random_award_id', 'ras.started_at', 'ras.finished_at', 'awa.award_id')
            ->join('random_award_slots as ras', 'ara.random_award_id', '=', 'ras.random_award_id')
            ->join('award_assets as awa', 'ras.award_id', '=', 'awa.award_id')
            ->whereIn('ara.award_id', $awardIds)
            ->get();

        $assetIds = $awards->pluck('asset_id');

        $dependentAssets = $dependentAssets->merge($assetIds);

            foreach ($awards as $award) {
                if ($award->started_at || $award->finished_at) {
                    $this->timeRestrictedAssets[$award->asset_id] = [
                        'start' => $award->started_at ?? null,
                        'finish' => $award->finished_at ?? null,
                    ];
                }
                $this->childFreeAssets[$award->asset_id] = $award->asset_id;
                $this->randomAwards[$award->random_award_id][] = ['parentAward' => $award->source_award_id];
                $this->awards[$award->award_id][] = ['parentRandomAward' => $award->random_award_id];
                $this->assets[$award->asset_id][] = ['parentAward' => $award->award_id];

                unset($this->childFreeAwards[$award->source_award_id]);
            }


        return $assetIds;
    }

    /**
     * Get time restricted assets
     *
     * @return array
     */
    public function getTimeRestrictedAssets() {
        return $this->timeRestrictedAssets;
    }

    /**
     * Clear chains
     *
     * @return void
     */
    public function clearChains() {
        AssetChain::truncate();
        AwardChain::truncate();
        AwardAssetChain::truncate();
    }

    /**
     * Save chains
     *
     * @return void
     */
    public function saveChains() {

        $chain = [];
        foreach ($this->childFreeAssets as $asset) {
            $chain["asset_$asset"] = [];
            $this->findParent($chain["asset_$asset"], 'asset', $asset, "asset_$asset");
        }

        foreach ($this->childFreeAwards as $award) {
            $chain["award_$award"] = [];
            $this->findParent($chain["award_$award"], 'award', $award, "award_$award");
        }

        $savedChain = [];
        $assetChainRows = [];
        $awardChainRows = [];

        foreach ($chain as $chainName => $row) {

            if(count($row) == 1 && !empty($row['config'])) {
                $chainData = json_encode($row);
            } else {
                $chainData = json_encode([$chainName => $row]);
            }

            if(isset($savedChain[$chainData])) {
                $chainId = $savedChain[$chainData];
            } else {
                $awardAssetChain = AwardAssetChain::create(['data' => $chainData]);
                $chainId = $awardAssetChain->id;
                $savedChain[$chainData] = $chainId;
            }

            foreach ($this->chainRelations[$chainName] ?? [] as $type => $chainRelation) {
                switch ($type) {
                    case 'assets':
                        foreach ($chainRelation ?? [] as $chainAsset) {
                            $assetChainRows[] = ['asset_id' => $chainAsset, 'award_asset_chain_id' => $chainId];
                        }
                        break;
                    case 'awards':
                        foreach ($chainRelation ?? [] as $chainAward) {
                            $awardChainRows[] = ['award_id' => $chainAward, 'award_asset_chain_id' => $chainId];
                        }
                        break;
                }
            }
        }

        if ($assetChainRows) {
            AssetChain::insert($assetChainRows);
        }
        if ($awardChainRows) {
            AwardChain::insert($awardChainRows);
        }

    }

    /**
     * Find parent for chain
     *
     * @param $chain
     * @param $type
     * @param $id
     * @param $chainName
     */
    private function findParent(&$chain, $type, $id, $chainName) {
        $this->chainMaxCallCounter[$chainName] = ($this->chainMaxCallCounter[$chainName] ?? 0) + 1;
        if ($this->chainMaxCallCounter[$chainName] < self::MAX_DEPENDENCY_LEVEL) {
            switch ($type) {
                case 'asset':
                    $this->chainRelations[$chainName]['assets'][$id] = $id;
                    foreach ($this->assets[$id] as $parent) {
                        $this->formatParentRow($parent, $chain, $chainName);
                    }
                    break;
                case 'award':
                    $this->chainRelations[$chainName]['awards'][$id] = $id;
                    foreach ($this->awards[$id] as $parent) {
                        $this->formatParentRow($parent, $chain, $chainName);
                    }
                    break;
                case 'randomAward':
                    $this->chainRelations[$chainName]['randomAwards'][$id] = $id;
                    foreach ($this->randomAwards[$id] as $parent) {
                        $this->formatParentRow($parent, $chain, $chainName);
                    }
                    break;
            }
        }
    }

    /**
     * Format parent row for chain
     *
     * @param $parent
     * @param $chain
     * @param $chainName
     */
    private function formatParentRow($parent, &$chain, $chainName) {
        if(!empty($parent['parentAward'])) {
            $chain["award_" . $parent['parentAward']] = [];
            $this->findParent($chain["award_" . $parent['parentAward']], 'award', $parent['parentAward'], $chainName);
        } elseif (!empty($parent['parentAsset'])) {
            $chain["asset_" . $parent['parentAsset']] = [];
            $this->findParent($chain["asset_" . $parent['parentAsset']], 'asset', $parent['parentAsset'], $chainName);
        } elseif (!empty($parent['parentRandomAward'])) {
            $chain["randomAward_" . $parent['parentRandomAward']] = [];
            $this->findParent($chain["randomAward_" . $parent['parentRandomAward']], 'randomAward', $parent['parentRandomAward'], $chainName);
        }
        elseif (!empty($parent['parentSource'])) {
            $chain =['config' => $parent['parentSource']] ;
        }
    }
}
