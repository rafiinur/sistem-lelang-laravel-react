import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Swal from "sweetalert2";
function DeleteUser({ dataId }) {
    const [id, setId] = useState(dataId);

    const deleteUser = (e) => {
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
                router.delete(route("user.destroy", id), {
                    preserveScroll: true,
                    onSuccess: (page) =>
                        Swal.fire(
                            "Dihapus!",
                            `${page.props.flash.message}`,
                            "success"
                        ),
                    onError: (page) => console.log(page.props.errors),
                });
            }
        });
    };

    return (
        <Link
            preserveScroll
            as="button"
            className="btn btn-ghost btn-xs"
            onClick={deleteUser}
        >
            <DeleteOutlinedIcon />
        </Link>
    );
}

export default DeleteUser;
