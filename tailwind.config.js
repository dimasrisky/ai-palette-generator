/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  },
  theme: {
    extend: {
      colors: {
        'primary-black': '#191919',
        'primary-gray': '#3C424D',
        'primary-white': '#f5f5f5'
      },
      fontFamily: {
        'nexa-bold': ['Nexa Heavy', 'sans-serif'],
        'nexa-regular': ['Nexa Extra Light', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'aeonik-bold': ['AeonikTRIAL Bold', 'sans-serif'],
        'aeonik-regular': ['AeonikTRIAL Regular', 'sans-serif']
      },
    },
  },
  plugins: [
    fluid
  ],
}