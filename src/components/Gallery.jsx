import React from 'react';
import exterieur from '../assets/exterieur.jpg';
import bar from '../assets/bar.jpg';
import ambiance6 from '../assets/ambiance-6.jpg';
import vins from '../assets/vins.jpeg';
import deco from '../assets/deco.jpg';
import salade from '../assets/salade.jpg';
import ambiance5 from '../assets/ambiance-5.jpg';
import dessert from '../assets/dessert.jpg';

const Gallery = () => {
  const images = [
    { src: exterieur, alt: "Façade & terrasse, 5 Rue de Montfaucon" },
    { src: bar, alt: "Le bar & comptoir d'accueil" },
    { src: ambiance6, alt: "Moments de partage & verres entre amis" },
    { src: vins, alt: "Cave & sélection de vins de la maison" },
    { src: deco, alt: "Détails & décoration raffinée" },
    { src: salade, alt: "Salade fraîcheur aux herbes asiatiques" },
    { src: ambiance5, alt: "Grande table festive garnie de spécialités" },
    { src: dessert, alt: "Douceurs & desserts asiatiques maison" },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-warm/40 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-brand-red"></div>
            <span className="text-brand-red uppercase tracking-widest text-xs font-bold">Immersion</span>
            <div className="h-[2px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4">
            L'Atmosphère du Mandarin
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-sm sm:text-base font-light">
            Une harmonie entre tradition et modernité, au cœur du vibrant quartier Saint-Germain-des-Prés.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="relative h-44 sm:h-60 md:h-72 overflow-hidden group rounded-sm border border-brand-border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-xs font-medium tracking-wide">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
