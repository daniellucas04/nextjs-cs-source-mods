/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        '60-white': '#F9F7F7',
        '30-white': '#e1e1e1',
        '10-white': '#5D2A42',
        // Dark mode
        '60-dark': '#26292e',
        '30-dark': '#393E46',
        '10-dark': '#00ADB5',

      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}