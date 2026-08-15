import Image from "next/image";

import { APP_NAME, APP_TAGLINE, INSTALL_COMMAND, MIN_MACOS_NAME, MIN_MACOS_VERSION } from "@/lib/config";
import {
    Button,
    CommandBox,
    Flex,
    IconKeyboard,
    IconLogo,
    IconPin,
    IconShield,
    IconStack,
    Typography,
} from "./_components";
import s from "./page.module.css";

const features = [
    {
        icon: <IconKeyboard />,
        title: "Keyboard first",
        body: "Cmd+Shift+V opens history next to your cursor, flipping at screen edges. Drag the top strip to move it; next hotkey snaps it back. Click an item to paste into your last field.",
    },
    {
        icon: <IconStack />,
        title: "Text and screenshots",
        body: "Copies text and images. Cmd+Shift+3/4/5 screenshots land in your clipboard history automatically — no more Desktop clutter.",
    },
    {
        icon: <IconPin />,
        title: "Pin what matters",
        body: "Pin the snippets and links you use daily — they stay on top. The rest rolls off after 200 items.",
    },
    {
        icon: <IconShield />,
        title: "Local and private",
        body: "Native menu-bar app for Apple Silicon and Intel. Everything stays on your Mac. No cloud, no accounts, no telemetry.",
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
                <Typography variant="subtitle" as="h2" align="center" bottom={16} color="var(--color-white)">
                    {APP_TAGLINE}
                </Typography>
                <Flex align="center" justify="center">
                    <div className={s.versionNotice}>
                        <Typography align="center" variant="notice">
                            {APP_NAME} supports macOS {MIN_MACOS_VERSION} {MIN_MACOS_NAME} or later.
                        </Typography>
                    </div>
                </Flex>
                <div id="install">
                    <Typography variant="heading" align="center" top={48} bottom={16}>
                        🚀 Install {APP_NAME}
                    </Typography>
                    <Typography bottom={8} variant="bodyStrong">
                        Paste in Terminal. Auto-detects Intel or Apple Silicon. Safe to re-run — auto-upgrades to the latest version.
                    </Typography>
                    <CommandBox command={INSTALL_COMMAND} ariaLabel={`Install ${APP_NAME}`} />
                </div>
                <Typography variant="heading" align="center" top={48} bottom={16}>
                    🔧 Why {APP_NAME}?
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
                <Typography variant="heading" align="center" top={48} bottom={16}>
                    📸 Screenshot
                </Typography>
                <div className={s.hero}>
                    <Image
                        src="/hero.png"
                        alt={`${APP_NAME} clipboard manager for macOS — clipboard history window showing pinned snippets, copied text, images, and files with keyboard shortcuts`}
                        width={1600}
                        height={1989}
                        priority
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 480px"
                        className={s.heroImage}
                    />
                </div>
                <Typography variant="heading" align="center" top={48} bottom={16}>
                    🎯 Ready to try {APP_NAME}?
                </Typography>
                <Typography align="center" bottom={24}>
                    One command. No sign-up. Runs entirely on your Mac.
                </Typography>
                <Flex align="center" justify="center">
                    <Button href="#install">Install 🚀</Button>
                </Flex>
            </main>
            <footer className={s.footer}>
                <Typography as="span" color="var(--color-primary)">
                    © 2026 {APP_NAME}. All rights reserved.
                </Typography>
            </footer>
        </div>
    );
}
