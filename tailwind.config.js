import { DEFAULT_VERSION } from "redux-persist";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"'],

        montserrat: ["Montserrat"],
        poiret: ["Poiret One"],

        zen: ["Zen Maru Gothic"],
      },

      colors: {
        primary: {
          DEFAULT: "#007050",
          50: " #338D73",
          100: "#66A996",
          200: " #99C6B9",
          300: " #CCE2DC",
        },
        secondary: {
          50: "#415971",
          100: "#8091A0",
          200: "#C0C8D0",
          300: "#FFFFFF",
          DEFAULT: "#012241",
        },
        light: {
          DEFAULT: "#f1f1f1",
          50: "#FAF4EB",
          100: "#FBF7F0",
          200: "#FDF9F5",
          300: "#FEFCFA",
        },

        gray: {
          DEFAULT: "#d8d5d2",

          50: " #C6C4C2",
          100: " #B5B3B1",
          200: " #A3A2A1",
          300: "  #929190",
          400: " #808080",
        },
      },
    },
  },
  plugins: [],
};
