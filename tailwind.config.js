const colors = require("tailwindcss/colors");

module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./src/**/*.html", "./src/**/*.ts"]
      : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
