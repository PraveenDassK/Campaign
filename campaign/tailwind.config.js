/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        exsans: ["exsans"],
      },
    },
  },
  plugins: [],
});
