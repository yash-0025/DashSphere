// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        electric: {
          DEFAULT: '#7E22CE',
          light: '#A855F7',
          dark: '#581C87'
        },
        neon: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2'
        },
        lava: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626'
        }
      },
      backgroundImage: {
        'hyper': 'linear-gradient(45deg, #7E22CE, #06B6D4, #EF4444)',
        'electric': 'linear-gradient(45deg, #7E22CE, #A855F7)',
        'neon': 'linear-gradient(45deg, #06B6D4, #22D3EE)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animate-gradient': {
          animation: 'gradient-shift 8s ease infinite',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}