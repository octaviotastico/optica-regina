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
      keyframes: {
        bgpan: {
          "0%":   { backgroundPosition: "center 0%" },
          "100%": { backgroundPosition: "center 100%" },
        },
      },
      animation: {
        "bg-pan-slowest": "bgpan 6s linear infinite alternate",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
