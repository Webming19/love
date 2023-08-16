const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '*': { boxSizing: 'border-box', touchAction: 'pan-y' },
        'html, body': { width: '100%', height: '100%' },
        'html': { touchAction: 'none' },
        'body, h1, h2, h3, h4, h5, h6, p, dl, dd, ul, li, ol, td, form, input, fieldset, legend, figure': {
          margin: '0',
          padding: '0',
        },
        'body': {
          fontFamily: '"Segoe UI", "Segoe WP", Arial, sans-serif',
          fontSize: '20px',
          color: '#000',
          backgroundColor: '#fff',
          overflowX: 'hidden',
        },
        'li': { listStyle: 'none' },
        'a': { textDecoration: 'none', color: '#000' },
        'a, input': { outline: 'none' },
        'em, i': { fontStyle: 'normal' },
        'b, strong, h1, h2, h3, h4, h5, h6': { fontWeight: 'normal' },
        'img': { display: 'block', border: 'none' },
        '::-webkit-scrollbar': { width: '0', height: '0' },
      });
    }),
  ],
  corePlugins: {
    preflight: false, // 禁用默认样式
  },
};
