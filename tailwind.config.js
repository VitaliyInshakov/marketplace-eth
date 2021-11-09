module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {
            maxWidth: {
                flex: {
                    "2": "2 2 0%"
                },
                "8xl": "1920px"
            }
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
        },
    },
    plugins: [],
}
