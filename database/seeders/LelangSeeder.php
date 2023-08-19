<?php

namespace Database\Seeders;

use App\Models\Lelang;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LelangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lelang::factory()
            ->hasBarang()
            ->hasUser()
            ->count(50)
            ->create();
    }
}
