import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import ListLelang from "@/Components/ListLelang";

const showDetails = (id) => {
    router.get(`/barang/${id}`);
};

function Barang(props) {
    return (
        <div className="flex items-center justify-center flex-wrap">
            <ListLelang />
        </div>
    );
}

export default Barang;
