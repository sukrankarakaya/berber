/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

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