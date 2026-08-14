import React from "react";
import clsx from "clsx";

import s from "./typography.module.css";

type TypographyProps = {
    variant?: "body" | "bodyStrong" | "notice" | "subtitle" | "heading" | "title";
    children: React.ReactNode;
    truncate?: boolean;
    as?: "p" | "div" | "span" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    maxWidth?: number;
    align?: React.CSSProperties["textAlign"];
    color?: React.CSSProperties["color"];
};

export const Typography = ({
    variant = "body",
    children,
    truncate = false,
    as = "p",
    top,
    right,
    bottom,
    left,
    maxWidth,
    align = "left",
    color,
}: TypographyProps) => {
    return React.createElement(
        as,
        {
            style: {
                marginTop: top,
                marginRight: right,
                marginBottom: bottom,
                marginLeft: left,
                maxWidth: maxWidth,
                textAlign: align,
                color: color,
            },
            className: clsx(s.base, s[variant], { [s.truncate]: truncate }),
        },
        children,
    );
};
