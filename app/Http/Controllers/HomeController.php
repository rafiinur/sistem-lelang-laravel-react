<?php

namespace App\Http\Controllers;

use App\Http\Resources\LelangResource;
use App\Models\Lelang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{


    public function show(Lelang $lelang)
    {
        return Inertia::render('Detail', [
            'detail' => new LelangResource($lelang),
            'title' => 'Detail Barang'
        ]);
    }
}
