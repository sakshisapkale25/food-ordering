/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#265073',
        primaryLight: '#2D9596',
        secondary: '#9AD0C2',
        secondaryLight: '#ECF4D6',
      },
    },
  },
  plugins: [],
}
