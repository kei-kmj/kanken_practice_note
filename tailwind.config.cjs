/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js', './frontend/src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            "cupcake",
            "lemonade",
            "autumn",
            {
                mytheme: {
                    "primary": "#9e9478",
                    "secondary": "#de7c76",
                    "accent": "#95483f",
                    "neutral": "#dddcd6",
                    "base-100": "#f3f3f3",
                    "info": "#3e8b94",
                    "success": "#788036",
                    "warning": "#cc7000",
                    "error": "#de352c",
                },
                mytheme2: {
                    "primary": "#dddcd6",
                    "secondary": "#d9de76",
                    "accent": "#95483f",
                    "neutral": "#1c305c",
                    "base-100": "#fff9fc",
                    "info": "#ab6953",
                    "success": "#0094c8",
                    "warning": "#fabf14",
                    "error": "#b7282e",
                },
            },
        ],
    },
    plugins: [require("daisyui")],

}