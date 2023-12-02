/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: {
        glow: '0 0 5px 0 #ffff66',
      },
    },
  },
  plugins: [],
};
