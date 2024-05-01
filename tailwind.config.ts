/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
