import React, { useState, useEffect } from 'react';
import { Menu, X } from './icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Notre Histoire', href: '#history' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'La Carte', href: '#menu' },
    { name: 'Avis', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const isSolidNav = isScrolled || isMobileMenuOpen;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isSolidNav 
        ? 'bg-brand-cream/95 backdrop-blur-md py-3.5 shadow-md border-b border-brand-border' 
        : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl font-bold tracking-wider transition-colors ${
            isSolidNav ? 'text-brand-dark' : 'text-white'
          }`}>
            Le Mandarin <span className="text-brand-red">Saint-Germain</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`transition-colors text-xs uppercase tracking-widest font-semibold ${
                  isSolidNav 
                    ? 'text-brand-charcoal hover:text-brand-red' 
                    : 'text-gray-100 hover:text-brand-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:0143290714" 
              className="px-5 py-2.5 bg-brand-red text-white hover:bg-brand-red-hover transition-all font-semibold uppercase text-xs tracking-widest rounded-sm shadow-sm"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors p-1 ${
                isSolidNav ? 'text-brand-dark hover:text-brand-red' : 'text-white hover:text-brand-gold'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-cream backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-xl ${
        isMobileMenuOpen ? 'max-h-96 border-b border-brand-border' : 'max-h-0'
      }`}>
        <div className="px-5 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-dark hover:text-brand-red hover:bg-brand-warm rounded-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0143290714" 
            className="block w-full text-center mt-3 px-6 py-3 bg-brand-red text-white font-semibold uppercase text-xs tracking-widest rounded-sm shadow-md"
          >
            Appeler pour réserver
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
