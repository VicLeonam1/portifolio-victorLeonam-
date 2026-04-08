/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-card': '#111111',
        'dark-surface': '#1a1a1a',
        'primary': '#FFD700'
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
        display: ["Righteous", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}