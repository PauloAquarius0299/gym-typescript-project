/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': "#f8f4eb",
        'gray-50': '#efe6e6',
        'gray-100': '#dfcccc',
        'gray-500': '#8b0000',
        'black-100': "#0d0d0d",
        'black-500': "#000",
        'primary-100': '#232323',
        'primary-300': '#ff3632',
        'primary-500': '#ff1d18',
        'secondary-400': '#ffcd58',
        'secondary-500': '#ffc132',

      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #ff1d18 0%, #ffc837 100%)',
        'mobile-home': 'url(/)'
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      content: {
        evolvetext: 'url(/)',
        abstractwaves: 'url(/)',
        sparkles: 'url(/)',
        circles: 'url(/)',
      },
    },
    screens: {
      xm: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
}