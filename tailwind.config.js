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
        'primary-white': '#f7f7f7',
        'secondary-white': '#FFECEF',
        'typography-white': '#251B37',
        'white-alert': '#FFA3FD',
        'white-error': '#5D2A42',
        // Dark mode
        'primary-dark': '#3B28CC',
        'secondary-dark': '#3F8EFC',
        'typography-dark': '#ADD7F6',
        'dark-alert': '#87BFFF',
        'dark-error': '#3F8EFC',

      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}