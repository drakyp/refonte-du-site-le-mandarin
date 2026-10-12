import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1A18] text-gray-300 py-14 border-t border-[#2E2A26] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white inline-block">
            Le Mandarin <span className="text-brand-red">Saint-Germain</span>
          </a>
          <p className="text-xs text-brand-gold uppercase tracking-[0.25em] mt-1 font-medium">
            Maison Fondée en 1981 • Paris 6e
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <a href="#hero" className="hover:text-brand-gold transition-colors">Accueil</a>
          <a href="#history" className="hover:text-brand-gold transition-colors">Histoire</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Galerie</a>
          <a href="#menu" className="hover:text-brand-gold transition-colors">La Carte</a>
          <a href="#reviews" className="hover:text-brand-gold transition-colors">Avis</a>
          <a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>

        <div className="w-12 h-[1px] bg-[#3A3530] mx-auto mb-6"></div>
        
        <p className="text-gray-500 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Le Mandarin Saint-Germain — 5 Rue de Montfaucon, 75006 Paris. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
