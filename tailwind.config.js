import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { 'animate-delay': dynamicValue => ({ animationDelay: dynamicValue }) },
        { values: theme('transitionDelay') }
      );
    })
  ],
  theme: {
    colors: {
      black: '#323232',
      current: 'currentColor',
      gray: { light: '#F6F6F6', dark: '#A9A9A9' },
      indigo: '#6320EE',
      transparent: 'transparent',
      white: '#FFFFFF'
    },
    extend: {
      animation: {
        'entry-right': 'entry-right 1s ease-in-out forwards',
        'fade-down': 'fade-down 700ms both',
        'fade-in': 'fade-in 700ms both',
        'fade-right': 'fade-right 700ms forwards',
        'grow-down': 'grow-down 1s ease-in-out forwards',
        'grow-right': 'grow-right 1s ease-in-out forwards'
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'opti-champion': ['Opti Champion', 'sans-serif'],
        knewave: ['Knewave']
      },
      keyframes: {
        'entry-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '50%': { opacity: '1', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'grow-down': {
          '0%': { height: 0 },
          '100%': { height: '100%' }
        },
        'grow-right': {
          '0%': { width: 0 },
          '100%': { width: '100%' }
        }
      }
    }
  }
};
