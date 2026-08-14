import type { MetadataRoute } from "next";
import { APP_DESCRIPTION, APP_NAME, BRAND_COLOR } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: APP_NAME,
        short_name: APP_NAME,
        description: APP_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: BRAND_COLOR,
        icons: [
            { src: "/icon", sizes: "64x64", type: "image/png" },
            { src: "/apple-icon", sizes: "180x180", type: "image/png" },
        ],
    };
}
