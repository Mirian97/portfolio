/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: {
          100: '#FC9B9B',
          200: '#FF6563'
        },
        secondary: {
          50: '#e4e4e4',
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
