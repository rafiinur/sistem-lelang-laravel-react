import React from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Chip } from "@mui/material";
import toRupiah from "@develoka/angka-rupiah-js";

function History(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    History
                </h2>
            }
        >
            <Head title="History" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-center">
                                                Barang
                                            </th>
                                            <th className="text-center">
                                                No Lelang
                                            </th>
                                            <th className="text-center">
                                                Penawaran
                                            </th>
                                            <th className="text-center">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.listHistory.data.map(
                                            (history) => {
                                                return (
                                                    <tr key={history.id}>
                                                        <td className="text-center">
                                                            {
                                                                history.lelang
                                                                    .barang.nama
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            {history.lelang.id}
                                                        </td>
                                                        <td className="text-center">
                                                            {toRupiah(
                                                                history.penawaran
                                                            )}
                                                        </td>
                                                        <td className="text-center">
                                                            <Chip
                                                                label="Tertinggi"
                                                                color="success"
                                                                variant="filled"
                                                                sx={{
                                                                    padding: 0,
                                                                    width: 80,
                                                                    height: 20,
                                                                }}
                                                            />
                                                            <Chip
                                                                label="Terlewati"
                                                                color="warning"
                                                                variant="filled"
                                                                sx={{
                                                                    padding: 0,
                                                                    width: 80,
                                                                    height: 20,
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default History;
