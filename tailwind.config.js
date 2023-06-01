/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        100: ' 0px 4px 4px rgba(0, 0, 0, 0.25);'
      },
      colors: {
        primary: {
          100: '#FC9B9B',
          200: '#FF6563'
        },
        secondary: {
          100: '#667085',
          200: '#344054',
          300: '#8E8E8E',
          400: '#1C1C1C'
        }
      }
    },
    screens: {
      xs: '768px',
      sm: '1024px',
      md: '1440px'
    }
  },
  plugins: []
}
