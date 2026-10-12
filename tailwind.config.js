/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#FBF9F5',      // Fond principal blanc cassé / crème
        'brand-warm': '#F3ECE2',       // Fond secondaire chaud / lin
        'brand-card': '#FFFFFF',       // Cartes blanches douces
        'brand-dark': '#201D1A',       // Texte foncé élégant (presque noir chaud)
        'brand-charcoal': '#423D38',   // Titres secondaires / texte fort
        'brand-muted': '#7D746D',      // Texte secondaire / sous-titres
        'brand-border': '#EAE4DC',     // Bordures douces chaudes
        'brand-red': '#B91C1C',        // Rouge vermillon profond
        'brand-red-hover': '#991B1B',  // Hover vermillon
        'brand-gold': '#C5A059',       // Doré mat chic
        'brand-gold-light': '#F8F3E6', // Fond léger doré
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
