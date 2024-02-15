/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFD7AC",
        "primary-200": "#996633",
        "primary-300": "#6D421A",
        "primary-400": "#3A2716",
        "primary-450": "#281910",
        "primary-500": "#170C0A",
        yi: "#D4E1E8",
        fau: "#FFB1B4",
        don: "#FFEF23",
        ryo: "#CF0000",
        meu: "#293B95",
        hong: "#5BFFDE",
        heath: "#4E3076",
        ish: "#FF9500",
        rodi: "#820000",
        sinc: "#8B9C15",
        outis: "#325339",
        greg: "#69350B",
        "grade-1": colors.gray[400],
        "grade-2": "#FF0000",
        "grade-3": "#FFEF23",
      },
      fontFamily: {
        sans: ["GmarketSansMedium", "Roboto", "sans-serif"],
        title: ["KOTRA_BOLD", "sans-serif"],
        gBold: ["GmarketSansBold", "sans-serif"],
        gLight: ["GmarketSansLight", "sans-serif"],
        number: ["ExcelsiorSans", "sans-serif"],
        eng: ["BebasKai", "sans-serif"],
        content: ["SCDream5", "sans-serif"],
      },
    },
  },
  plugins: [],
});
