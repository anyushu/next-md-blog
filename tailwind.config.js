const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        black: colors.slate,
        gray: colors.slate,
        indigo: colors.indigo,
        red: colors.red,
        pink: colors.pink,
        yellow: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        green: colors.emerald,
        purple: colors.violet,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                textDecoration: 'none',
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
  plugins: [require('@tailwindcss/typography')],
}
