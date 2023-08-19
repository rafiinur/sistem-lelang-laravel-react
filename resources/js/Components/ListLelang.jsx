import { Link, Head } from "@inertiajs/react";
import React from "react";
import { Chip } from "@mui/material";
import toRupiah from "@develoka/angka-rupiah-js";

export default function ListLelang({ listLelang }) {
    return (
        <>
            {listLelang.data.map((lelang) => {
                return (
                    <div
                        className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
                        key={lelang.id}
                    >
                        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="relative pb-48 overflow-hidden">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform ease-in-out duration-300"
                                    src={`http://ujikom-rafi.test:8000/assets/images/${lelang.barang.gambar}`}
                                    alt=""
                                />
                            </div>
                            <div className="p-4">
                                <Chip
                                    label={lelang.status}
                                    color={
                                        lelang.status == "Dibuka"
                                            ? "success"
                                            : "error"
                                    }
                                    variant="filled"
                                    sx={{
                                        padding: 0,
                                        width: 80,
                                        height: 20,
                                    }}
                                />

                                <h2 className="mt-3 mb-2 font-bold capitalize">
                                    {lelang.barang.nama}
                                </h2>

                                <div className="mt-3 flex items-center">
                                    {toRupiah(lelang.barang.hargaAwal)}
                                </div>
                            </div>
                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                Dibuka Pada : {lelang.tglLelang}
                            </div>
                            <div className="p-4 flex items-center text-sm text-gray-600">
                                <Link
                                    as="button"
                                    className="w-full btn btn-sm"
                                    href={route("lelang.detail", lelang.id)}
                                >
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
