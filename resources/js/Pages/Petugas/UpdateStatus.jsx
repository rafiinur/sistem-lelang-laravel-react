import React, { useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Swal from "sweetalert2";

function UpdateStatus({ dataId }) {
    const [id, setId] = useState(dataId);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setId(dataId);
    }, [id]);

    const { data, setData, post, processing, reset, errors } = useForm({
        status: "",
        _method: "patch",
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
                status: response.data.lelang.status,
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

    const updateStatus = (e) => {
        e.preventDefault();

        post(route("lelang.updateStatus", id), {
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
                <DialogTitle>Form Update Status</DialogTitle>
                <DialogContent>
                    <form onSubmit={updateStatus}>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} item>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            Ditutup
                                        </span>
                                        <input
                                            type="radio"
                                            name="status"
                                            id="status"
                                            value="Ditutup"
                                            onChange={onHandleChange}
                                            className="radio checked:bg-red-500"
                                        />
                                    </label>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            Dibuka
                                        </span>
                                        <input
                                            type="radio"
                                            name="status"
                                            id="status"
                                            value="Dibuka"
                                            onChange={onHandleChange}
                                            className="radio checked:bg-blue-500"
                                        />
                                    </label>
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

export default UpdateStatus;
