"use client";

import NextImage from "next/image";

export function Image({ src, alt, fill, className, sizes, ...props }) {
    return (
        <NextImage
            src={src}
            alt={alt || ""}
            fill={fill}
            className={className}
            sizes={sizes}
            {...props}
        />
    );
} 