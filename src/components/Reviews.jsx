import React from 'react';
import { Star, StarHalf } from './icons';

const Reviews = () => {
  const reviews = [
    {
      name: "Sophie M.",
      date: "il y a 2 semaines",
      text: "Une institution à Saint-Germain ! Les brochettes de poulet sont incroyables et le service est toujours aussi chaleureux après toutes ces années.",
    },
    {
      name: "Jean-Baptiste L.",
      date: "il y a 1 mois",
      text: "Probablement l'un des meilleurs canards laqués de Paris. L'ambiance feutrée est parfaite pour un dîner en amoureux. Je recommande les yeux fermés.",
    },
    {
      name: "Claire D.",
      date: "il y a 3 mois",
      text: "Le Lok Lak est divin, la viande fond dans la bouche. Un rapport qualité-prix rare dans ce quartier. Toujours un plaisir d'y retourner.",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-warm/30 relative border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-brand-red"></div>
            <span className="text-brand-red uppercase tracking-widest text-xs font-bold">Preuve Sociale</span>
            <div className="h-[2px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-6">
            L'Avis de nos Clients
          </h2>
          
          {/* Note Google mise en valeur */}
          <div className="flex flex-col items-center p-6 bg-white border border-brand-border rounded-sm shadow-sm max-w-xs w-full">
            <div className="flex gap-1 text-brand-gold mb-2">
              <Star fill="currentColor" size={22} />
              <Star fill="currentColor" size={22} />
              <Star fill="currentColor" size={22} />
              <Star fill="currentColor" size={22} />
              <StarHalf fill="currentColor" size={22} />
            </div>
            <div className="text-4xl font-serif text-brand-dark font-bold mb-0.5">
              4.2<span className="text-xl text-brand-muted font-normal"> / 5</span>
            </div>
            <p className="text-xs text-brand-muted uppercase tracking-widest font-semibold">
              Basé sur les avis réels Google
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-8 border border-brand-border bg-white rounded-sm shadow-sm hover:shadow-md hover:border-brand-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={15} />
                  ))}
                </div>
                <p className="text-brand-charcoal font-light italic mb-6 leading-relaxed text-sm">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-brand-gold-light border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-brand-dark font-semibold text-sm">{review.name}</h4>
                  <p className="text-brand-muted text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
