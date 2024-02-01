/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sanchez', 'sans-serif'],
      },
      colors: {
        primary: "#001F3F",
        secondary: "#D62828",
        background: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
