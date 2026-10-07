import React from 'react';
import historyImg from '../assets/interior-1.jpg';

const History = () => {
  return (
    <section id="history" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden group">
              <img 
                src={historyImg} 
                alt="Intérieur chaleureux du Mandarin Saint-Germain" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-brand-red/30 m-4 pointer-events-none rounded-sm transition-all duration-500 group-hover:m-6 group-hover:border-brand-red/50"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">Notre Histoire</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Un Héritage Culinaire <br/> Familial
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed relative">
              <span className="absolute -top-6 -left-4 text-6xl text-brand-red/20 font-serif">"</span>
              <p className="italic text-gray-200">
                Depuis 1981, Le Mandarin vous accueille au cœur de St Germain des Prés, 
                pour vous faire découvrir les saveurs d'Asie.
              </p>
              <p>
                La famille Lam, vous propose une cuisine Thaï et Chinoise modernisée, 
                où les herbes aromatiques, les épices et les fruits exotiques, 
                procurent un goût inégalable aux recettes de la maison.
              </p>
              <p className="font-medium text-white pt-4">
                Nous vous souhaitons un bon repas.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="font-serif text-xl text-white italic">La Famille Lam</p>
              <p className="text-brand-red text-sm uppercase tracking-wider mt-1">Fondateurs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;

