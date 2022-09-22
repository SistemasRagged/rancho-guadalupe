/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        primary: "#220700",
        secondary: "#801a00",
        darkPrimary: "#0e0301",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      'slide': 'slideIn 700ms ease-out',
      'spin': 'spin 1s linear infinite'
    },
    keyframes: {
      slideIn: {
        '0%': {transform: "translateX(-50%)"},
        '100%': {transform: "translateX(0%)" },
      },
      spin: {
        '0%': {transform: "rotate(0deg)"},
        '100%': {transform: "rotate(360deg)"},
      }
    }
  },
  plugins: [],
}
