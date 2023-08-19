<?php

namespace App\Http\Resources;

use App\Http\Resources\UserResource;
use App\Http\Resources\BarangResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LelangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'barang' => new BarangResource($this->barang),
            'user' => new UserResource($this->user),
            'tglLelang' => $this->tgl_lelang,
            'hargaAkhir' => $this->harga_akhir,
            'status' => $this->status
        ];
    }
}
