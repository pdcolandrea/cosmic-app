/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        dark: '#0F0E0F',
        earth: '#B6F3FF',
      },
    },
  },
  plugins: [],
};
