/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1a1a1a',
        'secondary': '#202020',
        'p-text': '#eee',
        's-text': '#c1c2c3',
        'light-dark': '#2b2b2b',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
