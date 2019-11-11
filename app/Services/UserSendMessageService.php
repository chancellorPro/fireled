<?php

namespace App\Services;

use App\Models\Cms\AppSettings;
use App\Models\Cms\Asset;
use App\Models\Cms\LinkedAsset;
use App\Models\Cms\Placement;
use App\Models\Stats\AssetsLog;
use App\Models\Stats\Pc1Migration;
use App\Models\Stats\RotationPoint;
use App\Models\User\LinkPc1;
use App\Models\User\User;
use App\Models\User\UserAsset;
use App\Models\User\UserNews;
use App\Models\User\UserPlacement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Class UserSendMessageService
 *
 * Migrate data from PC1 to PC2
 */
class UserSendMessageService
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:send-message {uid} {type}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    private $uid = '947262772012607';
    private $type;
    private $env = 'dev';
    private $user;

    private $userConnection = "dev.user";
    private $cmsConnection = "dev.cms";
    private $statsConnection = "dev.stats";

    /**
     * MoveUserDataService constructor.
     * @param $uid
     * @param $type
     * @param $env
     */
    public function __construct($uid, $type, $env)
    {
        $this->uid = $uid;
        $this->type = $type;
        $this->now = Carbon::now();

        if (in_array($env, ['dev', 'stage', 'live'])) {
            $this->env = $env;
            $this->userConnection = $env . '.user';
            $this->cmsConnection = $env . '.cms';
            $this->statsConnection = $env . '.stats';
        }
    }

    /**
     * Execute command.
     *
     * @return mixed
     * @throws \App\Exceptions\ConfigServer\UrlNotFoundException
     */
    public function run()
    {
        /**
         * User link
         */
        $userLink = LinkPc1::on($this->userConnection)->where('old_fb_id', $this->uid)->first();
        $userId = $userLink->user_id;
        $this->user = User::on($this->userConnection)->findOrFail($userId);

        /**
         * Val D'Souza PC2 ID
         */
        $senderId = 1;
        $attach = json_encode([
            [
                't' => UserNews::TYPE_ANNOUNCEMENTS,
                'i' => $senderId,
                'd' => [
                    /**
                     * Val D'Souza FB ID
                     */
                    'fb' => 10156285577524285,
                    'fn' => 'Val',
                    'ln' => "D'Souza",
                ],
            ]
        ]);
        $createdAt = date('Y-m-d H:i:s');
        $message = "If you had the Black Giant Spider and/or the Animated Skeleton in Rocking Chair items in your PC1 game, they have been copied to the April 29 sub storage in your PC2 game. Sorry if I mentioned some other sub storage in previous communications.";

        $time = time();
        /**
         * Val D'Souza
         */
        UserNews::on($this->userConnection)->create([
            'news_hash'       => md5($senderId . $userId . $time),
            'user_id'         => $senderId,
            'interlocutor_id' => $userId,
            'direction'       => UserNews::DIRECTION_OUT,
            'type'            => UserNews::TYPE_ANNOUNCEMENTS,
            'status'          => UserNews::STATUS_NEW,
            'message'         => $message,
            'created_at'      => $createdAt,
            'attachements'    => $attach,
        ]);

        /**
         * User
         */
        UserNews::on($this->userConnection)->create([
            'news_hash'       => md5($senderId . $userId . $time),
            'user_id'         => $userId,
            'interlocutor_id' => $senderId,
            'direction'       => UserNews::DIRECTION_IN,
            'type'            => UserNews::TYPE_ANNOUNCEMENTS,
            'status'          => UserNews::STATUS_NEW,
            'message'         => $message,
            'created_at'      => $createdAt,
            'attachements'    => $attach,
        ]);

        (new ConfigServerService($this->env))->resetCache($this->user->id);
    }
}
