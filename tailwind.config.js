/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "atoll": "#0d5f7d",
        "eastern-blue": "#1fa1a3",
        "neptune": "#7bc1b9",
        "wild-sand": "#f5f5f5",
        "buttercup": "#f6a713",
      },
      fontFamily: {
        'space-grotesk': ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

