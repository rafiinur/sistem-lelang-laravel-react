<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Http\Requests\StoreBarangRequest;
use App\Http\Requests\UpdateBarangRequest;
use App\Http\Resources\BarangCollection;
use App\Http\Resources\BarangResource;
use App\Exports\BarangExport;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Inertia;


class BarangController extends Controller
{
    public function export()
    {
        return Excel::download(new BarangExport, 'barang.xlsx');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Barang', [
            'barang' => new BarangCollection(Barang::paginate(10)),
            'title' => 'List Barang',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBarangRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBarangRequest $request)
    {
        if (!$request->validated()) {
            return back()->with([
                'sucess' => false,
                'message' => 'Form tidak di isi dengan benar'
            ]);
        }

        $namaGambar = time() . '.' . $request->gambar->extension();

        $request->gambar->move(public_path('assets/images'), $namaGambar);

        Barang::create([
            'nama' => $request->nama,
            'tgl' => $request->tgl,
            'harga_awal' => $request->hargaAwal,
            'deskripsi' => $request->deskripsi,
            'gambar' => $namaGambar
        ]);

        return back()->with(['success' => true, 'message' => 'Barang berhasil ditambahkan!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show(Barang $barang)
    {
        return Inertia::render('ShowBarang', [
            'barang' => new BarangResource($barang),
            'title' => 'Detail Barang'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang)
    {
        return with(['barang' => new BarangResource($barang)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBarangRequest  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBarangRequest $request, Barang $barang)
    {
        if ($request->hasFile('gambar')) {
            if (file_exists(public_path('assets/images/' . $barang->gambar))) {
                unlink(public_path('assets/images/' . $barang->gambar));
            }
            $namaGambar = time() . '.' . $request->gambar->extension();

            $request->gambar->move(public_path('assets/images'), $namaGambar);

            $barang->update(([
                'nama' => $request->nama,
                'tgl' => $request->tgl,
                'harga_awal' => $request->hargaAwal,
                'deskripsi' => $request->deskripsi,
                'gambar' => $namaGambar
            ]));
        }

        $barang->update(([
            'nama' => $request->nama,
            'tgl' => $request->tgl,
            'harga_awal' => $request->hargaAwal,
            'deskripsi' => $request->deskripsi,
        ]));


        return back()->with(['success' => true, 'message' => 'Data berhasil diubah!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang)
    {

        if (file_exists(public_path('assets/images/' . $barang->gambar))) {
            unlink(public_path('assets/images/' . $barang->gambar));
        }

        $barang->histories()->delete();
        $barang->lelang()->delete();
        $barang->delete();

        return back()->with(['success' => true, 'message' => 'Data Berhasil Dihapus']);
    }
}
