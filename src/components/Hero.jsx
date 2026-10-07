import React from 'react';
import { Phone } from 'lucide-react';
import heroImg from '../assets/ambience-1.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Ambiance restaurant Le Mandarin Saint-Germain" 
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="text-brand-red uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
          L'Excellence Asiatique depuis 1981
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-xl">
          Le Mandarin <br/>
          <span className="text-4xl md:text-6xl text-gray-200 font-light italic">Saint-Germain</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Une expérience gastronomique raffinée au cœur de Paris, 
          mêlant traditions culinaires thaïlandaises et chinoises.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-brand-dark transition-all uppercase tracking-widest text-sm font-semibold"
          >
            Découvrir la carte
          </a>
          <a 
            href="tel:0143290714" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-red border border-brand-red text-white hover:bg-red-700 hover:border-red-700 transition-all uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Réserver une table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

