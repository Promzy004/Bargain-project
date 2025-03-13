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
        keyframes: {
          pulse: {
            '0%' : {color: 'purple'},
            '50%' : {color: 'red'},
            '100%' : {color: 'purple'},
          }
        },
        animation: {
          'pulse': 'pulse 1s linear infinite',
        }
      },
    },
    plugins: [],
  }