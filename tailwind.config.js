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
        lightyellow: {
          DEFAULT: "#F2EFB6",
        },
        lightblue: {
          DEFAULT: "#A0EDF7",
        },
        green: {
          DEFAULT: "#00B2B2",
        },
        blue: {
          DEFAULT: "#0C69BF",
        },
        darkblue: {
          DEFAULT: "#141C64",
        },
        grey100: {
          DEFAULT: "#D9DFE1",
        },
      },
      fontFamily: {
        sans: ["Asap", "sans-serif"],
        mono: ["curier"],
      },
    },
  },
  plugins: [],
}
