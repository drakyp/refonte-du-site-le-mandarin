import React, { useState } from 'react';
import { ChevronDown } from './icons';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base sm:text-lg font-serif font-medium text-brand-dark group-hover:text-brand-red transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`text-brand-muted shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-red' : ''
          }`}
          size={18}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-brand-charcoal font-light text-sm leading-relaxed bg-brand-warm/40 p-4 rounded-sm border-l-2 border-brand-gold">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons tous les types de cartes bancaires (y compris l'American Express) ainsi que les paiements sans contact et Alipay. Nous acceptons également les cartes titres-restaurant dématérialisées (nous ne prenons plus le format papier)."
    },
    {
      question: "Proposez-vous de la vente à emporter ?",
      answer: "Tout à fait ! L'ensemble de nos plats à la carte est disponible à emporter. Vous pouvez commander directement par téléphone. Veuillez noter que nos formules et menus sont réservés au service sur place."
    },
    {
      question: "Y a-t-il une terrasse pour les beaux jours ?",
      answer: "Oui, nous disposons d'une agréable terrasse extérieure au cœur de la rue de Montfaucon pour profiter des déjeuners et dîners au grand air selon vos envies."
    },
    {
      question: "Faut-il réserver sa table à l'avance ?",
      answer: "La réservation est fortement conseillée, particulièrement le soir, le week-end et pour les grandes tablées. Nous accueillons également avec plaisir les clients de passage sans réservation selon les disponibilités."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-brand-red"></div>
            <span className="text-brand-red uppercase tracking-widest text-xs font-bold">Renseignements</span>
            <div className="h-[2px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-3">
            Questions Fréquentes
          </h2>
          <p className="text-brand-muted text-sm font-light">
            Tout ce que vous devez savoir pour organiser votre visite chez nous.
          </p>
        </div>

        <div className="bg-white border border-brand-border p-6 sm:p-10 rounded-sm shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
