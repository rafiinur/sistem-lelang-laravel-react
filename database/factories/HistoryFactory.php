<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Barang;
use App\Models\Lelang;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\History>
 */
class HistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'lelang_id' => Lelang::factory(),
            'barang_id' => Barang::factory(),
            'user_id' => User::factory(),
            'penawaran' => fake()->numberBetween(2000000, 8000000)
        ];
    }
}
