/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
         quicksand : ['Quicksand','sans-serif;']
      },
      colors: {
        blue : '#609EAF',
        oho : '#31E1E1',
        darkalt : '#1A1E1F',
        dark :  '#33373B5E',
      },
      backgroundImage:{
          'pattern' : "url('/images/Rectangle26.png')"
      }
    },
  },
  plugins: [],
}

