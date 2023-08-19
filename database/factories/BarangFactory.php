<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Barang>
 */
class BarangFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama' => fake()->word(),
            'tgl' => fake()->dateTimeThisDecade(),
            'harga_awal' => fake()->numberBetween(100000, 300000),
            'deskripsi' => fake()->sentence(),
            'gambar' => 'sepatu.jpeg'
        ];
    }
}
