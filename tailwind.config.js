/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      gridTemplateColumns: {
        '2': '1fr minmax(0, auto)',
      },
      gridTemplateRows: {
        '2': '35px 35px 35px 35px',
      },
      scale: {
        '110': '1.10',
      },
    },
  },
  plugins: [],
}