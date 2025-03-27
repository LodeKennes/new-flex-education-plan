/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'layout': '1280px',
      },
      colors: {
        'text-primary': '#141C24',
        'text-secondary': '#404D73',
        'border': '#E5E8EB',
        'notification': '#F5C754',
        'background': '#F7FAFA',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans Variable', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}