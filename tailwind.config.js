/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                "background-light": "#ffffff",
                "background-dark": "#111827",
                "text-light": "#1f2937",
                "text-dark": "#f9fafb",
                "secondary-light": "#6b7280",
                "secondary-dark": "#9ca3af",
                "border-light": "#e5e7eb",
                "border-dark": "#374151"
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "sans-serif"],
                signature: ["Caveat", "cursive"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
    plugins: [],
}
