/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    fontFamily: {
      sans: ['Satoshi-Regular', 'ui-sans-serif', 'system-ui'],
      light: ['Satoshi-Light', 'ui-sans-serif', 'system-ui'],
      medium: ['Satoshi-Medium', 'ui-sans-serif', 'system-ui'],
      bold: ['Satoshi-Bold', 'ui-sans-serif', 'system-ui'],
      black: ['Satoshi-Black', 'ui-sans-serif', 'system-ui']
    },
    extend: {}
  },
  plugins: []
}
