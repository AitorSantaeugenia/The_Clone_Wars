/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, ts, tsx, html, js}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
