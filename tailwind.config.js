/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glassAntigua: ['glass-antigua-regular', 'serif']
      },
      colors: {
        'primary': '#121212',
        'secondary': '#FEFEFF',
      },
    },
  },
  plugins: [],
}

