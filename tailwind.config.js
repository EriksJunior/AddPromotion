module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '200px', 'max': '535px'},
      // => @media (min-width: 320px) { ... }

      'md': {'min': '536px', 'max':'600px'},
      // => @media (min-width: 600px) { ... }

      'lg': {'min': '601px', 'max':'994px'},
      // => @media (min-width: 900px) { ... }

      'xl': {'min': '995px', 'max':'1200px'},
      // => @media (min-width: 1200px) { ... }

    },
    extend: {},
  },
  plugins: [],
}
