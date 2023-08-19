<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHistoryRequest;
use App\Http\Resources\HistoryCollection;
use App\Models\History;
use Inertia\Inertia;
use App\Exports\HistoryExport;
use Maatwebsite\Excel\Facades\Excel;

class HistoryController extends Controller
{
    public function export()
    {
        return Excel::download(new HistoryExport, 'histories.xlsx');
    }

    public function index()
    {
        $listHistory = History::where('user_id', auth()->user()->id)->get();
        return Inertia::render('History', [
            'title' => 'History',
            'listHistory' => new HistoryCollection($listHistory)
        ]);
    }

    public function store(StoreHistoryRequest $request)
    {
        History::create([
            'lelang_id' => $request->lelang_id,
            'barang_id' => $request->barang_id,
            'user_id' => $request->user_id,
            'penawaran' => $request->penawaran
        ]);

        return redirect('history')->with('message', 'Anda Berhasil Melakukan Penawaran');
    }
}
