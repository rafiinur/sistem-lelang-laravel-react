import React, { useState, useRef } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Paper } from "@mui/material";
import toRupiah from "@develoka/angka-rupiah-js";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Swal from "sweetalert2";

export default function Detail(props) {
    const [openModal, setOpenModal] = useState(false);

    const penawaranInput = useRef();
    const { data, setData, post, processing, reset, errors } = useForm({
        barang_id: `${props.detail.data.barang.id}`,
        lelang_id: `${props.detail.data.id}`,
        user_id: `${props.auth.user.id}`,
        penawaran: `${props.detail.data.barang.hargaAwal}`,
    });

    const showModal = (status) => {
        status == "Ditutup"
            ? Swal.fire({
                  icon: "error",
                  title: "Bukan Waktu Lelang",
                  showConfirmButton: false,
                  timer: 2000,
              })
            : setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);

        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("history.store"), {
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
            onError: () => penawaranInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title={props.title} />
            <div className="bg-gradient-to-l from-slate-300 to-slate-500 main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
                <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
                    <div className="hidden md:block large-image">
                        <img
                            className="object-cover cursor-pointer rounded-xl w-[420px] h-[420px]"
                            src={`http://ujikom-rafi.test:8000/assets/images/${props.detail.data.barang.gambar}`}
                            alt="snekers-photo"
                        />
                    </div>

                    <div className="md:hidden large-image">
                        <img
                            className="w-[100%] h-[300px] object-cover"
                            src={`http://ujikom-rafi.test:8000/assets/images/${props.detail.data.barang.gambar}`}
                            alt="snekers-photo"
                        />
                    </div>
                </div>

                <div className="description p-6 md:basis-1/2 md:py-[40px] ">
                    <h1 className="text-3xl md:text-4xl capitalize font-[700]">
                        {props.detail.data.barang.nama}
                    </h1>
                    <p className="text-start italic text-[14px] tracking-widest uppercase font-[700] mb-6">
                        {props.detail.data.status} <br />
                    </p>
                    <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
                        Dibuka Pada : {props.detail.data.tglLelang}
                    </p>
                    <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
                        {props.detail.data.barang.deskripsi}
                    </p>
                    <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
                        {props.detail.data.barang.deskripsi}
                    </p>

                    <div className="flex items-center space-x-6">
                        <div>
                            <p>Harga Awal</p>
                            {
                                <span className="text-2xl font-[700]">
                                    {toRupiah(
                                        props.detail.data.barang.hargaAwal
                                    )}
                                </span>
                            }
                        </div>
                        <ArrowForwardIcon />
                        <div>
                            <p>Harga Akhir</p>
                            <span className="text-2xl font-[700]">
                                {toRupiah(props.detail.data.hargaAkhir)}
                            </span>
                        </div>
                    </div>

                    <div className="buttons-container flex flex-col md:flex-row mt-12">
                        <Button
                            variant="contained"
                            endIcon={<DoubleArrowIcon />}
                            fullWidth
                            onClick={() => showModal(props.detail.data.status)}
                        >
                            Ikuti Lelang
                        </Button>
                        <Modal show={openModal} onClose={closeModal}>
                            <div className="p-6">
                                <form onSubmit={submit} className="p-6">
                                    <div className="mt-6">
                                        <InputLabel
                                            for="penawaran"
                                            value="Masukkan Penawaran Anda"
                                            className="sr-only"
                                        />
                                        <TextInput
                                            id="penawaran"
                                            type="number"
                                            name="penawaran"
                                            ref={penawaranInput}
                                            value={data.penawaran}
                                            handleChange={(e) =>
                                                setData(
                                                    "penawaran",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Masukkan Nominal"
                                        />
                                        <InputError
                                            message={errors.penawaran}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <SecondaryButton onClick={closeModal}>
                                            Cancel
                                        </SecondaryButton>

                                        <PrimaryButton
                                            className="ml-3"
                                            processing={processing}
                                        >
                                            Masukkan Penawaran
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                        ;
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
{
}
