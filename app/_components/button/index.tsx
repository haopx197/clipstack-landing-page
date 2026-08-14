"use client";

import type { ComponentProps, ReactNode } from "react";

import s from "./button.module.css";

type ButtonProps = {
    children: ReactNode;
    href?: string;
} & Omit<ComponentProps<"button">, "children">;

export function Button({ children, href, ...props }: ButtonProps) {
    const inner = (
        <>
            <div className={s.content}>{children}</div>
            <div className={s.flip}>
                <div className={s.flipContent}>
                    <div className={s.flipInner}>{children}</div>
                </div>
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} className={s.button}>
                {inner}
            </a>
        );
    }

    return (
        <button className={s.button} {...props}>
            {inner}
        </button>
    );
}
