/** @type {import('tailwindcss').Config} */

const tailwindcssConfig = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['dracula'],
  },
}

module.exports = tailwindcssConfig
