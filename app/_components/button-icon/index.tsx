"use client";

import type { ComponentProps, ReactNode } from "react";

import s from "./button-icon.module.css";

type ButtonIconProps = {
    children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
    return (
        <button className={s.button} {...props}>
            {children}
        </button>
    );
};
