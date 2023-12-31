/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins','ui-sans-serif', 'system-ui'],
      'serif': ['Cormorant Upright','ui-serif', 'Georgia'],
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
        jumbotron: "url('./assets/testhero.jpg')",
        soi2front: "url('./assets/soi2front.jpg')",
        soi3front: "url('./assets/soi3front.jpg')",
      },
    },
  },
  plugins: [],
});
