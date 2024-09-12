/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0147FF",
        footer: "#282828"
      },
      fontFamily: {
        header: ' "Bebas Neue", sans-serif',
        paragraph: '"Roboto Condensed", sans-serif',
      },
    
    },
  },
  plugins: [],
};
