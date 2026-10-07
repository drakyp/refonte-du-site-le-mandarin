import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Notre Histoire', href: '#history' },
    { name: 'La Carte', href: '#menu' },
    { name: 'Avis', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white">
            Le Mandarin <span className="text-brand-red">Saint-Germain</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-200 hover:text-brand-red transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:0143290714" 
              className="px-6 py-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all font-medium uppercase text-sm tracking-widest"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-red transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 border-t border-gray-800' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-brand-red hover:bg-gray-800/50 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0143290714" 
            className="block w-full text-center mt-4 px-6 py-3 bg-brand-red text-white font-medium uppercase text-sm tracking-widest rounded-sm"
          >
            Appeler pour réserver
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

