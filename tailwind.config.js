/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: colors.black,
    //   white: colors.white,
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
