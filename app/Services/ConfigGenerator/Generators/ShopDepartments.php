<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Configs\BannerConfig;
use App\Configs\ShopDepartmentConfig;
use App\Models\Cms\AppSettings;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;
use Storage;

/**
 * Class ShopDepartments
 */
class ShopDepartments implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     *
     * @throws \Exception App Settings errors
     */
    public function generate(Deployer $deployer)
    {
        $appSettingsName   = 'shop_department_background';
        $appSettingsConfig = (new AppSettingsConfig($appSettingsName))->generate()->current();

        $backgroundUrl = '';
        if (!empty($appSettingsConfig[0]['background'])) {
            $backgroundUrl = $appSettingsConfig[0]['background'];
        }

        $result = [
            'departments' => (new ShopDepartmentConfig)->generate()->current(),
            'banners'     => (new BannerConfig)->generate()->current(),
            'background'  => [
                'url' => $backgroundUrl,
            ],
        ];

        return $deployer->deploy('shop_departments', $result);
    }
}
