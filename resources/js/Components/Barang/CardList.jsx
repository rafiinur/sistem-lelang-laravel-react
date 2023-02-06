import React from "react";

export default function CardList({ listBarang, showDetails }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {listBarang.map((barang) => (
                        <div
                            key={barang.id}
                            className="group relative cursor-pointer m-1"
                            onClick={() => showDetails(barang.id)}
                        >
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={
                                        "http://ujikom-rafi.test:8000/assets/images/" +
                                        barang.gambar
                                    }
                                    // alt={barang.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between p-2 leading-relaxed">
                                <div>
                                    <h1 className="font-semibold ">
                                        Harga Awal
                                    </h1>
                                    <h1 className="font-bold text-gray-700">
                                        {barang.nama}
                                    </h1>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Dibuka Pada:
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        {barang.tgl}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Rp.{barang.hargaAwal}
                                    </p>

                                    <p className="text-xs text-center mt-7 bg-green-500 rounded-xl p-1 ">
                                        Open
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
