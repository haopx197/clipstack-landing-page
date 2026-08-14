"use client";

import { useState } from "react";

import { IconCheck, IconCopy, IconTerminal } from "../icons";
import { ButtonIcon } from "../button-icon";
import s from "./command-box.module.css";

export function CommandBox({ command, ariaLabel = "Install command" }: { command: string; ariaLabel?: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className={s.wrap} role="group" aria-label={ariaLabel}>
            <IconTerminal />
            <code className={s.code}>{command}</code>
            <ButtonIcon
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy command"}
                data-state={copied ? "copied" : "idle"}
                style={{ borderLeft: "1px solid var(--color-primary-dim)" }}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </ButtonIcon>
        </div>
    );
}
