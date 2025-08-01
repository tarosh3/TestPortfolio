module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}