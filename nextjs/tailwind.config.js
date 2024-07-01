/** @type {import('tailwindcss').Config} */

import themeColours from './utils/tailwind/themeColours'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      animation: {
        'cardloader': 'cardloader 3s linear infinite' 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: themeColours,
      keyframes:{
        cardloader:{
          '0%': { transform: 'translateY(0%) translateX(0%)' },
          '50%': { transform: 'translateY(-50%) translateX(-50%)' },
          '100%': { transform: 'translateY(0%) translateX(0%)' },
        }
      },
    },
  },
  plugins: [],
}
