import Image from "next/image";

import { APP_NAME, APP_TAGLINE, INSTALL_COMMAND, MIN_MACOS_NAME, MIN_MACOS_VERSION } from "@/lib/config";
import { CommandBox, Flex, IconKeyboard, IconLogo, IconPin, IconShield, IconStack, Typography } from "./_components";
import s from "./page.module.css";

const features = [
    {
        icon: <IconKeyboard />,
        title: "Keyboard first",
        body: "Open your clipboard history with a global shortcut and paste in one click.",
    },
    {
        icon: <IconStack />,
        title: "Text, images, files",
        body: "Copy anything — code, screenshots, PDFs, folders, rich text. Images and files preview inline so you find the right one at a glance.",
    },
    {
        icon: <IconPin />,
        title: "Pin the ones you keep",
        body: "Pin the snippets and links you use daily — they stay on top. Everything else rolls off automatically.",
    },
    {
        icon: <IconShield />,
        title: "Native and private",
        body: "Built natively for macOS — light on CPU and battery. Everything stays on your Mac. No cloud, no accounts, no telemetry.",
    },
];

export default function Home() {
    return (
        <div className={s.page}>
            <main className={s.main}>
                <Flex align="center" justify="center" gap={12}>
                    <IconLogo />
                    <Typography variant="title" as="h1">
                        {APP_NAME}
                    </Typography>
                </Flex>
                <Typography variant="subtitle" as="h2" align="center" bottom={16} color="var(--color-text-strong)">
                    {APP_TAGLINE}
                </Typography>
                <Flex align="center" justify="center">
                    <div className={s.versionNotice}>
                        <Typography align="center" variant="notice">
                            {APP_NAME} supports macOS {MIN_MACOS_VERSION} {MIN_MACOS_NAME} or later.
                        </Typography>
                    </div>
                </Flex>
                <Typography variant="heading" align="center" top={48} bottom={16}>
                    🚀 Install {APP_NAME}
                </Typography>
                <Typography bottom={8} variant="bodyStrong">
                    Paste in Terminal. Auto-detects Intel or Apple Silicon. No security prompts.
                </Typography>
                <CommandBox command={INSTALL_COMMAND} ariaLabel={`Install ${APP_NAME}`} />
                <Typography variant="heading" align="center" top={48} bottom={16}>
                    🔧 What Does {APP_NAME} Do?
                </Typography>
                <div className={s.features}>
                    {features.map((feature) => (
                        <div key={feature.title}>
                            <Flex align="center" gap={12}>
                                {feature.icon}
                                <Typography variant="subtitle" as="h3">
                                    {feature.title}
                                </Typography>
                            </Flex>
                            <Typography top={8}>{feature.body}</Typography>
                        </div>
                    ))}
                </div>
                <div className={s.hero}>
                    <Image
                        src="/hero.png"
                        alt={`${APP_NAME} clipboard manager for macOS — clipboard history window showing pinned snippets, copied text, images, and files with keyboard shortcuts`}
                        width={2397}
                        height={2649}
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className={s.heroImage}
                    />
                </div>
            </main>
            <footer className={s.footer}>
                <Typography as="span" color="var(--color-primary)">
                    © 2026 {APP_NAME}. All rights reserved.
                </Typography>
            </footer>
        </div>
    );
}
