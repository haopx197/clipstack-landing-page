import React from "react";

import s from "./typography.module.css";

type TypographyProps = {
    variant?: "body" | "bodyStrong" | "notice" | "subtitle" | "heading" | "title";
    children: React.ReactNode;
    as?: "p" | "div" | "span" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    top?: string | number;
    bottom?: string | number;
    align?: React.CSSProperties["textAlign"];
    color?: React.CSSProperties["color"];
};

export const Typography = ({
    variant = "body",
    children,
    as = "p",
    top,
    bottom,
    align = "left",
    color,
}: TypographyProps) => {
    return React.createElement(
        as,
        {
            style: {
                marginTop: top,
                marginBottom: bottom,
                textAlign: align,
                color: color,
            },
            className: `${s.base} ${s[variant]}`,
        },
        children,
    );
};
