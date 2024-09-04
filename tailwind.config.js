/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0147FF",
      },
      fontFamily: {
        header: ' "Bebas Neue", sans-serif',
        paragraph: '"Roboto Condensed", sans-serif',
      },
      fontSize: {
        header: "3rem",
        paragraphSize: "1rem"
      },
    },
  },
  plugins: [require("daisyui")],
};
