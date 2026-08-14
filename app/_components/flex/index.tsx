import React from "react";
import clsx from "clsx";

import s from "./flex.module.css";

type FlexProps = {
    display?: "none" | "inline-flex" | "flex";
    direction?: React.CSSProperties["flexDirection"];
    wrap?: React.CSSProperties["flexWrap"];
    justify?: React.CSSProperties["justifyContent"];
    align?: React.CSSProperties["alignItems"];
    gap?: React.CSSProperties["gap"];
} & React.ComponentPropsWithoutRef<"div">;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            display = "flex",
            direction = "row",
            wrap = "nowrap",
            justify = "normal",
            align = "normal",
            gap = 0,
            style,
            className,
            children,
            ...rest
        },
        ref,
    ) => (
        <div
            ref={ref}
            className={clsx(s.flex, className)}
            style={{
                display,
                flexDirection: direction,
                flexWrap: wrap,
                justifyContent: justify,
                alignItems: align,
                gap,
                ...style,
            }}
            {...rest}
        >
            {children}
        </div>
    ),
);

Flex.displayName = "Flex";
