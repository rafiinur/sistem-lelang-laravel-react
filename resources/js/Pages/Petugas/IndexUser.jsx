import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Box, Grid, Paper, Container } from "@mui/material";

import UploadIcon from "@mui/icons-material/Upload";

function IndexUser(props) {
    return (
        <AdminLayout title={props.title} auth={props.auth}>
            <Head title={props.title} />
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
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
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
                                                <li>Petugas</li>
                                                <li>User</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-x-2 ">
                                        <a
                                            href={route("user.export")}
                                            className="btn text-white btn-info btn-sm"
                                        >
                                            <UploadIcon />
                                            Export Excel
                                        </a>
                                    </div>
                                </div>
                                {props.listUser.data.length == 0 ? (
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
                                                            Nama
                                                        </th>
                                                        <th className="py-3 px-6 text-left">
                                                            Email
                                                        </th>
                                                        <th className="py-3 px-6 text-center">
                                                            No Telpon
                                                        </th>
                                                        <th className="py-3 px-6 text-center">
                                                            Level
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                    {props.listUser.data.map(
                                                        (user) => {
                                                            return (
                                                                <tr
                                                                    className="border-b border-gray-200 hover:bg-gray-100"
                                                                    key={
                                                                        user.id
                                                                    }
                                                                >
                                                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                            <span className="font-medium">
                                                                                {
                                                                                    user.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-3 px-6 text-left">
                                                                        {
                                                                            user.email
                                                                        }
                                                                    </td>
                                                                    <td className="py-3 px-6 text-center">
                                                                        {
                                                                            user.telp
                                                                        }
                                                                    </td>
                                                                    <td className="py-3 px-6 text-center capitalize">
                                                                        {
                                                                            user.level
                                                                        }
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AdminLayout>
    );
}

export default IndexUser;
