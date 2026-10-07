import React from 'react';
import food1 from '../assets/food-1.jpg'; // Dim sum / skewers rep
import food2 from '../assets/duck.jpg'; // Duck rep
import food3 from '../assets/wok.jpg'; // Wok / Lok Lak rep

const Menu = () => {
  const signatureDishes = [
    {
      title: "Brochettes de Poulet à la Vietnamienne",
      description: "Tendres morceaux de poulet marinés aux épices douces et grillés à la perfection, servis avec une sauce cacahuète maison.",
      price: "14€",
      image: food1,
      badge: "Incontournable"
    },
    {
      title: "Canard aux 5 Parfums",
      description: "Cuisson lente et maîtrise parfaite pour une peau croustillante et une chair fondante, relevé aux cinq épices traditionnelles.",
      price: "26€",
      image: food2,
      badge: "Signature"
    },
    {
      title: "Bœuf Sauté Thaïlandais (Lok Lak)",
      description: "Dés de bœuf fondants saisis au wok ardent, saveurs riches et poivrées, accompagnés de riz tomaté parfumé.",
      price: "24€",
      image: food3,
      badge: "Coup de cœur"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-brand-red"></div>
            <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">Notre Carte</span>
            <div className="h-[1px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Plats Signatures
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Découvrez une sélection de nos créations les plus appréciées, 
            véritables emblèmes du savoir-faire de la maison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {signatureDishes.map((dish, index) => (
            <div key={index} className="group bg-brand-dark rounded-sm border border-gray-800 overflow-hidden hover:border-brand-red/50 transition-colors duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-lg">
                  {dish.badge}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="font-serif text-2xl text-white leading-tight">
                    {dish.title}
                  </h3>
                  <span className="text-brand-red font-semibold text-xl shrink-0">{dish.price}</span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block border-b border-brand-red pb-1 text-white hover:text-brand-red uppercase tracking-widest text-sm font-medium transition-colors"
          >
            Voir la carte complète au restaurant
          </a>
        </div>

      </div>
    </section>
  );
};

export default Menu;

