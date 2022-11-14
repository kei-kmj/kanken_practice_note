/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js','./frontend/src/**/*.{js,ts,jsx,tsx}' ],
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
          "primary": "#c8c2be",
          "secondary": "#ee827c",
          "accent": "#c49a6a",
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