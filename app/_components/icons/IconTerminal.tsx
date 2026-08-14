export function IconTerminal({ color = "#0a7777" }) {
    return (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
            <style>{`@keyframes blink{0%,100%{opacity:0}50%{opacity:1}}`}</style>
            <path
                style={{ animation: "blink 0.6s infinite" }}
                d="M10.625 8.625H5.625"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M0.625 8.625L4.03575 5.21426C4.31352 4.93648 4.45241 4.79759 4.45241 4.625C4.45241 4.45241 4.31352 4.31352 4.03574 4.03574L0.625 0.625"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
