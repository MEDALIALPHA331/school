/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6FAFF",
        secondaryGrey: "#E6E7E9",
        secondaryGrey: "#9AA0A8",
        secondaryBlack: "#111111",
      },
      fontFamily: {
        primary: ["Open Sans", " sans-serif"],
      },
    },
  },
  plugins: [],
};
