const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: "currentColor",
      black: colors.black,
      light: colors.white,
      indigo: colors.indigo,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      teal: colors.teal
    }
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
