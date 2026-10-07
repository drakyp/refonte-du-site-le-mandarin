import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t border-gray-900 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white inline-block">
            Le Mandarin <span className="text-brand-red">Saint-Germain</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium uppercase tracking-widest text-gray-500">
          <a href="#hero" className="hover:text-brand-red transition-colors">Accueil</a>
          <a href="#history" className="hover:text-brand-red transition-colors">Histoire</a>
          <a href="#menu" className="hover:text-brand-red transition-colors">Carte</a>
          <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
        </div>
        
        <p className="text-gray-600 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Le Mandarin Saint-Germain. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

