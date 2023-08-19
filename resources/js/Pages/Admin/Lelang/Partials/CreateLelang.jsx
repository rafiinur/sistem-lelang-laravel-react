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

function CreateLelang({ listBarang }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        barang: 0,
        tgl_lelang: "",
    });

    const openModal = () => {
        setShowModal(true);
    };

    const storeLelang = (e) => {
        e.preventDefault();

        post(route("lelang.store"), {
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
                <DialogTitle>Form Tambah Lelang</DialogTitle>
                <DialogContent>
                    <form onSubmit={storeLelang}>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} item>
                                <InputLabel forInput="barang" value="Barang" />
                                <select
                                    id="barang"
                                    name="barang"
                                    className="select select-bordered w-full max-w-xs"
                                    value={data.barang}
                                    onChange={onHandleChange}
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

export default CreateLelang;
