module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add other template paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // Add other fonts as needed
      },
      colors: {
        cream: '#FFFAF4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // If using forms plugin
    // Other plugins
  ],
}