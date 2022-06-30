const draculaColors = require('tailwind-dracula/colors')
const tailwindColors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        ...draculaColors,
      },
      typography: {
        DEFAULT: {
          css: {
            color: tailwindColors.slate[50],
            a: {
              textDecoration: 'none',
              color: draculaColors.cyan[300],
              '&:hover': {
                color: draculaColors.cyan[100],
              },
            },
            pre: {
              overflow: 'hidden !important',
              padding: '0 !important',
              borderRadius: '0.375rem !important',
            },
            blockquote: {
              fontSize: '0.85em',
              letterSpacing: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-dracula')()],
}
