<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function export()
    {
        return Excel::download(new UsersExport, 'users.xlsx');
    }

    public function store(StoreUserRequest $request)
    {
        if ($request->validated()) {
            User::create([
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'email' => $request->email,
                'telp' => $request->telp,
                'level' => $request->level,
            ]);

            return back()->with(['success' => false, 'message' => 'Data Berhasil Disimpan!']);
        }

        return back()->with(['success' => false, 'message' => 'Data Gagal Disimpan!']);
    }

    public function edit(User $user)
    {
        return with(['user' => new UserResource($user)]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {

        $user->update([
            'name' => $request->name,
            'password' => $user->password,
            'email' => $request->email,
            'telp' => $request->telp,
            'level' => $request->level,
        ]);


        return back()->with(['success' => true, 'message' => 'Data berhasil diubah!']);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with(['success' => false, 'message' => 'Data Berhasil Dihapus!']);
    }
}
