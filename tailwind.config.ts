import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        sparkles: "url('/assets/sparkles.svg')",
      },
      colors: {
        active: '#FE403C',
        passion: '#F29703',
        unique: '#F83A7D',
        smart: '#029FE2',
        technique: '#1260EF',
        charisma: '#88D10E',
        sky: {
          50: '#E1F8FE',
          100: '#D1F2FC',
          200: '#B5E8F9',
          300: '#6ADAF4',
          400: '#29C0E7',
          500: '#10AEDA',
          600: '#008EC2',
          700: '#0175A3',
          800: '#006A94',
          900: '#075273',
          950: '#04354D',
        },
        grey: {
          50: '#F5F7F8',
          100: '#EEEFF1',
          200: '#DFE4E6',
          300: '#CBD2D6',
          400: '#B5BDC4',
          500: '#A1AAB3',
        },
        sun: {
          50: '#FEF4C3',
          100: '#FBEEAC',
          200: '#FEE581',
          300: '#FED843',
          400: '#FEC721',
          500: '#F8A608',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
