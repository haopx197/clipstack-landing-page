import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Google_Sans, Overpass_Mono } from "next/font/google";

import {
    APP_DESCRIPTION,
    APP_NAME,
    APP_TAGLINE,
    APP_VERSION,
    INSTALL_SCRIPT_URL,
    MIN_MACOS_NAME,
    MIN_MACOS_VERSION,
    SITE_URL,
} from "@/lib/config";
import "./globals.css";

const googleSans = Google_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-google-sans",
    display: "swap",
});

const overpassMono = Overpass_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-overpass-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${APP_NAME} — ${APP_TAGLINE}`,
        template: `%s — ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    applicationName: APP_NAME,
    keywords: [
        "clipboard manager",
        "clipboard history",
        "macos clipboard",
        "mac clipboard",
        "ClipStack",
        "copy paste history",
        "productivity mac",
        "apple silicon",
    ],
    authors: [{ name: APP_NAME, url: SITE_URL }],
    creator: APP_NAME,
    publisher: APP_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: APP_NAME,
        title: `${APP_NAME} — ${APP_TAGLINE}`,
        description: APP_DESCRIPTION,
        images: [
            {
                url: "/screenshot-og.png",
                width: 1200,
                height: 630,
                alt: `${APP_NAME} — ${APP_TAGLINE}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@haopx197",
        creator: "@haopx197",
        title: `${APP_NAME} — ${APP_TAGLINE}`,
        description: APP_DESCRIPTION,
        images: ["/screenshot-og.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "productivity",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

const softwareApplicationLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: `macOS ${MIN_MACOS_VERSION}+`,
    softwareVersion: APP_VERSION,
    softwareRequirements: `macOS ${MIN_MACOS_VERSION} ${MIN_MACOS_NAME} or later`,
    description: APP_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/screenshot-og.png`,
    screenshot: `${SITE_URL}/hero.png`,
    downloadUrl: INSTALL_SCRIPT_URL,
    author: {
        "@type": "Person",
        name: "haopx197",
        url: "https://x.com/haopx197",
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: APP_NAME,
    url: SITE_URL,
    description: APP_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
        "@type": "Organization",
        name: APP_NAME,
        url: SITE_URL,
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${googleSans.variable} ${overpassMono.variable}`}>
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
                />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
            </body>
        </html>
    );
}
