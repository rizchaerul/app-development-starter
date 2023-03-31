/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#004e89",
                "primary-dark": "#00365f",
                "primary-light": "#3371a0",
                accent: "#ff6b35",
                "accent-dark": "#b24a25",
                "accent-light": "#ff885d",
            },
        },
    },
    plugins: [],
};
