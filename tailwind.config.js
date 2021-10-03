module.exports = {
  purge: [
    "index.html",
    "./src/**/*.{vue,js}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "button-email": "#41B883",
        "button-twitter": "#1D9BF0",
        "button-github": "#171515",
        "button-discord": "#5865F2"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
