// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      // 1. Définition des étapes des animations (Keyframes)
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // 2. Création des classes utilitaires Tailwind (ex: animate-slide-up)
      animation: {
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.9s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
