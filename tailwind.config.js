/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid', // Include all Liquid files in the Shopify theme
    './assets/**/*.js', // Include JavaScript files in the assets folder
    './snippets/**/*.liquid', // Snippets
    './sections/**/*.liquid', // Sections
    './templates/**/*.liquid', // Templates
    './layout/**/*.liquid', // Layout files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

