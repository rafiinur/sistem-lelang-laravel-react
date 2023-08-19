import { useState } from "react";
import { useForm } from "@inertiajs/react";
import AddIcon from "@mui/icons-material/Add";
import {
    SpeedDial,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
} from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Swal from "sweetalert2";

function CreateUser() {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, processing, reset, errors, progress } =
        useForm({
            name: "",
            email: "",
            password: "",
            telp: 0,
            level: null,
        });

    const openModal = () => {
        setShowModal(true);
    };

    const storeUser = (e) => {
        e.preventDefault();

        post(route("user.store"), {
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
            onError: (page) =>
                Swal.fire({
                    icon: "error",
                    title: `${page.props.flash.message}`,
                    showConfirmButton: false,
                    timer: 2000,
                }),
        });
    };

    const closeModal = () => {
        setShowModal(false);

        reset();
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
                icon={<AddIcon />}
                onClick={openModal}
            />

            <Dialog open={showModal} onClose={closeModal} maxWidth="md">
                <DialogTitle>Form Tambah User</DialogTitle>
                <DialogContent>
                    <form onSubmit={storeUser}>
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
                            <Grid xs={12} item>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="password"
                                        handleChange={onHandleChange}
                                        type="password"
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
                                Tambah
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

export default CreateUser;
