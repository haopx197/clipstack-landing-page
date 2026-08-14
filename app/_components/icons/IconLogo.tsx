export function IconLogo() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="128 128 768 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: "clamp(32px, 6vw, 64px)", flexShrink: 0, color: "var(--color-primary)" }}
        >
            <path
                d="M288 192V384M192 288H384"
                stroke="currentColor"
                strokeWidth="48"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M512 288H608M512 832H608M704 288H720C781.856 288 832 338.144 832 400V416M832 704V720C832 781.856 781.856 832 720 832H704M416 832H400C338.144 832 288 781.856 288 720L288 704M832 512V608M288 512L288 608"
                stroke="currentColor"
                strokeWidth="48"
                strokeLinecap="round"
            />
        </svg>
    );
}
