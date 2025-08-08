module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
