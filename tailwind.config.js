/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
