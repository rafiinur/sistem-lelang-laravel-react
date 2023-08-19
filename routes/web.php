<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\LelangController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'title' => 'Bonzai'
        ]);
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/user-export', [UserController::class, 'export'])->name('user.export');
    Route::get('/barang-export', [BarangController::class, 'export'])->name('barang.export');
    Route::get('/lelang-export', [LelangController::class, 'export'])->name('lelang.export');
    Route::get('/history-export', [HistoryController::class, 'export'])->name('history.export');

    Route::get('/lelang/{lelang}',  [LelangController::class, 'edit'])->name('lelang.edit');
});

Route::middleware(['auth', 'verified', 'user-role:user'])->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Home', [
            'title' => 'Home'
        ]);
    })->name('dashboard');

    Route::get('/lelang', [LelangController::class, 'index'])->name('lelang');
    Route::get('/lelang/detail/{lelang}', [LelangController::class, 'show'])->name('lelang.detail');

    Route::get('/history', [HistoryController::class, 'index'])->name('history');
    Route::post('/history', [HistoryController::class, 'store'])->name('history.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth', 'user-role:petugas')->group(function () {
    Route::prefix('/petugas')->controller(DashboardController::class)->group(function () {
        Route::get('/dashboard',  'petugas')->name('petugas.dashboard');
        Route::get('/barang',  'petugasBarang')->name('petugas.barang');
        Route::get('/lelang',  'petugasLelang')->name('petugas.lelang');
        Route::get('/user',  'petugasUser')->name('petugas.user');
        Route::get('/history',  'petugasHistory')->name('petugas.history');
    });

    Route::patch('/lelang/status/{lelang}', [LelangController::class, 'updateStatus'])->name('lelang.updateStatus');
});

Route::middleware('auth', 'user-role:admin')->group(function () {
    Route::prefix('/admin')->controller(DashboardController::class)->group(function () {
        Route::get('/dashboard',  'admin')->name('admin.dashboard');
        Route::get('/barang',  'barang')->name('admin.barang');
        Route::get('/lelang',  'lelang')->name('admin.lelang');
        Route::get('/user',  'user')->name('admin.user');
        Route::get('/history', 'history')->name('admin.history');
    });

    Route::controller(UserController::class)->group(function () {
        Route::post('/user',  'store')->name('user.store');
        Route::delete('/user/{user}',  'destroy')->name('user.destroy');
        Route::get('/user/{user}',  'edit')->name('user.edit');
        Route::put('/user/{user}',  'update')->name('user.update');
    });

    Route::controller(LelangController::class)->group(function () {
        Route::post('/lelang',  'store')->name('lelang.store');
        Route::delete('/lelang/{lelang}',  'destroy')->name('lelang.destroy');
        Route::put('/lelang/{lelang}',  'update')->name('lelang.update');
    });

    Route::controller(BarangController::class)->group(function () {
        Route::post('/barang',  'store')->name('barang.store');
        Route::delete('/barang/{barang}',  'destroy')->name('barang.destroy');
        Route::get('/barang/{barang}',  'edit')->name('barang.edit');
        Route::put('/barang/{barang}',  'update')->name('barang.update');
    });
});

require __DIR__ . '/auth.php';
