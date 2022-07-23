/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, ts, tsx, html, js}"],
  theme: {
    extend: {
      opacity: {
        10: "0.10",
      },
    },
    screens: {
      smler: { min: "180px", max: "639px" },
      // => @media (min-width: 180px and max-width: 639px) { ... }

      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
