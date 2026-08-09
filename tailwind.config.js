/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0A0E16',
        navy: {
          DEFAULT: '#152238',
          dark: '#0E1626',
        },
        cardinal: {
          DEFAULT: '#C8102E',
          dark: '#8C0B20',
        },
        cream: {
          DEFAULT: '#F1E7D0',
          dark: '#D9CDB0',
        },
        gold: '#D9A441',
        olive: '#4A5232',
        accent: {
          cross: '#FF4B2E',
          stepp: '#8C5CFF',
          arts: '#E0192F',
          omni: '#2FA96B',
          aqua: '#2EC4D6',
          accomp: '#D9A441',
          stages: '#7BA05B',
          prog: '#8B98AD',
        }
      },
      fontFamily: {
        display: ['"Futura Display"', 'sans-serif'],
        varsity: ['"Futura Display"', 'sans-serif'],
        stencil: ['"Futura Display"', 'sans-serif'],
        body: ['Futura', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
