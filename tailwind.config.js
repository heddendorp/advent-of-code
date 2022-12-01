module.exports = {
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  darkMode: 'media', // or ‘media’ or ‘class’
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
