const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/ts/app.tsx', 'public/js')
  .react()
  .copy('resources/assets', 'public/assets')
  .postCss('resources/css/app.css', 'public/css', [
    tailwindcss(),
    require('autoprefixer'),
  ])
  .postCss('resources/css/admin.css', 'public/css', [
    tailwindcss('admin.tailwind.config.js'),
    require('autoprefixer'),
  ])
  .alias({
    '@': 'resources/ts',
  });

mix.disableNotifications();

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
