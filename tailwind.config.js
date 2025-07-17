/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#212529', // Your existing custom color
        'promo-grey': '#495057', // A new custom color
        'secondary-green': '#28a745', // Another new custom color
      },
    },
  },
  plugins: [],
};
