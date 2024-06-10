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
        sunsetOne: "#884a39",
        sunsetTwo: "#c38154",
        sunsetThree: "#ffc26f",
        sunsetFour: "#f9e0bb",
        beigeOne: "#ffc074",
        beigeTwo: "#fdd489",
        skyBlue: "#77bbd4",
      },
    },
  },
  plugins: [],
};
