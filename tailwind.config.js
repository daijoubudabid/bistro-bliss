/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans_dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

