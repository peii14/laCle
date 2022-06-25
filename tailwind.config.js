/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      height: {        
        '2s': '120vh',      
      },
      width: {        
        '2s': '200vh',      
      },
      textColor: {
        primary: "#282828",
        secondary: "#ffed4a",
        danger: "#771011",
        textSecond:"#777777"
      },
      dropShadow: {
        '3xl': '0 45px 45px rgba(0, 0, 0, 0.55)',
      },
      gridRow: {        
        'span-16': 'span 7 / span 7',      
      },
      colors: {
        // 500 for gradient, 600 for hover
        primary: { DEFAULT: "#394B39" },
        sec: { DEFAULT: "#FEB803" },
        third: { DEFAULT: "#ECCFAF" },
        forth: { DEFAULT: "#F0F0F0" },

      },
      screens: {
        samsung: "370px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}
