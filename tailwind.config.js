module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '200px', 'max': '435px'},
      // => @media (min-width: 320px) { ... }

      'md': {'min': '436px', 'max':'600px'},
      // => @media (min-width: 600px) { ... }

      'lg': {'min': '601px', 'max':'900px'},
      // => @media (min-width: 900px) { ... }

      'xl': {'min': '901px', 'max':'1200px'},
      // => @media (min-width: 1200px) { ... }

    },
    extend: {},
  },
  plugins: [],
}
