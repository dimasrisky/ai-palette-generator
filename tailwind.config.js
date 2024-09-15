/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#191919',
        'primary-gray': '#3C424D'
      },
      fontFamily: {
        'nexa-bold': ['Nexa Heavy', 'sans-serif'],
        'nexa-regular': ['Nexa Extra Light', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}