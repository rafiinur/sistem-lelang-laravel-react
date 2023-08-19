import React from "react";
import { Link } from "@inertiajs/react";
import { decode } from "html-entities";

export default function Paginator({ meta }) {
    return (
        <div className="flex justify-center">
            <div className="btn-group">
                {meta.links.map((link, i) => {
                    return (
                        <Link
                            preserveScroll
                            as="a"
                            href={link.url}
                            key={i}
                            className={
                                link.active
                                    ? "btn btn-dark"
                                    : "btn btn-dark btn-outline"
                            }
                        >
                            {decode(link.label)}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
