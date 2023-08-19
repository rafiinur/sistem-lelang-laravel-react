import React, { useState, useEffect } from "react";
import { Link, useForm, router } from "@inertiajs/react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Swal from "sweetalert2";

function UpdateUser({ dataId }) {
    const [id, setId] = useState(dataId);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setId(dataId);
    }, [id]);

    const { data, setData, post, processing, reset, errors, progress } =
        useForm({
            name: "",
            email: "",
            telp: 0,
            level: "",
            _method: "put",
        });

    const closeModal = () => {
        setShowModal(false);

        reset();
    };

    const editUser = (e) => {
        e.preventDefault();

        axios.get(route("user.edit", id)).then((response) => {
            setData((data) => ({ ...data, name: response.data.user.name }));

            setData((data) => ({ ...data, email: response.data.user.email }));
            setData((data) => ({
                ...data,
                telp: response.data.user.telp,
            }));
            setData((data) => ({
                ...data,
                level: response.data.user.level,
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

    const updateUser = (e) => {
        e.preventDefault();

        post(route("user.update", id), {
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
                onClick={editUser}
            >
                <EditOutlinedIcon />
            </Link>

            <Dialog open={showModal} onClose={closeModal} maxWidth="md">
                <DialogTitle>Form Edit Barang</DialogTitle>
                <DialogContent>
                    <form onSubmit={updateUser}>
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <div>
                                    <InputLabel forInput="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
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
                                        forInput="email"
                                        value="Email"
                                    />

                                    <TextInput
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        handleChange={onHandleChange}
                                        type="email"
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div>
                                    <InputLabel
                                        forInput="telp"
                                        value="No Telp"
                                    />

                                    <TextInput
                                        id="telp"
                                        name="telp"
                                        value={data.telp}
                                        className="mt-1 block w-full"
                                        autoComplete="telp"
                                        handleChange={onHandleChange}
                                        type="number"
                                    />

                                    <InputError
                                        message={errors.telp}
                                        className="mt-2"
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div className="mb-3">
                                    <InputLabel
                                        forInput="level"
                                        value="Level"
                                    />

                                    <select
                                        className="select select-bordered w-full "
                                        id="level"
                                        name="level"
                                        value={data.level}
                                        onChange={onHandleChange}
                                    >
                                        <option defaultValue={undefined}>
                                            --Pilih Level--{" "}
                                        </option>
                                        <option value="1">Petugas</option>
                                        <option value="2">Admin</option>
                                    </select>

                                    <InputError
                                        message={errors.level}
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

export default UpdateUser;
