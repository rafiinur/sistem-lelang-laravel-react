<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'tb_barang';
    protected $fillable = [
        'nama',
        'tgl',
        'harga_awal',
        'deskripsi',
        'gambar'
    ];

    public function lelang()
    {
        return $this->hasOne(Lelang::class);
    }
    public function histories()
    {
        return $this->hasMany(History::class);
    }
}
