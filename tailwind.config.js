const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    // './storage/framework/views/*.php',
    './resources/views/app.blade.php',
    './resources/ts/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        warning: colors.yellow,
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Vazir', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
