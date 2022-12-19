/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'AvenirR'", 'sans-serif'],
        body: ["'AvenirR'", 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        grey: {
          main: '#686868',
          light: '#D6D6D6',
          lightest: '#F9F9F9'
        },
        blue: {
          main: '#4E59FF',
          light: '#E8E9FA'
        },
        primary: {
          main: '#4E59FF'
        },
        secondary: {
          main: '#FA3A3A'
        }
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #4E6EFC 108.81%)',
        'gradient-dark': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #5D79F2 108.81%)'
      }
    }
  },
  plugins: [],
}
