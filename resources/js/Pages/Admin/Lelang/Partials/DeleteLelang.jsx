import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Swal from "sweetalert2";

function DeleteLelang({ dataId }) {
    const [id, setId] = useState(dataId);

    const deleteLelang = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Anda Yakin?",
            text: "Data akan dihapus permanen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, saya yakin",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("lelang.destroy", id), {
                    preserveScroll: true,
                    onSuccess: (page) =>
                        Swal.fire(
                            "Dihapus!",
                            `${page.props.flash.message}`,
                            "success"
                        ),
                    onError: (error) => console.log(error),
                });
            }
        });
    };

    return (
        <Link
            preserveScroll
            as="button"
            className="btn btn-ghost btn-xs"
            onClick={deleteLelang}
        >
            <DeleteOutlinedIcon />
        </Link>
    );
}

export default DeleteLelang;
