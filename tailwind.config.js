/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFD7AC",
        "primary-200": "#996633",
        "primary-300": "#6D421A",
        "primary-400": "#3A2716",
        "primary-500": "#170C0A",
        yisang: "#FFD7AC",
        faust: "#FFB1B4",
        donquixote: "#FFEF23",
        ryoshu: "#CF0000",
        meursault: "#293B95",
        honglu: "#5BFFDE",
        heathcliff: "#4E307",
        ishmael: "#FF9500",
        rodion: "#820000",
        sinclair: "#8B9C15",
        outis: "#325339",
        gregor: "#69350B",
        "grade-1": colors.gray[400],
        "grade-2": "#FF0000",
        "grade-3": "#FFEF23",
      },
    },
  },
  plugins: [],
};
