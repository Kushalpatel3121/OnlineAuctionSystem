/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      primary:{
        'blue':'#002d72',
        'blue-light':'#004d91',
        'gray-1':'#53565a',
        'white-1':'#ffffff',
        'yellow-1':'#ffe1a0',
        'dark-1':'#282828',
      },
      secondary:{
        'sup-blue':'#0b1940',
        'sup-light-blue-1':'#007bc2',
        'sup-light-blue-2':'#54b1ee',
        'sup-gray-1':'#9d9d9d',
        'sup-gray-2':'#c4cdd6',
        'sup-gray-3':'#e5e6e8',
        'sup-gray-4':'#d5d6d8',
      },
      indicator:{
        'success':'#41c1a0',
        'error':'#ef314d',
        'warning':'#ffc557',
      }
    },
    fontFamily:{
      'poppins': ['Poppins','sans-serif'],
      'raleway': ['Raleway','sans-serif'],
      'source-sans-pro': ['Source Sans Pro','sans-serif'],
      'work-sans': ['Work Sans','sans-serif'],
      'roboto-mono': ['Roboto Mono','monospace'],
    },
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      backgroundImage: {
        'login-bg-1': "url('../public/images/auction-1.jpg')",
        'login-bg-2': "url('../public/images/auction-2.jpg')",
        'signup-bg-1': "url('../public/images/auction-3.jpg')",
      },
    },
  },
  plugins: [],
}
