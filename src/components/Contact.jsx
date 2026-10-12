import React from 'react';
import { MapPin, Clock, PhoneCall, Info, Train } from './icons';
import OpenStatus from './OpenStatus';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-warm/30 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-brand-red"></div>
              <span className="text-brand-red uppercase tracking-widest text-xs font-bold">Informations Pratiques</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
              Venir Nous Rendre Visite
            </h2>

            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4 p-5 bg-white border border-brand-border rounded-sm shadow-sm hover:border-brand-gold/60 transition-colors">
                <div className="p-3 bg-brand-warm border border-brand-border text-brand-red rounded-sm shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-brand-dark font-semibold text-base mb-1">Adresse</h3>
                  <p className="text-brand-charcoal text-sm leading-relaxed">
                    5 Rue de Montfaucon<br />
                    75006 Paris, France
                  </p>
                  <span className="text-brand-muted text-xs block mt-1">Au cœur de Saint-Germain-des-Prés</span>
                </div>
              </div>

              {/* Métro */}
              <div className="flex items-start gap-4 p-5 bg-white border border-brand-border rounded-sm shadow-sm hover:border-brand-gold/60 transition-colors">
                <div className="p-3 bg-brand-warm border border-brand-border text-brand-red rounded-sm shrink-0">
                  <Train size={22} />
                </div>
                <div>
                  <h3 className="text-brand-dark font-semibold text-base mb-1.5">Accès Métro</h3>
                  <div className="space-y-1.5 text-sm">
                    <p className="flex items-center gap-2 text-brand-charcoal">
                      <span className="w-5 h-5 bg-[#CEA631] text-black text-xs font-bold flex items-center justify-center rounded-full shrink-0">10</span>
                      <span><strong>Mabillon</strong> (à 1 minute à pied)</span>
                    </p>
                    <p className="flex items-center gap-2 text-brand-charcoal">
                      <span className="w-5 h-5 bg-[#C9519A] text-white text-xs font-bold flex items-center justify-center rounded-full shrink-0">4</span>
                      <span><strong>Saint-Germain-des-Prés</strong> (à 3 minutes à pied)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4 p-5 bg-white border border-brand-border rounded-sm shadow-sm hover:border-brand-gold/60 transition-colors">
                <div className="p-3 bg-brand-warm border border-brand-border text-brand-red rounded-sm shrink-0">
                  <Clock size={22} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-brand-dark font-semibold text-base mb-1">Horaires de Service</h3>
                  <div className="text-brand-charcoal text-sm leading-relaxed mb-1">
                    <p><strong>Mardi au Dimanche</strong> :</p>
                    <p className="pl-2">Déjeuner : 12h00 – 15h00</p>
                    <p className="pl-2">Dîner : 18h00 – 23h00</p>
                    <p className="text-brand-red font-medium text-xs mt-1">Fermé le Lundi</p>
                  </div>
                  <OpenStatus />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="tel:0143290714" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red text-white hover:bg-brand-red-hover transition-all font-semibold uppercase text-xs tracking-widest shadow-md rounded-sm w-full sm:w-auto"
              >
                <PhoneCall size={18} />
                Appeler le 01 43 29 07 14
              </a>
            </div>
          </div>

          {/* Colonne droite : Carte & Renseignements */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-sm overflow-hidden border border-brand-border bg-white shadow-md">
              <iframe 
                src="https://maps.google.com/maps?q=5%20Rue%20de%20Montfaucon,%2075006%20Paris&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Plan d'accès Le Mandarin Saint-Germain"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="p-5 bg-white border border-brand-border rounded-sm shadow-sm flex items-start gap-3.5">
              <div className="text-brand-gold shrink-0 mt-0.5">
                <Info size={20} />
              </div>
              <div>
                <h4 className="text-brand-dark font-semibold text-sm mb-1">Accueil & Réservations</h4>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Sur place ou à emporter. Pour le confort de votre repas en soirée ou en groupe, nous vous conseillons de réserver votre table par téléphone au préalable.
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
