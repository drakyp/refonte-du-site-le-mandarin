import React from 'react';
import historyImg from '../assets/chef.jpg';

const History = () => {
  return (
    <section id="history" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[520px] sm:h-[620px] lg:h-[660px] w-full rounded-sm overflow-hidden group shadow-xl bg-black">
              {/* Arrière-plan flouté (effet bokeh doux estompant le mur de la cuisine) */}
              <img 
                src={historyImg} 
                alt="" 
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[center_25%] scale-110 blur-[14px] opacity-80"
              />
              
              {/* Image principale nette avec focus sur le Chef, le wok et les flammes */}
              <img 
                src={historyImg} 
                alt="Le Chef du Mandarin Saint-Germain maîtrisant la flamme du wok" 
                loading="lazy"
                decoding="async"
                className="relative z-[1] w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                style={{
                  maskImage: 'linear-gradient(to top, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.15) 96%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.15) 96%, transparent 100%)'
                }}
              />

              {/* Léger vignettage subtil pour mettre en valeur les flammes */}
              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none"></div>

              {/* Cadre décoratif doré */}
              <div className="absolute inset-0 z-[3] border-2 border-brand-gold/50 m-4 pointer-events-none rounded-sm transition-all duration-500 group-hover:m-5 group-hover:border-brand-red"></div>
            </div>
            {/* Badge d'ancienneté repositionné en haut pour dégager le wok et les flammes */}
            <div className="absolute -top-3 right-3 sm:top-6 sm:-right-4 bg-[#1C1A18]/95 backdrop-blur-md border border-brand-gold/60 px-5 py-3.5 rounded-sm shadow-2xl flex items-center gap-3.5 z-10">
              <span className="text-white font-serif text-3xl sm:text-4xl font-bold tracking-tight">1981</span>
              <div className="h-7 w-[1px] bg-brand-gold/50"></div>
              <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider block leading-tight">Plus de 40 ans</span>
                <span className="text-white text-[11px] font-medium tracking-wide block">de passion culinaire</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-10 bg-brand-red"></div>
              <span className="text-brand-red uppercase tracking-widest text-xs font-bold">Notre Histoire</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
              Un Héritage Culinaire <br/>
              <span className="italic font-normal text-brand-charcoal">Transmis avec Passion</span>
            </h2>
            
            <div className="space-y-6 text-brand-charcoal font-normal text-base sm:text-lg leading-relaxed relative bg-brand-warm/60 p-6 sm:p-8 rounded-sm border-l-4 border-brand-red">
              <span className="absolute -top-4 -left-2 text-6xl text-brand-gold/30 font-serif select-none">“</span>
              <p className="italic text-brand-dark font-medium">
                Depuis 1981, Le Mandarin vous accueille au cœur de St Germain des Prés, 
                pour vous faire découvrir les saveurs d'Asie.
              </p>
              <p>
                La famille Lam, vous propose une cuisine Thaï et Chinoise modernisée, 
                où les herbes aromatiques, les épices et les fruits exotiques, 
                procurent un goût inégalable aux recettes de la maison.
              </p>
              <p className="font-semibold text-brand-red pt-2">
                Nous vous souhaitons un bon repas.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between">
              <div>
                <p className="font-serif text-xl text-brand-dark font-semibold italic">La Famille Lam</p>
                <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mt-0.5">Fondateurs & Maîtres Restaurateurs</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-gold-light border border-brand-gold/40 flex items-center justify-center font-serif text-brand-gold font-bold text-lg">
                林
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;
