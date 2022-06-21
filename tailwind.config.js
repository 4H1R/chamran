const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    // './storage/framework/views/*.php',
    './resources/views/app.blade.php',
    './resources/ts/**/*.tsx',
  ],
  theme: {
    screens: {
      'xm': '415px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      
    },

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

  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e, postcss }) => {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
