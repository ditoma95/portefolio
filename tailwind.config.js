/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#99B1D7",
        secondary:  "#EDC2D6",
        light : "#f7f7f7",
        dark1 : "#333333",
        dark2 : "#999999",
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm: "2rem",
          lg: "4rem",
          xl : "5rem",
          "2xl" : "6rem",
        }
      }
    },
  },
  plugins: [],
}

