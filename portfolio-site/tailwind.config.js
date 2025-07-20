/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // 'media' da olabilir, ama biz class toggle kullanacağız
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Renkleri
        backgroundLight: '#f5f0e6', // krem ton
        textLight: '#4a4a4a',       // koyu gri
        accentLight: '#c19a6b',     // açık kahverengi veya sıcak tonlar

        // Dark Mode Renkleri
        backgroundDark: '#0b1a3f',  // koyu lacivert
        textDark: '#b0bec5',        // açık gri-mavi ton
        accentDark: '#78909c',      // gri-mavi alt tonlar
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  },
  plugins: [],
}
