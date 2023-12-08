/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        light: '#D9D9D9',
        dark: '#121515',
      },
      backgroundColor:{
        light: '#D9D9D9',
        dark: '#121515',
      },
      fontFamily: {
        LeagueSpartan: `'League Spartan', sans-serif`,
      }
    },
  },
  plugins: [],
}