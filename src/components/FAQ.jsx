import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-serif text-white group-hover:text-brand-red transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : ''}`}
          size={20}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 font-light text-sm leading-relaxed">
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
      answer: "Nous acceptons tous les types de cartes bancaires (y compris l'American Express) ainsi que les paiements via Alipay. Nous acceptons également les tickets restaurant au format carte (nous ne prenons plus le format papier)."
    },
    {
      question: "Proposez-vous de la vente à emporter ?",
      answer: "Tout à fait ! Tous les plats de notre carte sont disponibles à emporter. Veuillez noter que nos menus spéciaux ne sont pas proposés à emporter."
    },
    {
      question: "Y a-t-il une terrasse pour les beaux jours ?",
      answer: "Oui, notre terrasse est disponible tout au long de l'année au gré de vos envies pour profiter du quartier."
    },
    {
      question: "Faut-il réserver à l'avance ?",
      answer: "La réservation est recommandée (surtout pour les grands groupes) pour vous garantir une table. Cependant, elle n'est pas obligatoire : vous êtes toujours les bienvenus à l'improviste !"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-brand-red"></div>
            <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">Questions Fréquentes</span>
            <div className="h-[1px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="font-serif text-4xl text-white">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 p-8 sm:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

