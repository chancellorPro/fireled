<?php

use \App\Models\Cms\Asset;
use \App\Models\User\User;

return [
    'environments' => [
        ['id' => 'dev',   'name' => 'Dev'],
        ['id' => 'stage', 'name' => 'Stage'],
        ['id' => 'live',  'name' => 'Live'],
    ],
    'animator_role_id' => 3,
    'artist_role_id' => 4,
    'adp_file_types' => [
        'reference' => 1,
        'source'    => 3,
        'animation' => 4,
        'package'   => 10,
        /**
         * Bundles
         */
        'compressed'           => 2,
        'uncompressed'         => 5,
        'android_compressed'   => 6,
        'android_uncompressed' => 7,
        'ios_compressed'       => 8,
        'ios_uncompressed'     => 9,
    ],
    'asset_file_path' => [
        2 => 'WebGL/SD',
        5 => 'WebGL/HD',
        6 => 'Android/SD',
        7 => 'Android/HD',
        8 => 'iOS/SD',
        9 => 'iOS/HD',
    ],
    'adp_file_bundles_config' => [
        'compressed'   => 0,
        'uncompressed' => 1,
        'both'         => 2,
    ],
    'attribute_value_types' => [
        ['id' => 'bool',       'name' => 'bool'],
        ['id' => 'int',        'name' => 'int'],
        ['id' => 'enum',       'name' => 'enum'],
        ['id' => 'float',      'name' => 'float'],
        ['id' => 'string',     'name' => 'string'],
        ['id' => 'delta_time', 'name' => 'delta time'],
    ],

    'initial_user_placement_types' => [
        ['id' => 'house',   'name' => 'House'],
        ['id' => 'storage', 'name' => 'Storage/Closet'],

    ],
    'initial_user_placement_groups' => [
        ['id' => 'house',   'name' => 'House'],
        ['id' => 'storage', 'name' => 'Storage/Closet'],
    ],
    'ai_state_types' => [
        ['id' => 1, 'name' => 'ACTION'],
        ['id' => 2, 'name' => 'WELCOME'],
        ['id' => 3, 'name' => 'STAND'],
        ['id' => 4, 'name' => 'SIT'],
        ['id' => 5, 'name' => 'SLEEP'],
        ['id' => 6, 'name' => 'WALK'],
        ['id' => 7, 'name' => 'RUN'],
    ],
    'ai_behaviour_state_types' => [
        ['id' => 1, 'name' => 'ACTION'],
        ['id' => 3, 'name' => 'STAND'],
        ['id' => 4, 'name' => 'SIT'],
        ['id' => 5, 'name' => 'SLEEP'],
        ['id' => 6, 'name' => 'WALK'],
    ],
    'ai_condition_types' => [
        ['id' => 1, 'name' => 'TIRED'],
        ['id' => 2, 'name' => 'RESTED'],
        ['id' => 3, 'name' => 'BORED'],
        ['id' => 4, 'name' => 'HUNGRY'],
    ],
    'ai_object_types' => [
        ['id' => 1, 'name' => 'PET'],
        ['id' => 2, 'name' => 'ASSET'],
    ],
    'gender' => [
        ['id' => 1, 'name' => 'MALE'],
        ['id' => 2, 'name' => 'FEMALE'],
    ],
    'rarity' => [
        ['id' => 1, 'value' => 'common'],
        ['id' => 2, 'value' => 'uncommon'],
        ['id' => 3, 'value' => 'rare'],
    ],
    'shop_admin_type' => [
        ['id' => 1, 'value' => 'live'],
        ['id' => 2, 'value' => 'adp'],
    ],
    'currency' => [
        ['id' => 1, 'value' => 'USD'],
    ],
    'localizations' => [
        ['id' => 'en', 'value' => 'English', 'validation' => 'required'],
        ['id' => 'ru', 'value' => 'Russian', 'validation' => 'nullable'],
    ],
    'neighbor_activity_target' => [
        ['id' => 1, 'name' => 'Neighbor'],
        ['id' => 2, 'name' => 'Playmate'],
        ['id' => 4, 'name' => 'AMP'],
        ['id' => 5, 'name' => 'AMP + Neighbor'],
    ],
    'insert_type' => [
        ['id' => 1, 'name' => 'on Create'],
        ['id' => 2, 'name' => 'Pet age'],
        ['id' => 3, 'name' => 'Paid - 1st payment'],
        ['id' => 4, 'name' => 'FCD'],
        ['id' => 5, 'name' => 'Days in Game'],
        ['id' => 6, 'name' => 'Global Message'],
    ],
    'whitelist_countries' => [
        ['id' => 1, 'name' => 'UA'],
        ['id' => 2, 'name' => 'US'],
        ['id' => 3, 'name' => 'GB'],
        ['id' => 4, 'name' => 'CA'],
        ['id' => 5, 'name' => 'AU'],
        ['id' => 6, 'name' => 'IT'],
        ['id' => 7, 'name' => 'DE'],
        ['id' => 8, 'name' => 'DK'],
        ['id' => 9, 'name' => 'NL'],
        ['id' => 10, 'name' => 'FR'],
        ['id' => 11, 'name' => 'CH'],
        ['id' => 12, 'name' => 'NO'],
        ['id' => 13, 'name' => 'NZ'],
        ['id' => 13, 'name' => 'NZ'],
        ['id' => 14, 'name' => 'BE'],
        ['id' => 15, 'name' => 'SE'],
        ['id' => 16, 'name' => 'IE'],
        ['id' => 17, 'name' => 'FI'],
        ['id' => 18, 'name' => 'IS'],
        ['id' => 19, 'name' => 'PT'],
        ['id' => 20, 'name' => 'LU'],
        ['id' => 21, 'name' => 'SG'],
        ['id' => 22, 'name' => 'AT'],
    ],
    'is_active' => [
        ['id' => 1, 'name' => 'On'],
        ['id' => 2, 'name' => 'Off'],
    ],
    'cleaner' => [
        ['id' => 1, 'name' => 'On'],
        ['id' => 0, 'name' => 'Off'],
    ],
    'week_days' => [
        ['id' => 1, 'name' => 'Monday'],
        ['id' => 2, 'name' => 'Tuesday'],
        ['id' => 3, 'name' => 'Wednesday'],
        ['id' => 4, 'name' => 'Thursday'],
        ['id' => 5, 'name' => 'Friday'],
        ['id' => 6, 'name' => 'Saturday'],
        ['id' => 7, 'name' => 'Sunday'],
    ],

    'default_page_limit' => 20,

    'page_limit' => [
        ['id' => '20',   'name' => '20'],
        ['id' => '50',    'name' => '50'],
        ['id' => '100',   'name' => '100'],
        ['id' => '200',  'name' => '200'],
        ['id' => '300',  'name' => '300'],
    ],

    'threshold_types' => [
        ['id' => 0, 'name' => 'xp'],
        ['id' => 1, 'name' => 'cash'],
        ['id' => 2, 'name' => 'coin'],
        ['id' => 3, 'name' => 'gc_bundles'],
    ],

    'check_status' => [
        ['id' => 0, 'name' => 'unprocessed'],
        ['id' => 1, 'name' => 'processed'],
    ],

    'how_award_appearance' => [
        ['id' => 0, 'value' => 'Default'],
        ['id' => 1, 'value' => 'In popup'],
    ],

    'first_sale_filter' => [
        ['id' => 1, 'name' => 'First day sale'],
        ['id' => 7, 'name' => 'First week sale'],
        ['id' => 31, 'name' => 'First month sale'],
        ['id' => 365, 'name' => 'First year sale'],
    ],

    'date_ranges' => [
        ['id' => 'today',          'name' => 'Today'],
        ['id' => 'yesterday',      'name' => 'Yesterday'],
        ['id' => 'current-week',   'name' => 'Current week'],
        ['id' => 'previous-week',  'name' => 'Previous week'],
        ['id' => 'current-month',  'name' => 'Current month'],
        ['id' => 'previous-month', 'name' => 'Previous month'],
        ['id' => 'last-seven',     'name' => 'Last 7 days'],
        ['id' => 'last-thirty',    'name' => 'Last 30 days'],
        ['id' => 'custom',         'name' => 'Custom'],
    ],

    'time_types' => [
        ['id' => 1,     'name' => 'Seconds'],
        ['id' => 60,    'name' => 'Minutes'],
        ['id' => 3600,  'name' => 'Hours'],
        ['id' => 86400, 'name' => 'Days'],
    ],

    'misc' => [
        'enum' => [
            ['id' => 1, 'name' => 'First'],
            ['id' => 2, 'name' => 'Second'],
        ]
    ],

    'cash_coin' => [
        ['id' => 1, 'name' => 'cash only'],
        ['id' => 2, 'name' => 'coins only'],
        ['id' => 3, 'name' => 'cash and coins'],
    ],

    'transaction_type' => [
        ['id' => 0, 'name' => 'Income'],
        ['id' => 1, 'name' => 'Outcome'],
    ],

    'boxes' => [
        ['id' => 0, 'name' => '0.14'],
        ['id' => 1, 'name' => '0.122'],
        ['id' => 2, 'name' => '0.08'],
    ],

];
