module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
      screens: {
        phone: { max: "480px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
