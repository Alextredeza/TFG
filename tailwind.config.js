/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      colors: {
        paletter: {
          blue: "#2B2D42",
          bluesecond: "#5D618F",
          bluethird:"#33364F",
          gray: "#8D99AE",
          white: "#EDF2F4",
          redlight: "#EF233C",
          red: "#D90429"
        }
      }
    },
  },
  plugins: [],
}

