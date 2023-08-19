import React, { useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import ImageInput from "@/Components/ImageInput";
import Swal from "sweetalert2";

function UpdateBarang({ dataId }) {
    const [id, setId] = useState(dataId);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setId(dataId);
    }, [id]);

    const { data, setData, post, processing, reset, errors, progress } =
        useForm({
            nama: "",
            deskripsi: "",
            tgl: "",
            hargaAwal: 0,
            gambar: "",
            _method: "put",
        });
    const closeModal = () => {
        setShowModal(false);

        reset();
    };

    const editBarang = (e) => {
        e.preventDefault();

        axios.get(route("barang.edit", id)).then((response) => {
            setData((data) => ({ ...data, nama: response.data.barang.nama }));
            setData((data) => ({
                ...data,
                deskripsi: response.data.barang.deskripsi,
            }));
            setData((data) => ({ ...data, tgl: response.data.barang.tgl }));
            setData((data) => ({
                ...data,
                hargaAwal: response.data.barang.hargaAwal,
            }));
        });

        setShowModal(true);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const updateBarang = (e) => {
        e.preventDefault();

        post(route("barang.update", id), {
            preserveScroll: true,
            onSuccess: (page) => {
                Swal.fire({
                    icon: "success",
                    title: `${page.props.flash.message}`,
                    showConfirmButton: false,
                    timer: 2000,
                });

                closeModal();
            },
            onError: (error) => console.log(error),
        });
    };

    return (
        <>
            <Link
                preserveScroll
                as="button"
                className="btn btn-ghost btn-xs"
                onClick={editBarang}
            >
                <EditOutlinedIcon />
            </Link>

            <Dialog open={showModal} onClose={closeModal} maxWidth="md">
                <DialogTitle>Form Edit Barang</DialogTitle>
                <DialogContent>
                    <form onSubmit={updateBarang}>
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <div>
                                    <InputLabel forInput="nama" value="Nama" />

                                    <TextInput
                                        id="nama"
                                        name="nama"
                                        value={data.nama}
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />

                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div>
                                    <InputLabel
                                        forInput="hargaAwal"
                                        value="HargaAwal"
                                    />

                                    <TextInput
                                        id="hargaAwal"
                                        name="hargaAwal"
                                        value={data.hargaAwal}
                                        className="mt-1 block w-full"
                                        autoComplete="hargaAwal"
                                        handleChange={onHandleChange}
                                        type="number"
                                    />

                                    <InputError
                                        message={errors.hargaAwal}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div>
                                    <InputLabel
                                        forInput="deskripsi"
                                        value="Deskripsi"
                                    />

                                    <TextAreaInput
                                        id="deskripsi"
                                        name="deskripsi"
                                        value={data.deskripsi}
                                        className="mt-1 block w-full"
                                        autoComplete="deskripsi"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError
                                        message={errors.deskripsi}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <InputLabel forInput="tgl" value="Tgl" />

                                    <TextInput
                                        type="date"
                                        id="tgl"
                                        name="tgl"
                                        className="mt-1 block w-full"
                                        value={data.tgl}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.tgl}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <InputLabel
                                        forInput="gambar"
                                        value="Gambar"
                                    />

                                    <ImageInput
                                        id="gambar"
                                        name="gambar"
                                        className="mt-1 block w-full"
                                        handleChange={(e) =>
                                            setData("gambar", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.gambar}
                                        className="mt-2"
                                    />
                                    {progress && (
                                        <progress className="progress w-full"></progress>
                                    )}
                                </div>
                            </Grid>
                        </Grid>

                        <div className="flex items-center justify-end mt-5">
                            <PrimaryButton
                                className="ml-4"
                                processing={processing}
                            >
                                Update
                            </PrimaryButton>
                            <SecondaryButton
                                className="ml-4"
                                onClick={closeModal}
                            >
                                Tutup
                            </SecondaryButton>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default UpdateBarang;
