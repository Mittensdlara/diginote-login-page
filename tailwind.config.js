/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'light-bg': '#1E2235',
        'dark-bg' : '#1A1D2D',
        'hover-blue': "#4840D0",
        'gray' : '#B3B8D3'

      },
    },
  },
  plugins: [],
}

