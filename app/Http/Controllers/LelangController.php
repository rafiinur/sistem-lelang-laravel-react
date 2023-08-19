<?php

namespace App\Http\Controllers;

use App\Models\Lelang;
use App\Http\Requests\StoreLelangRequest;
use App\Http\Requests\UpdateLelangRequest;
use App\Http\Resources\LelangCollection;
use App\Http\Resources\LelangResource;
use App\Exports\LelangExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Inertia;

class LelangController extends Controller
{
    public function export()
    {
        return Excel::download(new LelangExport, 'lelang.xlsx');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Lelang', [
            'listLelang' => new LelangCollection(Lelang::paginate(8)),
            'title' => 'List Lelang',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLelangRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLelangRequest $request)
    {
        if ($request->validated()) {
            Lelang::create([
                'barang_id' => $request->barang,
                'tgl_lelang' => $request->tgl_lelang
            ]);

            return back()->with('message', 'Data berhasil Ditambahkan');
        }

        return back()->with('errors', 'Data gagal ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lelang  $lelang
     * @return \Illuminate\Http\Response
     */
    public function show(Lelang $lelang)
    {
        return Inertia::render('Detail', [
            'detail' => new LelangResource($lelang),
            'title' => 'Detail Barang'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lelang  $lelang
     * @return \Illuminate\Http\Response
     */
    public function edit(Lelang $lelang)
    {
        return with([
            'lelang' => new LelangResource($lelang)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLelangRequest  $request
     * @param  \App\Models\Lelang  $lelang
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLelangRequest $request, Lelang $lelang)
    {
        $lelang->update(([
            'barang_id' => $request->barang,
            'tgl_lelang' => $request->tgl_lelang
        ]));


        return back()->with(['success' => true, 'message' => 'Data berhasil diubah!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lelang  $lelang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lelang $lelang)
    {
        $lelang->delete();

        return back()->with(['success' => true, 'message' => 'Data Berhasil Diupdate!']);
    }

    public function updateStatus(Lelang $lelang, Request $request)
    {
        $lelang->update([
            'status' => $request->status
        ]);

        return back()->with([
            'success' => true,
            'message' => 'Status Lelang Diubah'
        ]);
    }
}
