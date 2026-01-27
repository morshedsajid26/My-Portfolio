/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily:{
      'pop': ["Poppins", "sans-serif"],
      'acme': ["Acme", 'sans-serif']
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s linear infinite',
      
        'spin-slow': 'spin 15s linear infinite',
     
      }
    },
  },
  plugins: [
   require('tailwind-scrollbar'),
],
}