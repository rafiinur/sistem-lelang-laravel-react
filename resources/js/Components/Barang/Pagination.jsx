import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function Pagination({ meta }) {
    const current = meta.meta.current_page;
    const prev = meta.links.prev;
    const next = meta.links.next;

    return (
        <div className="btn-group">
            {prev && (
                <Link
                    onClick={(e) => e.preventDefault}
                    as="button"
                    href={prev}
                    className="btn"
                >
                    «
                </Link>
            )}

            <button className="btn">Halaman {current}</button>

            {next && (
                <Link
                    onClick={(e) => e.preventDefault}
                    as="button"
                    href={next}
                    className="btn"
                >
                    »
                </Link>
            )}
        </div>
    );
}
