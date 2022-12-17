/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#242A32",
        "light-blue": "#0296E5",
        "gray" : "#67686D",
        "dark-gray" : "#3A3F47"
      },
      fontFamily:{
        "sans" : "Poppins",
        "montserrat" : "Montserrat",
        "poppins" : "Poppins",
        "roboto" : "Roboto"
      }
    },
  },
  plugins: [],
}