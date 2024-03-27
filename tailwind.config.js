/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', ],

        "montserrat":["Montserrat"],
        "poiret":["Poiret One"],

        "zen":["Zen Maru Gothic"]
      },
  
      colors: {
        myCustomColor: '#ff6347', 
        primary:"#007050",
        secondary: "#012241",
        light:"#F9F1E6",


      },
    },
  },
  plugins: [],
}