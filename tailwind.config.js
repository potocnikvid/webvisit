/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
            },
            flex: {
                0.25: "25%",
                0.5: "50%",
                0.75: "75%",
                1: "100%",
            },
        },
    },
    plugins: [require("tailwind-scrollbar"), require("@headlessui/tailwindcss")],
};
