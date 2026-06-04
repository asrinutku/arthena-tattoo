/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'ui-serif', 'serif'],
      },
      colors: {
        ink: {
          950: '#070707',
          900: '#111111',
          800: '#1a1a1a',
        },
        gold: {
          300: '#e4c27a',
          400: '#c79a4b',
          500: '#a67932',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.38)',
        gold: '0 18px 54px rgba(166, 121, 50, 0.18)',
      },
    },
  },
  plugins: [],
};
