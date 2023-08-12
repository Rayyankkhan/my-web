/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '320',
      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'monserrat': ['Montserrat', 'sans-serif'],
      'gloock': ['Gloock', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        'maroon': '#6C0404',
        'darkblue': '#262525'
      },
      spacing:{
        '05': '500px',
        '400': '40%',
        '500': '50%',
        '600': '60%',
        '700': '70%',
        '800': '80%',
        '900': '90%',
        '1000': '100%'
      }
    },
  },
  plugins: [],
}
