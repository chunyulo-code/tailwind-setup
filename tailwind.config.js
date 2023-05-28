/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1440px"
    },

    extend: {
      colors: {
        darkGray: "#313538",
        selected: "#8B572A"
      }
    }
  },
  plugins: []
};
