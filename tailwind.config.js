/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'greatvibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        'luxury': {
          'gold': '#C0A062',
          'charcoal': '#2E2E2E',
          'ivory': '#F9F7F3',
        },
      },
    },
  },
  plugins: [],
};
