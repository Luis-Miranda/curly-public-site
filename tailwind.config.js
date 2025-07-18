/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        curly: {
          blanco: "#ffffff",
          negro: "#000000",
          dorado: "#d4af37",
        },
      },
    },
  },
  plugins: [],
}
