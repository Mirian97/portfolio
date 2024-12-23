/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        200: '0px 0px 4px #FC9B9B',
        300: ' 0px 1px 2px rgba(16, 24, 40, 0.05)',
        400: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(252, 155, 155, 0.2);'
      },
      colors: {
        primary: {
          100: '#FC9B9B',
          200: '#FF6563'
        },
        secondary: {
          25: '#F5F5F5',
          50: '#e4e4e4',
          75: '#D0D5DD',
          100: '#667085',
          150: '#475467',
          200: '#344054',
          300: '#8E8E8E',
          400: '#1C1C1C'
        },
        success: {
          200: '#219653'
        }
      },
      animation: {
        'move-left-to-right': 'move-left-to-right 3s linear infinite'
      },
      keyframes: {
        'move-left-to-right': {
          '0%': {
            left: -42
          },
          '100%': {
            left: '100%'
          }
        }
      }
    },
    screens: {
      xs: '768px',
      sm: '1024px',
      md: '1440px',
      lg: '1536px'
    }
  },
  plugins: []
}
