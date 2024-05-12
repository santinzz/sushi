/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'orange': '#e57f45',
        'green': '#005253'
      },
      colors: {
        'orange': '#e57f45',
        'green': '#005253'
      },
      textColor: {
        'orange': '#e57f45',
        'green': '#005253'
      }
    },
  },
  plugins: [],
}
