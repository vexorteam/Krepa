/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0A0A0B',
          700: '#27272A',
          500: '#71717A',
          300: '#D4D4D8',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          100: '#F4F4EF',
          200: '#EDEDE7',
        },
        accent: {
          DEFAULT: '#FF5A1F',
          soft: '#FFE9DF',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      letterSpacing: {
        display: '-0.02em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
