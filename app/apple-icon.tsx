import { ImageResponse } from "next/og";

import { BRAND_COLOR } from "@/lib/config";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        <svg width="180" height="180" viewBox="128 128 768 768" fill="none">
            <path
                d="M288 192V384M192 288H384"
                stroke={BRAND_COLOR}
                strokeWidth="72"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M512 288H608M512 832H608M704 288H720C781.856 288 832 338.144 832 400V416M832 704V720C832 781.856 781.856 832 720 832H704M416 832H400C338.144 832 288 781.856 288 720L288 704M832 512V608M288 512L288 608"
                stroke={BRAND_COLOR}
                strokeWidth="72"
                strokeLinecap="round"
            />
        </svg>,
        { ...size },
    );
}
