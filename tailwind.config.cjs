/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
    screens: {
      // 'mobile': '0px',
      // 'mobile-l': '480px',
      'mobile-xl': '600px',
      'tablet': '720px',
      'laptop': '1200px',
      // 'medium': '1360px',
      // 'huge': '1550px',
      'desktop': '1920px'
    }
  },
  plugins: [],
}
