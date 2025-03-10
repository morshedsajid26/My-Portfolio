/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'pop': ["Poppins", "sans-serif"],
      'acme': ["Acme", 'sans-serif']
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s linear infinite',
      }
    },
  },
  plugins: [],
}