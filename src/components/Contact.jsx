import React from 'react';
import { MapPin, Clock, PhoneCall, Info, Train } from 'lucide-react';
import OpenStatus from './OpenStatus';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">Informations</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-10">
              Nous Rendre Visite
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-brand-dark border border-gray-800 text-brand-red group-hover:border-brand-red/50 group-hover:bg-brand-red/5 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Adresse</h3>
                  <p className="text-gray-400 font-light">
                    5 Rue de Montfaucon<br />
                    75006 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-brand-dark border border-gray-800 text-brand-red group-hover:border-brand-red/50 group-hover:bg-brand-red/5 transition-all">
                  <Train size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Accès Métro</h3>
                  <p className="text-gray-400 font-light text-sm">
                    <span className="inline-block w-4 h-4 bg-[#CEA631] text-brand-dark text-xs font-bold text-center leading-4 rounded-full mr-1">10</span> Mabillon (1 min à pied)<br />
                    <span className="inline-block w-4 h-4 bg-[#E0B0FF] text-brand-dark text-xs font-bold text-center leading-4 rounded-full mr-1 mt-2">4</span> Saint-Germain-des-Prés (3 min à pied)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-brand-dark border border-gray-800 text-brand-red group-hover:border-brand-red/50 group-hover:bg-brand-red/5 transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Horaires d'Ouverture</h3>
                  <p className="text-gray-400 font-light mb-2">
                    Mardi au Dimanche<br />
                    12h00 - 15h00<br />
                    18h00 - 23h00
                  </p>
                  <p className="text-brand-red font-medium text-sm mb-3">Fermé le lundi</p>
                  <OpenStatus />
                </div>
              </div>

            </div>

            <div className="mt-12">
              <a 
                href="tel:0143290714" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white hover:bg-red-700 transition-all font-semibold uppercase text-sm tracking-widest shadow-lg shadow-brand-red/20 w-full sm:w-auto justify-center"
              >
                <PhoneCall size={20} />
                01 43 29 07 14
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative h-[350px] w-full rounded-sm overflow-hidden border border-gray-800 bg-brand-dark group">
              <iframe 
                src="https://maps.google.com/maps?q=5%20Rue%20de%20Montfaucon,%2075006%20Paris&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Carte d'accès Le Mandarin Saint-Germain"
                className="transition-all duration-700 group-hover:filter-none"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[6px] border-[#0a0a0a]/20"></div>
            </div>
            
            <div className="p-6 bg-brand-dark border border-gray-800 flex items-start gap-4">
               <div className="text-brand-red shrink-0">
                  <Info size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Informations Pratiques</h3>
                  <p className="text-gray-400 font-light text-sm">
                    Sur place ou à emporter.<br />
                    Réservation recommandée le soir et le week-end, merci de nous appeler pour réserver votre table.
                  </p>
                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
