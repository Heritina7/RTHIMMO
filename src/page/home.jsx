import bgImage from "../assets/monimage.jpg";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, BedDouble, Bath, Maximize, Phone, Mail, Clock, ArrowRight, ShieldCheck, Star, Users, ChevronDown } from 'lucide-react';

export default function ImmobilierVitrineImageBG() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour afficher/masquer le fond de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Données fictives pour les biens en vedette
  const properties = [
    {
      id: 1,
      title: "Villa Contemporaine Lumineuse",
      price: "540 000 €",
      location: "Bordeaux, France",
      beds: 4,
      baths: 2,
      size: "165 m²",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      tag: "Exclusivité"
    },
    {
      id: 2,
      title: "Appartement Haussmannien Rénové",
      price: "320 000 €",
      location: "Nantes, France",
      beds: 2,
      baths: 1,
      size: "82 m²",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tag: "Coup de cœur"
    },
    {
      id: 3,
      title: "Maison d'Architecte avec Piscine",
      price: "890 000 €",
      location: "Montpellier, France",
      beds: 5,
      baths: 3,
      size: "210 m²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      tag: "Prestige"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased scroll-smooth">
      
      {/* 1. BARRE DE NAVIGATION DYNAMIQUE */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 border-b border-slate-200/60 shadow-sm h-20" 
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-600 text-white rounded-lg">
              <Home size={20} />
            </div>
            <span className={`text-lg font-bold tracking-widest transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              RTH<span className="text-emerald-600">IMMO</span>
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-semibold transition-colors ${
            isScrolled ? "text-slate-600" : "text-slate-200"
          }`}>
            <a href="#accueil" className="hover:text-emerald-500 transition-colors">Accueil</a>
            <a href="#biens" className="hover:text-emerald-500 transition-colors">Nos Biens</a>
            <a href="#services" className="hover:text-emerald-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>

          <a 
            href="#contact" 
            className={`hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all ${
              isScrolled 
                ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700" 
                : "border-white bg-transparent text-white hover:bg-white hover:text-slate-950"
            }`}
          >
            Estimer mon bien
          </a>
        </div>
      </nav>

      {/* 2. SECTION ACCUEIL */}
      <section
        id="accueil"
        className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Voile sombre classique pour assurer l'excellent contraste du texte blanc */}
        <div className="absolute inset-0 bg-slate-950/50"></div> 
        
        {/* Contenu principal centré */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white space-y-8 mt-12 w-full">
          
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold border-b border-emerald-500/30 pb-3 max-w-xs mx-auto">
            Haute Synergie Immobilière
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-tight">
            L'art de vivre au cœur de <br />
            <span className="italic font-normal text-emerald-300">votre futur domaine</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed text-justify">
            Depuis plus d'une décennie, notre cabinet conseille et accompagne une clientèle exigeante dans la quête, l'estimation et l'acquisition de propriétés de prestige. De la première étude de marché jusqu'à la remise définitive des clés, nous vous garantissent une expérience immobilière sereine, transparente et rigoureusement confidentielle.
          </p>

          {/* BARRE DE RECHERCHE AVEC COINS ARRONDIS (rounded-2xl) ET BOUTON AJUSTÉ */}
          <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200/50 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto text-slate-800">
            <div className="flex-1 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-100 last:border-0">
              <MapPin className="text-emerald-600 shrink-0" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Localisation</label>
                <input type="text" placeholder="Ville, Code Postal..." className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none mt-0.5" />
              </div>
            </div>
            
            <div className="flex-1 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-100 last:border-0">
              <Home className="text-emerald-600 shrink-0" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Type de bien</label>
                <select className="w-full text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5">
                  <option>Tous types</option>
                  <option>Appartement</option>
                  <option>Maison de ville</option>
                  <option>Villa</option>
                </select>
              </div>
            </div>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0">
              <Search size={18} /> Rechercher
            </button>
          </div>

        </div>

        {/* MODIFICATION ICI : L'indicateur est maintenant enveloppé dans un lien pointant vers #biens */}
        <a 
          href="#biens" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/60 animate-bounce hidden sm:flex flex-col items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Découvrir</span>
          <ChevronDown size={16} />
        </a>
      </section>

      {/* 3. NOS CHIFFRES CLÉS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-emerald-600">12+</p>
            <p className="text-base font-medium text-slate-600 mt-2">Ans d'expérience</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-emerald-600">450+</p>
            <p className="text-base font-medium text-slate-600 mt-2">Biens vendus</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-emerald-600">98%</p>
            <p className="text-base font-medium text-slate-600 mt-2">Clients satisfaits</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-emerald-600">15</p>
            <p className="text-base font-medium text-slate-600 mt-2">Conseillers dévoués</p>
          </div>
        </div>
      </section>

      {/* 4. SELECTION DE BIENS */}
      <section id="biens" className="py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight">Biens en Vedette</h2>
            <p className="text-slate-600 mt-3 text-lg">Un aperçu de nos opportunités les plus exclusives.</p>
          </div>
          <a 
  href="/catalogue" 
  className="mt-5 md:mt-0 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
>
  Explorer le catalogue complet 
  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold text-xs px-3 py-1 rounded-full shadow-inner border border-emerald-100">
                  {item.tag}
                </span>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-7 flex flex-col flex-1">
                <span className="text-2xl font-bold text-emerald-600 mb-2">{item.price}</span>
                <h3 className="font-bold text-lg text-slate-950 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-1">{item.title}</h3>
                
                <p className="flex items-center gap-1.5 text-slate-500 text-sm mt-1.5 mb-7">
                  <MapPin size={15} /> {item.location}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-slate-100 mt-auto text-slate-700">
                  <div className="flex items-center gap-2 text-sm">
                    <BedDouble size={18} className="text-slate-400" />
                    <span className="font-semibold">{item.beds} <span className="text-xs font-normal text-slate-400">Chb</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath size={18} className="text-slate-400" />
                    <span className="font-semibold">{item.baths} <span className="text-xs font-normal text-slate-400">Sdb</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Maximize size={18} className="text-slate-400" />
                    <span className="font-semibold">{item.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES / POURQUOI NOUS REJOINDRE */}
      <section id="services" className="bg-emerald-50/40 py-28 border-y border-emerald-100/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight">Plus qu'une Agence</h2>
            <p className="text-slate-600 mt-3 text-lg leading-relaxed">Une expertise transparente pour des résultats exceptionnels.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-9 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-7 border border-emerald-200/50">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-950 mb-3 tracking-tight">Accompagnement Intégral</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Du premier conseil juridique à la signature, nous vous guidons en toute sérénité.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-7 border border-emerald-200/50">
                <Users size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-950 mb-3 tracking-tight">Réseau d'Experts</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Architectes, notaires, courtiers : bénéficiez de notre réseau de partenaires certifiés.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-7 border border-emerald-200/50">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-950 mb-3 tracking-tight">Disponibilité Totale</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Votre projet n'attend pas. Nos conseillers sont réactifs et disponibles 6j/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FORMULAIRE DE CONTACT & INFORMATIONS */}
      <section id="contact" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-0 bg-white rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-900/5 overflow-hidden">
          
          <div className="lg:col-span-5 bg-slate-950 text-white p-10 lg:p-16 flex flex-col justify-between relative">
            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl font-bold tracking-tight">Discutons de<br />votre avenir</h3>
              <p className="text-slate-400 text-lg">Notre équipe est là pour écouter et réaliser vos ambitions immobilières.</p>
              
              <div className="space-y-5 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><Phone size={18} /></div>
                  <span className="text-base font-medium">+261 34 77 917 58</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><Mail size={18} /></div>
                  <span className="text-base font-medium">rthheritina@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><MapPin size={18} /></div>
                  <span className="text-base font-medium">Ikianja Ambohimangakely</span>
                </div>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-800 mt-14 text-sm text-slate-400 relative z-10 flex items-center gap-2">
              <Clock size={16} /> Ouvert Lun-Sam de 9h00 à 19h00.
            </div>
          </div>

          <div className="lg:col-span-7 p-10 lg:p-16 bg-white">
            <form className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Nom complet</label>
                  <input type="text" placeholder="Heritina RANDRIANJAFY" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Adresse email</label>
                  <input type="email" placeholder="martin@email.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Votre besoin</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 cursor-pointer">
                  <option>Je souhaite faire estimer mon bien</option>
                  <option>Je recherche un bien</option>
                  <option>Je souhaite louer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Message</label>
                <textarea rows="5" placeholder="Décrivez votre projet..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30">
                Envoyer ma demande
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-600 rounded-lg text-white">
              <Home size={18} />
            </div>
            <span className="font-bold text-lg text-slate-950">RTH<span className="text-emerald-600">IMMO</span></span>
          </div>
          <p className="text-sm text-slate-500">© 2026 RTHIMMO. Tous droits réservés. Mentions Légales | Politique de Confidentialité</p>
        </div>
      </footer>

    </div>
  );
}
