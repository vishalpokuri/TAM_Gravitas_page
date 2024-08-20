/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to your source files
  ],
  theme: {
    extend: {
      colors: {
        start: "#4872A7",
        end: "#00214A",
        cardbg: "#0A0A0A",
        phcolor: "#59A3FF",
      },
    },
  },
  plugins: [],
};
