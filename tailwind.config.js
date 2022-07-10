/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        400: "4",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        turquoise: {
          DEFAULT: "#1C9CB2",
        },
        turquoiseDark: {
          DEFAULT: "#18879a",
        },
        turquoiseLight: {
          DEFAULT: "#1fadc7",
        },
        turquoiseLighter: {
          DEFAULT: "#22c1dd",
        },
      },
      fontFamily: {
        sans: ["Montserrat-Regular"],
        orbitron: ["Orbitron"],
        orbitronbold: ["Orbitron-Bold"],
        orbitronblack: ["Orbitron-Black"],
        mono: ["curier"],
      },
    },
  },
  plugins: [],
}
