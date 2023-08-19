<?php

namespace App\Http\Resources;

use App\Http\Resources\LelangResource;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
            'lelang' => new LelangResource($this->lelang),
            'user' => new UserResource($this->user),
            'penawaran' => $this->penawaran
        ];
    }
}
