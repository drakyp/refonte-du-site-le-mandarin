import React, { useState } from 'react';
import duck from '../assets/duck.jpg';
import boeufBasilic from '../assets/boeuf-basilic.jpg';
import gambas from '../assets/gambas.jpeg';
import brochettesPoulet from '../assets/brochettes-poulet.jpg';
import nems from '../assets/nems.jpg';
import dimsumHakao from '../assets/dimsum-hakao.jpg';
import pouletCurry from '../assets/poulet-curry.jpg';
import loklak from '../assets/loklak.jpg';
import padthai from '../assets/padthai.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('tous');

  // Plats Phares / Iconiques mis en avant visuellement
  const iconicDishes = [
    {
      title: "Canard aux 5 Parfums",
      tag: "Signature de la Maison",
      description: "Notre recette emblématique rôtie : peau laquée croustillante et chair fondante mijotée au mélange secret des 5 épices traditionnelles.",
      image: duck,
      badge: "Incontournable",
      category: "plats"
    },
    {
      title: "Bœuf Sauté au Basilic Thaï",
      tag: "Wok & Fonte Ardente",
      description: "Lamelles de bœuf fondantes saisies au wok sur plaque chauffante, parfumées au basilic thaï frais, oignons doux et piments légers.",
      image: boeufBasilic,
      badge: "Spécialité Wok",
      category: "plats"
    },
    {
      title: "Gambas Grillées",
      tag: "Saveurs Marines",
      description: "Belles gambas entières grillées minute à la flamme, délicatement parfumées aux herbes d'Asie et servies dorées et croustillantes.",
      image: gambas,
      badge: "Spécialité Grillades",
      category: "plats"
    },
    {
      title: "Brochettes de Poulet Vietnamiennes",
      tag: "Grillades Épicées",
      description: "Filets de poulet marinés à la citronnelle et aux épices douces, grillés minute à la flamme et accompagnés de notre sauce cacahuète maison.",
      image: brochettesPoulet,
      badge: "Coup de Cœur",
      category: "entrees"
    },
    {
      title: "Nems Croustillants Maison",
      tag: "Recette Traditionnelle",
      description: "Galettes de riz dorées minutieusement roulées chaque matin, farce généreuse et herbes fraîches, menthe et batavia.",
      image: nems,
      badge: "100% Fait Maison",
      category: "entrees"
    },
    {
      title: "Panier Dim Sum : Ha Kao & Siu Mai",
      tag: "Spécialité Vapeur",
      description: "Duo incontournable de raviolis vapeur : délicats Ha Kao aux crevettes enveloppés d'une pâte fine translucide et Siu Mai savoureux, cuits minute en panier de bambou traditionnel.",
      image: dimsumHakao,
      badge: "Panier Bambou",
      category: "vapeurs"
    },
    {
      title: "Poulet au Curry & Lait de Coco",
      tag: "Douceur Thaï",
      description: "Mijoté dans un curry onctueux au lait de coco, agrémenté de pousses de bambou et de feuilles de kaffir parfumées.",
      image: pouletCurry,
      badge: "Parfumé",
      category: "plats"
    },
    {
      title: "Bœuf Lok Lak Traditionnel",
      tag: "Spécialité Maison",
      description: "Dés de bœuf ultra-tendres marinés et caramélisés à feu vif au wok, servis sur un lit de salade croquante, oignons et tomates fraîches.",
      image: loklak,
      badge: "Iconique",
      category: "plats"
    },
    {
      title: "Pad Thaï Traditionnel",
      tag: "Spécialité Thaïlandaise",
      description: "Nouilles de riz sautées minute au wok ardent, pousses de soja croquantes, œuf, cacahuètes pilées, ciboulette thaï et jus de citron vert frais.",
      image: padthai,
      badge: "Incontournable",
      category: "plats"
    }
  ];

  // Sélection de la Carte classée par catégories (SANS PRIX)
  const menuCategories = [
    {
      id: "entrees",
      name: "Entrées",
      desc: "Pour éveiller vos papilles en douceur",
      items: [
        { name: "Nems / Pâtés Impériaux Maison", detail: "Galettes croustillantes, herbes fraîches & sauce nuoc-mâm" },
        { name: "Brochettes de Poulet à la Citronnelle", detail: "Marinées aux aromates d'Asie et servies avec sauce cacahuète maison" },
        { name: "Rouleaux de Printemps Frais", detail: "Crevettes, vermicelles de riz, menthe & pousses de soja" },
        { name: "Salade de Papaye Verte à la Thaï", detail: "Lamelles croquantes, cacahuètes pilées, piment doux et citron vert" },
        { name: "Soupe Pékinoise Piquante & Aigre-Douce", detail: "Bouillon réconfortant au tofu, bambou et champignons noirs" },
        { name: "Soupe Tom Yam aux Crevettes", detail: "Bouillon thaïlandais à la citronnelle et lait de coco" }
      ]
    },
    {
      id: "vapeurs",
      name: "Spécialités Vapeur",
      desc: "Dim sums cuits minute en paniers de bambou",
      items: [
        { name: "Ha Kao aux Crevettes", detail: "Raviolis translucides farcis aux crevettes sauvages" },
        { name: "Siu Mai au Porc & Champignons", detail: "Bouchées tendres cuites en paniers de bambou" },
        { name: "Raviolis Végétariens aux Légumes Croquants", detail: "Chou chinois, carottes, champignons parfumés" },
        { name: "Grand Assortiment Vapeur Maison (8 pièces)", detail: "Dégustation des spécialités vapeur de la maison" }
      ]
    },
    {
      id: "plats",
      name: "Plats Principaux",
      desc: "Viandes fondantes et poissons cuisinés au wok ardent",
      items: [
        { name: "Canard Laqué Traditionnel", detail: "Rôti avec sa peau croustillante et sauce prune maison" },
        { name: "Bœuf Sauté au Basilic Thaï sur Plaque", detail: "Saisi à feu vif, basilic thaï frais et oignons doux" },
        { name: "Bœuf Lok Lak Traditionnel", detail: "Dés de bœuf marinés et caramélisés au wok, salade croquante, oignons & tomates" },
        { name: "Pad Thaï Maison (Poulet ou Crevettes)", detail: "Nouilles de riz sautées au wok, soja, cacahuètes & citron vert" },
        { name: "Porc au Caramel à la Vietnamienne", detail: "Mijoté lentement dans un jus réduit au sucre de canne" },
        { name: "Porc à la Sauce Aigre-Douce", detail: "Morceaux dorés, ananas frais, poivrons et sauce brillante" },
        { name: "Gambas Grillées Maison", detail: "Belles gambas entières grillées minute, relevées aux herbes fraîches et aromates" },
        { name: "Crevettes Sautées Sel & Poivre", detail: "Saisies au wok à feu vif avec ail doré et ciboules" }
      ]
    },
    {
      id: "accompagnements",
      name: "Accompagnements",
      desc: "Riz parfumés et légumes sautés à la flamme",
      items: [
        { name: "Riz Cantonais Maison", detail: "Œuf brouillé, petits pois, ciboulette et effiloché savoureux" },
        { name: "Riz Nature au Jasmin", detail: "Riz blanc long grain parfumé d'Asie du Sud-Est" },
        { name: "Riz Sauté à la Thaïlandaise", detail: "Riz parfumé sauté minute aux petits légumes et arômes thaï" },
        { name: "Légumes Chop-Suey", detail: "Sélection de légumes frais de saison croquants sautés au wok" },
        { name: "Riz Gluant en Panier Bambou", detail: "Cuit à la vapeur selon la tradition thaïlandaise" },
        { name: "Nouilles Sautées Maison", detail: "Wok ardent aux pousses de soja et sauce soja brune" }
      ]
    }
  ];

  // Menus et Formules (avec contenu détaillé - SANS PRIX)
  const formulas = [
    {
      name: "Menu Express",
      subtitle: "Tous les midis, du mardi au vendredi (sauf fériés)",
      tag: "Déjeuner Express",
      choice: "Entrée + Plat ou Plat + Dessert",
      sections: [
        { label: "Entrée au choix", items: "Salade chinoise au poulet, Nems chauds, Potage pékinois ou Rouleau de printemps" },
        { label: "Plat au choix", items: "Poulet Mandarin, Bœuf aux oignons, Porc sauce aigre-douce ou Plat du jour" },
        { label: "Accompagnement", items: "Riz nature ou Riz cantonais" },
        { label: "Dessert au choix", items: "Lychees, Nougats mous au sésame ou Glace (une boule)" }
      ],
      desc: "Idéal pour un déjeuner d'affaires rapide, savoureux et équilibré."
    },
    {
      name: "Menu Vapeur",
      subtitle: "Tous les midis, du mardi au vendredi (sauf fériés)",
      tag: "Spécialité Vapeur",
      choice: "Formule Vapeur Complète",
      sections: [
        { label: "Entrée / Vapeurs", items: "Assortiment de bouchées vapeur (Crevettes, Porc, Bœuf)" },
        { label: "Accompagnement", items: "Riz cantonais" }
      ],
      desc: "Une cuisson saine à la vapeur préservant toutes les textures et arômes."
    },
    {
      name: "Menu Thaï",
      subtitle: "Disponible midi & soir (sur place uniquement)",
      tag: "Tradition Thaïe",
      choice: "Entrée + Plat ou Plat + Dessert",
      sections: [
        { label: "Entrée au choix", items: "Salade thaïlandaise, Soupe de poulet citronnelle ou Nems chauds" },
        { label: "Plat au choix", items: "Poulet sauté au basilic, Brochette bœuf thaï, Poulet au citron ou Porc aigre-doux" },
        { label: "Accompagnement", items: "Riz nature ou Riz cantonais" },
        { label: "Dessert au choix", items: "Lychees, Nougats mous au sésame ou Glace (une boule)" }
      ],
      desc: "L'équilibre parfait entre épices douces, herbes fraîches et traditions thaïes."
    },
    {
      name: "Formule Dégustation",
      subtitle: "L'Héritage Lam — Tout inclus",
      tag: "Menu Prestige",
      choice: "Grand Festin pour la table",
      isPrestige: true,
      sections: [
        { label: "Entrées", items: "Soupe crevettes citronnelle, Salade bœuf citronnelle, Assortiment vapeur et Nems chauds" },
        { label: "Plats", items: "Bœuf sauté basilic sur fonte, Crevettes ail & poivre, Canard aux 5 parfums et Poisson du marché" },
        { label: "Accompagnements", items: "Riz thaï aux crevettes, Nouilles sautées maison ou Riz nature" },
        { label: "Desserts", items: "Dessert du jour, Salade de fruits maison ou Glace au thé vert" }
      ],
      desc: "Le voyage ultime à travers les créations signatures de notre famille depuis 1981."
    }
  ];

  return (
    <section id="menu" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. EN-TÊTE ET PLATS PHARES / ICONIQUES                   */}
        {/* ======================================================== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-warm border border-brand-border mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Cuisine 100% Fait Maison
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4 leading-tight">
            Nos Plats Phares & Spécialités
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Les recettes les plus emblématiques de la famille Lam, mijotées avec passion et préparées à la commande.
          </p>
        </div>

        {/* Grille des Plats Phares avec visuels et descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {iconicDishes.map((dish, index) => (
            <div 
              key={index} 
              className="group bg-brand-card rounded-sm border border-brand-border overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-brand-warm">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 right-3 bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                  {dish.badge}
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-1.5">
                    {dish.tag}
                  </span>
                  <h3 className="font-serif text-xl text-brand-dark mb-2.5 leading-snug group-hover:text-brand-red transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed font-light">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 2. EXTRAIT DE LA CARTE GÉNÉRALE (CLASSIQUE PAR CATÉGORIES) */}
        {/* ======================================================== */}
        <div className="mb-24 bg-white border border-brand-border p-6 sm:p-10 md:p-12 rounded-sm shadow-sm">
          <div className="text-center mb-12">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Savoir-Faire Traditionnel
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-3">
              La Carte du Restaurant
            </h2>
            <div className="w-16 h-[2px] bg-brand-red mx-auto mb-3"></div>
            <p className="text-brand-muted text-sm max-w-lg mx-auto">
              Retrouvez l'essentiel de nos propositions culinaires thaïlandaises et chinoises, servies à la carte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {menuCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col">
                <div className="pb-3 mb-5 border-b-2 border-brand-red/30">
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-brand-muted italic block mt-0.5">
                    {cat.desc}
                  </span>
                </div>

                <ul className="space-y-4 flex-grow">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="group/item">
                      <div className="flex items-start gap-2">
                        <span className="text-brand-red font-bold text-xs mt-0.5">◆</span>
                        <div>
                          <h4 className="text-sm font-semibold text-brand-charcoal group-hover/item:text-brand-red transition-colors leading-snug">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-brand-muted font-light leading-tight mt-0.5">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-brand-border text-center">
            <p className="text-xs text-brand-muted italic">
              * Nos plats sont cuisinés minute avec des herbes fraîches et épices authentiques. Carte complète et suggestions du jour disponibles sur place.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. FORMULES ET MENUS DÉGUSTATION AVEC CONTENU VISUEL      */}
        {/* ======================================================== */}
        <div className="bg-brand-warm/60 border border-brand-border p-6 sm:p-10 md:p-12 rounded-sm shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold block mb-2">
              Formules Midi & Soir
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4">
              Nos Menus & Formules
            </h2>
            
            {/* Mention clé obligatoire bien mise en valeur */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-brand-red text-white rounded-full shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider font-bold">
                À déguster exclusivement sur place
              </span>
            </div>
            <p className="text-xs text-brand-muted mt-2 font-light">
              Pour préserver la fraîcheur, les arômes et le croustillant de chaque préparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {formulas.map((form, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-sm flex flex-col justify-between transition-all duration-300 relative ${
                  form.isPrestige 
                    ? 'bg-gradient-to-b from-[#FFFDF9] to-white border-2 border-brand-gold/80 shadow-md hover:shadow-xl hover:border-brand-gold' 
                    : 'bg-white border border-brand-border hover:border-brand-gold hover:shadow-md'
                }`}
              >
                {form.isPrestige && (
                  <div className="absolute -top-3 right-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                    Signature
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      {form.tag}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl text-brand-dark font-bold mb-1">
                    {form.name}
                  </h3>
                  <span className="text-[11px] text-brand-muted italic block mb-3">
                    {form.subtitle}
                  </span>

                  {form.choice && (
                    <div className="inline-block px-2.5 py-1 rounded bg-brand-warm/90 border border-brand-border text-brand-red text-[11px] font-semibold mb-4">
                      {form.choice}
                    </div>
                  )}

                  <div className="space-y-3.5 mb-6 pt-2 border-t border-brand-border/60">
                    {form.sections.map((sec, i) => (
                      <div key={i}>
                        <span className="font-bold text-brand-dark uppercase tracking-wider text-[10px] block mb-0.5 text-brand-gold">
                          {sec.label} :
                        </span>
                        <p className="text-brand-charcoal text-xs font-normal leading-relaxed">
                          {sec.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-brand-border mt-auto">
                  <p className="text-[11px] text-brand-muted italic">
                    {form.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a 
              href="tel:0143290714" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white hover:bg-brand-red-hover transition-all text-xs uppercase tracking-widest font-semibold rounded-sm shadow-md"
            >
              Réserver pour déguster nos menus
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
