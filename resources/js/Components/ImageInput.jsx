import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function ImageInput(
    { name, id, value, handleChange, className },
    ref
) {
    const input = ref ? ref : useRef();

    return (
        <input
            type="file"
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            className={
                `file-input file-input-bordered file-input-sm w-full max-w-md mt-1 mb-2` +
                className
            }
        />
    );
});
