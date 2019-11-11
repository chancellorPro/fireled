<?php
namespace App\Services\AssetConfigDependency\Configs;

use App\Models\Cms\RandomAward;

/**
 * Class CollectionsConfig
 * @package App\Services\AssetConfigDependency\Configs
 */
class CollectionsConfig
{
    /**
     * @var array Time restricted asset ids in config
     */
    protected $timeRestrictedAssets = [];
    /**
     * @var array Time restricted award ids in config
     */
    protected $timeRestrictedAwards = [];

    /**
     * @var array Asset ids in config
     */
    protected $assets = [];

    /**
     * @var array Award ids in config
     */
    protected $awards = [];

    /**
     * Get assets and awards
     *
     * @return array
     */
    public function getAssetsAndAwards() {

        $collections = RandomAward::with([
                'slots.collection',
            ])
            ->leftJoin('random_award_collections AS c', 'c.random_award_id', '=', 'id')
            ->orderBy('c.position')
            ->orderByDesc('id')
            ->where('type', RandomAward::RANDOM_AWARD_TYPE_COLLECTION)->get();

        $this->fillData($collections->toArray());

        return [
            'awards' => array_values($this->awards),
            'assets' => array_values($this->assets),
            'timeRestrictedAssets' => $this->timeRestrictedAssets,
            'timeRestrictedAwards' => $this->timeRestrictedAwards,
        ];
    }

    public function getConfigName() {
        return 'collections';
    }


    /**
     * Fill data
     *
     * @param array $rows
     */
    private function fillData(array $rows) {
        foreach ($rows as $row) {
            if (!empty($row['started_at']) || !empty($row['finished_at'])) {
                if(!empty($row['award_id'])) {
                    $this->timeRestrictedAwards[$row['award_id']] = [
                        'start' => $row['started_at'],
                        'finish' => $row['finished_at'],
                    ];
                }
                foreach (($row['slots'] ?? []) as $slot) {
                    if (!empty($slot['collection']['asset_id'])) {
                        $this->timeRestrictedAssets[$slot['collection']['asset_id']] = [
                            'start' => $row['started_at'],
                            'finish' => $row['finished_at'],
                        ];
                    }
                }
            } else {
                if(!empty($row['award_id'])) {
                    $this->awards[$row['award_id']] = $row['award_id'];
                }
                foreach (($row['slots'] ?? []) as $slot) {
                    if (!empty($slot['collection']['asset_id'])) {
                        $this->assets[$slot['collection']['asset_id']] = $slot['collection']['asset_id'];
                    }
                }
            }
        }
    }
}