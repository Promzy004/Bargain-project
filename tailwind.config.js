import { transform } from 'framer-motion'

  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to top, #281B43 , #312252, #7F56D9 )',
        },
        colors: {
          customPrimary: '#7F56D9',
          custompurple1: '#281B43',
          custompurple2: '#312252',
          custompurple3: '#7F56D9',
          customgray1: '#807499',
          customgray2: '#604E89',
          customgray3: '#604E8999',
          customwhite: '#FAF8FF',
        },
        keyframes: {
          pulse: {
            '0%' : {color: 'purple'},
            '50%' : {color: 'red'},
            '100%' : {color: 'purple'},
          }
        },

        rotate: {
          'x-180': '180deg',
        }
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities ({
          '.rotate-y-180': {transform: 'rotateX(180deg)'},
        })
      }
    ],
  }