/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "#D9D9D9",
        limeYellow: "#EBFF00",
        dark: "#121515",
      },
      borderWidth: {
        2: "2px",
      },
      backgroundColor: {
        light: "#D9D9D9",
        dark: "#0c0c08",
        limeYellow: "#EBFF00",
      },
      fontFamily: {
        LeagueSpartan: `'League Spartan', sans-serif`,
      },
    },
  },
  plugins: [],
};
