module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '600px',
      // => @media (min-width: 600px) { ... }

      'lg': '900px',
      // => @media (min-width: 900px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

    },
    extend: {},
  },
  plugins: [],
}
