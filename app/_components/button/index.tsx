"use client";

import type { ComponentProps, ReactNode } from "react";

import s from "./button.module.css";

type ButtonProps = {
    children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={s.button} {...props}>
            <div className={s.content}>{children}</div>
            <div className={s.flip}>
                <div className={s.flipContent}>
                    <div className={s.flipInner}>{children}</div>
                </div>
            </div>
        </button>
    );
}
