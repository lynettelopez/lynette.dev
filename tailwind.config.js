/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    colors: {
      // Utility
      current: 'currentColor',
      transparent: 'transparent',
      // Primary
      indigo: '#6320EE',
      // Secondary
      white: '#FFFFFF',
      gray: {
        light: '#F6F6F6',
        dark: '#A9A9A9'
      },
      black: '#323232'
    },
    extend: {
      fontFamily: {
        'opti-champion': ['Opti Champion', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        knewave: ['Knewave']
      }
    }
  }
};
