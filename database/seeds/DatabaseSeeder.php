<?php

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Array with users which must be created with static (fixed) logins and passwords. Key is login, value - password.
     *
     * @var array
     */
    protected $static_users = [
        'root'  => 'root',
        'admin' => 'admin',
    ];

    /**
     * Seed the application's database.
     *
     * @return void
     * @throws Exception
     */
    public function run(): void
    {
        foreach ($this->static_users as $login => $password) {
            $this->createStaticUser($login, $password);
        }
    }

    /**
     * Create 'static' user model.
     *
     * @param string $login
     * @param string $password
     *
     * @return void
     */
    protected function createStaticUser(string $login = 'root', string $password = 'root'): void
    {
        if (User::where('email', '=', $login)->doesntExist()) {
            $this->log("Create static user model: <comment>{$login}:{$password}</comment>");

            factory(User::class)->create([
                'email'      => $login . '@gmail.com',
                'name'       => $login,
                'password'   => $password,
                'deleted_at' => null,
            ]);
        } else {
            $this->log("Static user model ({$login}:{$password}) already exists");
        }
    }

    /**
     * Log some message into console.
     *
     * @param string $message
     *
     * @return void
     */
    protected function log(string $message): void
    {
        $this->command->getOutput()->writeln("<comment>Seed:</comment> $message");
    }
}
