/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Robot', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/img/bg2.jpg')"
      }
    },
  },
  plugins: [],
}

