/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        'soi-green': '#17B169',
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
