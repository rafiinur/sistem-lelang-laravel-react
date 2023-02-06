<?php

namespace App\Http\Resources;

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
            'barangId' => $this->barang_id,
            'userId' => $this->user_id,
            'tglLelang' => $this->tgl_lelang,
            'hargaAkhir' => $this->harga_akhir,
            'status' => $this->status
        ];
    }
}
