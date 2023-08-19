<?php

namespace App\Http\Controllers;

use App\Http\Resources\BarangCollection;
use App\Http\Resources\LelangCollection;
use App\Http\Resources\UserCollection;
use App\Http\Resources\HistoryCollection;
use App\Models\Barang;
use App\Models\Lelang;
use App\Models\User;
use App\Models\History;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function admin()
    {
        return Inertia::render('Admin/AdminDashboard', [
            'title' => 'Dashboard Admin'
        ]);
    }

    public function barang()
    {
        return Inertia::render('Admin/Barang/IndexBarang', [
            'title' => 'List Barang',
            'listBarang' => new BarangCollection(Barang::paginate(10))
        ]);
    }

    public function lelang()
    {
        return Inertia::render('Admin/Lelang/IndexLelang', [
            'title' => 'List Lelang',
            'listLelang' => new LelangCollection(Lelang::paginate(10)),
            'listBarang' => new BarangCollection(Barang::paginate(10))
        ]);
    }

    public function user()
    {
        return Inertia::render('Admin/User/IndexUser', [
            'title' => 'List User',
            'listUser' => new UserCollection(User::paginate(10))
        ]);
    }

    public function history()
    {
        return Inertia::render('Admin/IndexHistory', [
            'title' => 'List History',
            'listhistory' => new HistoryCollection(History::paginate(10))
        ]);
    }

    public function petugas()
    {
        return Inertia::render('Petugas/PetugasDashboard', [
            'title' => 'Dashboard Petugas',
            'listLelang' => new LelangCollection(Lelang::paginate(10))
        ]);
    }

    public function petugasBarang()
    {
        return Inertia::render('Petugas/IndexBarang', [
            'title' => 'List Barang',
            'listBarang' => new BarangCollection(Barang::paginate(10))
        ]);
    }

    public function petugasLelang()
    {
        return Inertia::render('Petugas/IndexLelang', [
            'title' => 'List Lelang',
            'listLelang' => new LelangCollection(Lelang::paginate(10)),
            'listBarang' => new BarangCollection(Barang::paginate(10))
        ]);
    }

    public function petugasUser()
    {
        return Inertia::render('Petugas/IndexUser', [
            'title' => 'List User',
            'listUser' => new UserCollection(User::paginate(10))
        ]);
    }

    public function petugasHistory()
    {
        return Inertia::render('Petugas/IndexHistory', [
            'title' => 'List History',
            'listhistory' => new HistoryCollection(History::paginate(10))
        ]);
    }
}
