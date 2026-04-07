import React, { useState } from 'react';
import { 
  Star, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Syringe, 
  Activity, 
  Stethoscope,
  Smile,
  CheckCircle2,
  MapPin,
  Clock,
  Calendar
} from 'lucide-react';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const prenom = formData.get('prenom');
    const nom = formData.get('nom');
    const telephone = formData.get('telephone');
    const soin = formData.get('soin');
    const date = formData.get('date');
    const message = formData.get('message');

    const text = `Bonjour Dr Sitraka, je souhaite prendre un rendez-vous.
Nom : ${prenom} ${nom}
Téléphone : ${telephone}
Soin : ${soin}
Date souhaitée : ${date}
Message : ${message || 'Aucun'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/261340720888?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="font-semibold text-slate-900 hidden sm:block">Dr Sitraka Ramanamihantatsoarana</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#presentation" className="text-slate-600 hover:text-blue-600 transition-colors">Présentation</a>
              <a href="#soins" className="text-slate-600 hover:text-blue-600 transition-colors">Soins</a>
              <a href="#avis" className="text-slate-600 hover:text-blue-600 transition-colors">Avis</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a 
              href="tel:+261340720888" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">034 07 208 88</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative bg-white pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/dental-office/1920/1080?blur=2')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100 mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.8/5</span>
            <span className="text-slate-400 mx-1">·</span>
            <span className="text-slate-500">38 avis patients</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Dr Sitraka Ramanamihantatsoarana
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
            Chirurgien-Dentiste
          </p>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Cabinet dentaire moderne au cœur d'Antananarivo. Des soins d'excellence dans un environnement apaisant et sécurisé.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#rendez-vous" 
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/25"
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </a>
            <a 
              href="tel:+261340720888" 
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 hover:text-blue-600 transition-all"
            >
              <Phone className="w-5 h-5" />
              Appeler le cabinet
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION */}
      <section id="presentation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://picsum.photos/seed/dentist-portrait/600/600" 
                  alt="Dr Sitraka Ramanamihantatsoarana" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos du Docteur</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Fort d'une solide expérience en chirurgie dentaire, le Dr Sitraka Ramanamihantatsoarana vous accueille dans son cabinet au Tana Water Front.
                </p>
                <p>
                  Diplômé des meilleures facultés et continuellement formé aux dernières techniques de la dentisterie moderne, il place le confort et la santé de ses patients au centre de ses priorités.
                </p>
                <p>
                  <strong>Sa philosophie :</strong> Allier douceur, précision et technologies de pointe pour vous offrir un sourire éclatant en toute sérénité. Chaque plan de traitement est personnalisé pour répondre à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOINS & TRAITEMENTS */}
      <section id="soins" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Soins & Traitements</h2>
            <p className="text-lg text-slate-600">
              Une gamme complète de soins dentaires réalisés avec rigueur et professionnalisme.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Détartrage & nettoyage",
                desc: "Élimination de la plaque dentaire et du tartre pour des gencives saines et une haleine fraîche.",
                icon: Sparkles
              },
              {
                title: "Soins de caries",
                desc: "Traitement conservateur des dents cariées avec des matériaux esthétiques et durables.",
                icon: ShieldCheck
              },
              {
                title: "Extraction dentaire",
                desc: "Extractions simples ou complexes (dents de sagesse) réalisées en douceur et sans douleur.",
                icon: Activity
              },
              {
                title: "Blanchiment",
                desc: "Éclaircissement professionnel de vos dents pour retrouver un sourire lumineux en toute sécurité.",
                icon: Smile
              },
              {
                title: "Couronnes & prothèses",
                desc: "Remplacement des dents manquantes ou abîmées par des prothèses sur-mesure de haute qualité.",
                icon: Stethoscope
              },
              {
                title: "Urgences dentaires",
                desc: "Prise en charge rapide de vos douleurs aiguës, abcès ou traumatismes dentaires.",
                icon: Syringe
              }
            ].map((soin, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <soin.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{soin.title}</h3>
                <p className="text-slate-600 leading-relaxed">{soin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ÉQUIPEMENTS */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Matériel stérilisé & certifié</h3>
              <p className="text-blue-100">Protocoles d'hygiène stricts pour votre sécurité absolue.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Radiographie numérique</h3>
              <p className="text-blue-100">Diagnostic précis et immédiat avec une exposition minimale.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Anesthésie de confort</h3>
              <p className="text-blue-100">Des soins garantis zéro douleur pour une expérience sereine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AVIS PATIENTS */}
      <section id="avis" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ils nous font confiance</h2>
            <div className="flex items-center justify-center gap-2 text-lg text-slate-600">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-medium text-slate-900">4.8/5</span> sur Google
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mialy R.",
                text: "Un cabinet d'une propreté irréprochable. Le Dr Sitraka est très doux et explique chaque étape du soin. Je n'ai ressenti aucune douleur lors de mon extraction. Je recommande vivement !"
              },
              {
                name: "Thomas Dubois",
                text: "De passage à Tana, j'ai eu une urgence dentaire. Prise en charge rapide, équipement moderne (radio sur place) et grand professionnalisme. Merci pour l'accueil rassurant."
              },
              {
                name: "Andry N.",
                text: "Enfin un dentiste avec qui on se sent en confiance. Le détartrage a été fait avec beaucoup de minutie. Le cadre au Tana Water Front est en plus très agréable et facile d'accès."
              }
            ].map((avis, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{avis.text}"</p>
                <p className="font-semibold text-slate-900">{avis.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RENDEZ-VOUS & 7. INFOS PRATIQUES */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Formulaire */}
            <div id="rendez-vous" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Demander un rendez-vous</h2>
              <p className="text-slate-600 mb-8">Remplissez ce formulaire, notre secrétariat vous recontactera rapidement pour confirmer l'horaire.</p>
              
              {isSubmitted ? (
                <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h3>
                  <p className="text-slate-600 mb-6 px-4">
                    Merci pour votre demande. Notre secrétariat vous recontactera très prochainement pour confirmer votre rendez-vous.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                      <input type="text" name="prenom" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                      <input type="text" name="nom" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                    <input type="tel" name="telephone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Votre numéro" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Type de soin</label>
                      <select name="soin" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                        <option value="">Sélectionnez...</option>
                        <option value="Consultation de contrôle">Consultation de contrôle</option>
                        <option value="Détartrage">Détartrage</option>
                        <option value="Douleur / Urgence">Douleur / Urgence</option>
                        <option value="Blanchiment">Blanchiment</option>
                        <option value="Autre soin">Autre soin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Date souhaitée</label>
                      <input type="date" name="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message (optionnel)</label>
                    <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Précisez votre demande..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                    Demander un rendez-vous
                  </button>
                  
                  <p className="text-center text-sm text-slate-500 mt-4">
                    Vous pouvez aussi appeler directement le <a href="tel:+261340720888" className="font-medium text-blue-600 hover:underline">+261 34 07 208 88</a>
                  </p>
                </form>
              )}
            </div>

            {/* Infos Pratiques */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Informations pratiques</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Adresse</h4>
                      <p className="text-slate-600">Tana Water Front<br />Ambodivona, Antananarivo 101<br />Madagascar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Téléphone</h4>
                      <a href="tel:+261340720888" className="text-blue-600 hover:underline">+261 34 07 208 88</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Horaires d'ouverture</h4>
                      <ul className="text-slate-600 mt-1 space-y-1">
                        <li className="flex justify-between w-48"><span>Lundi - Vendredi</span> <span>09:00 - 16:00</span></li>
                        <li className="flex justify-between w-48 text-slate-400"><span>Samedi - Dimanche</span> <span>Fermé</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.204684947932!2d47.52683931536787!3d-18.89115798719398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e00318536f7%3A0x8f3c7e7f1e7f1e7f!2sTana%20Water%20Front!5e0!3m2!1sfr!2smg!4v1620000000000!5m2!1sfr!2smg" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Tana Water Front"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center font-bold text-2xl mx-auto mb-6">
            S
          </div>
          <h2 className="text-xl font-semibold text-white mb-1">Dr Sitraka Ramanamihantatsoarana</h2>
          <p className="mb-8">Chirurgien-Dentiste à Antananarivo</p>
          <div className="h-px w-24 bg-slate-800 mx-auto mb-8"></div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cabinet Dentaire Dr Sitraka. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
