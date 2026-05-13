import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Maximize, ArrowLeft, Phone, Eye } from 'lucide-react';

export default function CatalogueImmobilierComplet() {
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedLocation, setSelectedLocation] = useState('Toutes');

  // Catalogue de biens (Présentation pure, sans prix)
  const properties = [
    {
      id: 1,
      title: "Villa Contemporaine Lumineuse",
      location: "Bordeaux, France",
      type: "Villa",
      beds: 4,
      baths: 2,
      size: "165 m²",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      tag: "Exclusivité",
      description: "Superbe villa d'architecte baignée de lumière naturelle. Offrant des prestations haut de gamme, de larges volumes ouverts sur l'extérieur et des matériaux nobles soigneusement sélectionnés pour un confort de vie absolu et sans compromis au quotidien."
    },
    {
      id: 2,
      title: "Appartement Haussmannien Rénové",
      location: "Nantes, France",
      type: "Appartement",
      beds: 2,
      baths: 1,
      size: "82 m²",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tag: "Coup de cœur",
      description: "Mariage parfait entre le charme de l'ancien et le confort moderne. Cet appartement d'exception dévoile de magnifiques moulures d'époque, une hauteur sous plafond remarquable ainsi qu'une rénovation contemporaine soignée dans les moindres détails."
    },
    {
      id: 3,
      title: "Maison d'Architecte avec Piscine",
      location: "Montpellier, France",
      type: "Maison",
      beds: 5,
      baths: 3,
      size: "210 m²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      tag: "Prestige",
      description: "Une réalisation architecturale audacieuse au cœur d'un environnement préservé. Ses lignes épurées, ses terrasses suspendues et son couloir de nage offrent un cadre de vie idyllique, pensé pour sublimer chaque instant de la vie de famille."
    },
    {
      id: 4,
      title: "Penthouse avec Vue Panoramique",
      location: "Bordeaux, France",
      type: "Appartement",
      beds: 3,
      baths: 2,
      size: "145 m²",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      tag: "Rare",
      description: "Dominant la ville, ce penthouse unique dispose d'une terrasse panoramique sans aucun vis-à-vis. Un bien d'exception aux volumes spectaculaires et à la configuration idéale, parfait pour les amateurs d'horizons lointains et de ciels étoilés."
    },
    {
      id: 5,
      title: "Propriété de Maître en Pierre",
      location: "Nantes, France",
      type: "Maison",
      beds: 6,
      baths: 4,
      size: "320 m²",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      tag: "Prestige",
      description: "Demeure historique en pierre de taille entièrement restaurée dans les règles de l'art. Alliant authenticité architecturale et performances énergétiques d'aujourd'hui, elle s'accompagne d'un superbe parc arboré aux essences séculaires."
    },
    {
      id: 6,
      title: "Pavillon Contemporain Épuré",
      location: "Montpellier, France",
      type: "Villa",
      beds: 3,
      baths: 2,
      size: "130 m²",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      tag: "Nouveauté",
      description: "Plain-pied minimaliste à haute performance technologique et environnementale. Chaque espace a été minutieusement optimisé pour créer une fluidité de circulation exemplaire, totalement connectée aux aménagements paysagers extérieurs."
    }
  ];

  // Logique de filtrage
  const filteredProperties = properties.filter(item => {
    const matchType = selectedType === 'Tous' || item.type === selectedType;
    const matchLocation = selectedLocation === 'Toutes' || item.location.includes(selectedLocation);
    return matchType && matchLocation;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* BOUTONS DE NAVIGATION FIXES ET ÉPURÉS (REMPLACENT LA NAVBAR) */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        
        {/* Bouton Retour Accueil */}
        <a 
          href="/#accueil" 
          className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all"
        >
          <ArrowLeft size={16} />
          Retour au menu
        </a>

        {/* Bouton Contact */}
        <a 
          href="/#contact" 
          className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-emerald-600 text-white shadow-md hover:bg-emerald-700 transition-all"
        >
          <Phone size={14} />
          Contact
        </a>

      </div>

      {/* CONTENU DU CATALOGUE */}
      <main id="catalogue" className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="border-b border-slate-200 pb-8 mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-2">Notre Collection</p>
          <h1 className="text-4xl font-serif tracking-tight text-slate-950">Exploration Immobilière</h1>
          <p className="text-slate-500 mt-2 text-base">Découvrez des architectures remarquables sélectionnées par notre cabinet.</p>
        </div>

        {/* BARRE DE FILTRES RECHERCHE AUX COINS ARRONDIS (rounded-2xl) */}
        <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-100 border border-slate-200/60 flex flex-col lg:flex-row gap-4 items-center justify-between mb-12">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Filtre Type */}
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Type :</span>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="Tous">Tous les types</option>
                <option value="Villa">Villas</option>
                <option value="Appartement">Appartements</option>
                <option value="Maison">Maisons</option>
              </select>
            </div>

            {/* Filtre Localisation */}
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Région :</span>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="Toutes">Toutes les régions</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Nantes">Nantes</option>
                <option value="Montpellier">Montpellier</option>
              </select>
            </div>

          </div>

          <div className="text-sm font-medium text-slate-500 shrink-0 w-full lg:w-auto text-left lg:text-right">
            <span className="text-slate-950 font-bold">{filteredProperties.length}</span> propriétés disponibles
          </div>
        </div>

        {/* GRILLE DES PRODUITS SANS PRIX - TEXTE JUSTIFIÉ */}
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Zone Image / Bouton de redirection */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold text-xs px-3 py-1 rounded-full shadow-inner border border-emerald-100">
                    {item.tag}
                  </span>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* MODIFICATION ICI : Le rideau noir et le texte deviennent un lien cliquable vers la section suivante */}
                  <a 
                    href="#section-suivante" 
                    className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <span className="bg-white text-slate-950 text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} /> Découvrir le bien
                    </span>
                  </a>
                </div>
                
                {/* Zone Contenu */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-slate-950 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <p className="flex items-center gap-1.5 text-slate-400 text-xs uppercase tracking-wider font-semibold mt-2 mb-4">
                    <MapPin size={14} className="text-emerald-600" /> {item.location}
                  </p>

                  {/* Textes de description strictement Justifiés */}
                  <p className="text-slate-600 text-sm leading-relaxed text-justify mb-6 line-clamp-4">
                    {item.description}
                  </p>

                  {/* Fiche Technique */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 mt-auto text-slate-700">
                    <div className="flex items-center gap-2 text-xs">
                      <BedDouble size={16} className="text-slate-400" />
                      <span className="font-semibold">{item.beds} <span className="text-[10px] font-normal text-slate-400">Chb</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Bath size={16} className="text-slate-400" />
                      <span className="font-semibold">{item.baths} <span className="text-[10px] font-normal text-slate-400">Sdb</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-xs justify-end">
                      <Maximize size={16} className="text-slate-400" />
                      <span className="font-semibold text-right">{item.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 max-w-xl mx-auto">
            <p className="text-slate-400 font-medium">Aucune propriété ne correspond à vos critères actuels.</p>
            <button 
              onClick={() => { setSelectedType('Tous'); setSelectedLocation('Toutes'); }}
              className="mt-4 text-emerald-600 text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </main>

      {/* Exemple de section cible (Ajoutez id="section-suivante" sur le composant/balise de votre choix) */}
      {/* <section id="section-suivante" className="min-h-screen bg-white"> ... </section> */}

      {/* 3. FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-600 rounded-lg text-white">
              <MapPin size={18} />
            </div>
            <span className="font-bold text-lg text-slate-950">RTH<span className="text-emerald-600">IMMO</span></span>
          </div>
          <p className="text-sm text-slate-500">© 2026 RTHIMMO. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}
