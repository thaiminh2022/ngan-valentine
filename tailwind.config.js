/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
 'text': '#1a0c0b',
 'background': '#FFE8E5',
 'primary': '#d9432f',
 'secondary': '#f38c7e',
 'accent': '#fb543d',
},

    },
  },
  plugins: [],
}