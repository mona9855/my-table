/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lobster-regular': ['Lobster', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

