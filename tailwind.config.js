// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-dark": "#1d1f2f",
        "secondary-dark": "#262837",
        primary: "#703a95",
        secondary: "#f07238",
        danger: "#de3d3d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
