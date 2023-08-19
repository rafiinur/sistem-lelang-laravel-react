import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextAreaInput(
    {
        name,
        id,
        rows,
        placeholder,
        value,
        className,
        autoComplete,
        handleChange,
    },
    ref
) {
    const input = ref ? ref : useRef();

    return (
        <div className="flex flex-col items-start">
            <textarea
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                rows={rows}
                placeholder={placeholder}
                ref={input}
                autoComplete={autoComplete}
                onChange={(e) => handleChange(e)}
            />
            <p className="mt-2 text-sm text-gray-500">
                Deskripsi Singkat Tentang Barang
            </p>
        </div>
    );
});
