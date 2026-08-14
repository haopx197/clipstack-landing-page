import Link from "next/link";

import { Flex, IconLogo, Button, Typography } from "./_components";
import s from "./page.module.css";

export default function NotFound() {
    return (
        <div className={s.page} style={{ justifyContent: "center" }}>
            <main>
                <Flex align="center" justify="center" gap={12}>
                    <IconLogo />
                    <Typography variant="title" as="h1">
                        404
                    </Typography>
                </Flex>
                <Typography variant="subtitle" align="center" bottom={24} color="var(--color-text-strong)">
                    This page could not be found.
                </Typography>
                <Flex align="center" justify="center">
                    <Link href="/">
                        <Button>Return home</Button>
                    </Link>
                </Flex>
            </main>
        </div>
    );
}
