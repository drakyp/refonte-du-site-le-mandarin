import React from 'react';
import { Phone, ArrowDown } from './icons';
import heroImg from '../assets/ambiance.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Ambiance restaurant Le Mandarin Saint-Germain" 
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns"
        />
        {/* Dégradé sophistiqué qui se fond en bas vers le fond crème */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/30 mb-6 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          <span className="text-white uppercase tracking-[0.25em] text-xs font-semibold">
            L'Art Culinaire Asiatique depuis 1981
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
          Le Mandarin <br/>
          <span className="text-3xl sm:text-4xl md:text-6xl text-brand-gold font-normal italic font-serif">
            Saint-Germain
          </span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Une escale gastronomique d'exception au cœur de Paris 6e, 
          célébrant les traditions thaïlandaises et chinoises fait maison.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white/15 backdrop-blur-sm border border-white/60 text-white hover:bg-white hover:text-brand-dark transition-all uppercase tracking-widest text-xs font-semibold rounded-sm"
          >
            Découvrir la carte
          </a>
          <a 
            href="tel:0143290714" 
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-red border border-brand-red text-white hover:bg-brand-red-hover transition-all uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-2.5 rounded-sm shadow-lg shadow-brand-red/30"
          >
            <Phone size={16} />
            Réserver une table
          </a>
        </div>
      </div>

      {/* Flèche subtile vers le bas */}
      <a 
        href="#history" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Descendre"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
