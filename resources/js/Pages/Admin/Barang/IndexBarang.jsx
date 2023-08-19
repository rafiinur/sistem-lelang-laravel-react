import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Box, Paper, Container } from "@mui/material";
import toRupiah from "@develoka/angka-rupiah-js";
import ShowMoreText from "react-show-more-text";
import CreateBarang from "./Partials/CreateBarang";
import UpdateBarang from "./Partials/UpdateBarang";
import DeleteBarang from "./Partials/DeleteBarang";
import UploadIcon from "@mui/icons-material/Upload";

function IndexBarang(props) {
    return (
        <AdminLayout title={props.title} auth={props.auth}>
            <Head title={props.title} />
            <CreateBarang />
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                    marginTop: "4rem",
                }}
            >
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    {props.title}
                                </h2>
                                <div className="text-sm breadcrumbs">
                                    <ul>
                                        <li>Admin</li>
                                        <li>Barang</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-x-2 ">
                                <a
                                    href={route("barang.export")}
                                    className="btn text-white btn-info btn-sm"
                                >
                                    <UploadIcon />
                                    Export Excel
                                </a>
                            </div>
                        </div>
                        {props.listBarang.data.length == 0 ? (
                            <>
                                <div className="divider" />
                                <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Data Belum Tersedia</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="overflow-x-auto">
                                <div className="bg-white shadow-md rounded my-6">
                                    <table className="min-w-max w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">
                                                    Barang
                                                </th>
                                                <th className="py-3 px-6 text-left">
                                                    Harga Awal
                                                </th>
                                                <th className="py-3 px-6 text-center">
                                                    Deskripsi
                                                </th>
                                                <th className="py-3 px-6 text-center">
                                                    Tanggal
                                                </th>
                                                <th className="py-3 px-6 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light">
                                            {props.listBarang.data.map(
                                                (barang) => {
                                                    return (
                                                        <tr
                                                            className="border-b border-gray-200 hover:bg-gray-100"
                                                            key={barang.id}
                                                        >
                                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <div className="mr-2">
                                                                        <div className="avatar">
                                                                            <div className="mask mask-circle w-10 h-10">
                                                                                <img
                                                                                    src={`http://ujikom-rafi.test:8000/assets/images/${barang.gambar}`}
                                                                                    alt="Avatar Tailwind CSS Component"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="font-medium">
                                                                        {
                                                                            barang.nama
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-6 text-left">
                                                                {toRupiah(
                                                                    barang.hargaAwal
                                                                )}
                                                            </td>
                                                            <td className="py-3 px-6 text-center">
                                                                <ShowMoreText>
                                                                    {
                                                                        barang.deskripsi
                                                                    }
                                                                </ShowMoreText>
                                                            </td>
                                                            <td className="py-3 px-6 text-center">
                                                                {barang.tgl}
                                                            </td>
                                                            <td className="py-3 px-6 text-center">
                                                                <div className="button-group text-center">
                                                                    <DeleteBarang
                                                                        dataId={
                                                                            barang.id
                                                                        }
                                                                    />

                                                                    <UpdateBarang
                                                                        dataId={
                                                                            barang.id
                                                                        }
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </Paper>
                </Container>
            </Box>
        </AdminLayout>
    );
}

export default IndexBarang;
