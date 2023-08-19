<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Barang;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lelang>
 */
class LelangFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'barang_id' => Barang::factory(),
            'user_id' => User::factory(),
            'tgl_lelang' => fake()->dateTimeThisYear(),
            'harga_akhir' => fake()->numberBetween(1000000, 10000000),
            'status' => 'Ditutup'
        ];
    }
}
