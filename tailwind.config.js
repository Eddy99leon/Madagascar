/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bloom: ["Bloom", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        Noir: "#010102",
        Rouge: "#f40000",
        Vert: "#38b000",
      }
    },
  },
  plugins: [],
}

