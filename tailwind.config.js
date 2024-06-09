/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home.html",
    "./love.html",
    "./scripts/home.js",
    "./src/input.css",
  ],
  theme: {
    extend: {
      colors: {
        beigeOne: "#ffc074",
        beigeTwo: "#fdd489",
        skyBlue: "#77bbd4",
      },
    },
  },
  plugins: [],
};
