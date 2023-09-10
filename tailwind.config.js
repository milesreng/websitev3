/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navy: '#282D3C',
      navylg: '#333a4d',
      beige: '#D6C69A',
      bluegray: '#b1c1c7',
      dbluegray: '#93a6ad',
      red: '#f2d0c2',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        'jos-sans': ['"Josefin Sans"', 'sans-serif'],
        'jos-slab': ['Josefin Slab"', 'serif']
      }
    },
  },
  plugins: [],
}

