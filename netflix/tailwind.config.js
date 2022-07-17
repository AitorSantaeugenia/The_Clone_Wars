/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, ts, tsx, html, js}"],
  theme: {
    extend: {
      opacity: {
        10: "0.10",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
