import React from 'react';
import { Star, StarHalf } from 'lucide-react';

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
    <section id="reviews" className="py-24 bg-brand-dark relative border-y border-gray-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-red to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">L'Avis de nos Clients</h2>
          
          {/* Note Google */}
          <div className="flex flex-col items-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-sm">
            <div className="flex gap-1 text-brand-red mb-3">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <StarHalf fill="currentColor" size={24} />
            </div>
            <div className="text-4xl font-serif text-white mb-1">4.2<span className="text-xl text-gray-500">/5</span></div>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Avis Google</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 border border-gray-800 bg-[#0a0a0a] hover:border-brand-red/30 transition-colors">
              <div className="flex gap-1 text-brand-red mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-serif font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.date}</p>
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

