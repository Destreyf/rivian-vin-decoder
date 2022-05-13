/*global require module:true*/
const formPlugin = require("@tailwindcss/forms");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [formPlugin],
};
