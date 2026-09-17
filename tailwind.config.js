/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.tsx", "./index.tsx", "./constants.ts", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
