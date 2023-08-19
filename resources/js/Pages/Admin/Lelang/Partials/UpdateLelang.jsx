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
import Swal from "sweetalert2";

function UpdateLelang({ dataId, listBarang }) {
    const [id, setId] = useState(dataId);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setId(dataId);
    }, [id]);

    const { data, setData, post, processing, reset, errors } = useForm({
        barang: 0,
        tgl_lelang: "",
        _method: "put",
    });

    const closeModal = () => {
        setShowModal(false);

        reset();
    };

    const editBarang = (e) => {
        e.preventDefault();

        axios.get(route("lelang.edit", id)).then((response) => {
            setData((data) => ({
                ...data,
                barang: response.data.lelang.barang.id,
            }));
            setData((data) => ({
                ...data,
                tgl_lelang: response.data.lelang.tglLelang,
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

    const updateLelang = (e) => {
        e.preventDefault();

        post(route("lelang.update", id), {
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
                    <form onSubmit={updateLelang}>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} item>
                                <InputLabel forInput="barang" value="Barang " />
                                <select
                                    id="Barang"
                                    className="select select-bordered w-full max-w-xs"
                                    value={data.barang}
                                    onChange={(e) =>
                                        setData("barang", e.target.value)
                                    }
                                >
                                    <option defaultValue={undefined}>
                                        --Pilih Barang--{" "}
                                    </option>
                                    {listBarang.data.map((barang) => {
                                        return (
                                            <option
                                                key={barang.id}
                                                value={barang.id}
                                            >
                                                {barang.nama}
                                            </option>
                                        );
                                    })}
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <InputLabel
                                        forInput="tgl_lelang"
                                        value="Tanggal Lelang"
                                    />

                                    <TextInput
                                        type="date"
                                        id="tgl_lelang"
                                        name="tgl_lelang"
                                        className="mt-1 block w-full"
                                        value={data.tgl_lelang}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.tgl_lelang}
                                        className="mt-2"
                                    />
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

export default UpdateLelang;
