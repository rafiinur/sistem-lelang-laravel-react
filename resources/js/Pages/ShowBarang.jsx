import { Head } from "@inertiajs/react";
import React from "react";

function ShowBarang({ barang, title }) {
    return (
        <>
            <Head title={title} />
            <div className="container">
                <p>{barang.data.deskripsi}</p>
            </div>
        </>
    );
}

export default ShowBarang;
