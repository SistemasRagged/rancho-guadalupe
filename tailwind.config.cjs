/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        primary: "#5F0010",
        secondary: "#C7923A",
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
      'fadeIn': 'fadeIn 500ms ease-out',
      'slide': 'slideIn 700ms ease-out',
      'spin': 'spin 1s linear infinite'
    },
    keyframes: {
      fadeIn: {
        '0%': {opacity: 0},
        '100%': {opacity: 1},
      },
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
