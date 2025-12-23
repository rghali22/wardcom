import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  Calculator, 
  FileText, 
  Phone, 
  MapPin, 
  Mail, 
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

// -- Subcomponents defined within the same file for simplicity of the one-pager structure --

// 1. Navbar
const Navbar = ({ 
  lang, 
  setLang, 
  isScrolled 
}: { 
  lang: Language; 
  setLang: (l: Language) => void; 
  isScrolled: boolean; 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-slate-900 py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-tight">Wardcom</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="relative group">
            <button className="flex items-center text-slate-300 hover:text-white space-x-1 rtl:space-x-reverse py-2">
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </button>
            {/* Language Dropdown */}
            <div className="absolute top-full right-0 pt-2 w-28 hidden group-hover:block">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <button onClick={() => setLang('en')} className="block w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm">English</button>
                <button onClick={() => setLang('fr')} className="block w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm">Français</button>
                <button onClick={() => setLang('ar')} className="block w-full text-right px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm">العربية</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
             <button onClick={() => {
                const nextLang = lang === 'en' ? 'fr' : lang === 'fr' ? 'ar' : 'en';
                setLang(nextLang);
             }} className="text-slate-300 font-bold uppercase text-sm">
                {lang}
             </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-xl border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-slate-200 hover:text-orange-400 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang].hero;
  
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
                    Since 1998
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                    {t.title}
                </h1>
                
                {/* The 3 P's Card */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 md:p-12 rounded-3xl inline-block shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">
                        {t.tagline}
                    </p>
                    <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="mt-10">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-orange-600/30 text-lg"
                    >
                        {t.cta}
                        <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

// 3. Services Section
const Services = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang].services;

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Accounting Card */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col group">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Calculator size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">{t.accountingTitle}</h3>
                        <ul className="space-y-4 text-lg text-slate-600 flex-grow">
                            {t.accountingList.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 rtl:ml-3 rtl:mr-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Taxation Card */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col group">
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">{t.taxationTitle}</h3>
                        <ul className="space-y-4 text-lg text-slate-600 flex-grow">
                            {t.taxationList.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 rtl:ml-3 rtl:mr-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. About Section
const About = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang].about;

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Introduction */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform rotate-3 z-0"></div>
                            <img
                                src="/image.png"
                                alt="Office Team"
                                className="relative z-10 rounded-3xl shadow-lg w-full object-cover h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">{t.title}</h2>
                        <div className="w-20 h-1.5 bg-slate-900 rounded-full"></div>
                        <p className="text-lg text-slate-600 leading-relaxed">{t.description1}</p>
                        <p className="text-lg text-slate-600 leading-relaxed">{t.description2}</p>
                    </div>
                </div>

                {/* Founder & Goal */}
                <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-orange-400">{t.goalTitle}</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">{t.goalText}</p>
                            <div className="pt-6">
                                <p className="text-slate-400 italic font-serif text-xl">"{t.description3}"</p>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-slate-700">
                           {/* Placeholder for Johnny Ward */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl flex-shrink-0">
                                <img src="/ward.jpg" alt={t.founderTitle} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center md:text-left rtl:md:text-right">
                                <h4 className="text-2xl font-bold text-white mb-1">{t.founderTitle}</h4>
                                <span className="text-orange-400 font-medium block mb-4">{t.founderRole}</span>
                                <p className="text-slate-300 text-sm leading-relaxed">{t.founderBio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. Testimonial Section
const Testimonial = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang].testimonials;

    return (
        <section className="py-20 bg-orange-50">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-10">{t.title}</h2>
                <div className="relative">
                    <svg className="w-16 h-16 text-orange-200 absolute -top-8 -left-8 rtl:-right-8 rtl:left-auto transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.485 14.682 17.773 14.682V17C17.773 17.552 17.552 18 17.11 18C16.668 18 16.447 17.552 16.447 17C16.447 16.668 16.668 16.447 16.668 16.336C16.668 15.783 16.447 15.341 16.005 15.01C15.563 14.679 15.121 14.513 14.68 14.513L14.017 21ZM5.529 21L5.529 18C5.529 16.896 5.833 16.067 6.441 15.513C7.049 14.959 7.997 14.682 9.285 14.682V17C9.285 17.552 9.064 18 8.622 18C8.18 18 7.959 17.552 7.959 17C7.959 16.668 8.18 16.447 8.18 16.336C8.18 15.783 7.959 15.341 7.517 15.01C7.075 14.679 6.633 14.513 6.191 14.513L5.529 21Z" /></svg>
                    <p className="text-3xl md:text-4xl font-serif text-slate-800 italic relative z-10 leading-snug">
                        &ldquo;{t.quote}&rdquo;
                    </p>
                </div>
                <div className="mt-8">
                    <div className="font-bold text-slate-900">{t.author}</div>
                    <div className="text-slate-500 text-sm">Satisfied Client</div>
                </div>
            </div>
        </section>
    );
};

// 6. Contact Section
const Contact = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang].contact;

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    
                    {/* Contact Info */}
                    <div className="lg:w-1/2 p-10 md:p-16 text-white space-y-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-2">{t.title}</h2>
                            <p className="text-orange-400 font-medium">{t.appointmentOnly}</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-xl mr-4 rtl:mr-0 rtl:ml-4 text-orange-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-1">{t.mapLabel}</h4>
                                    <p className="text-xl font-medium max-w-xs">{t.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-xl mr-4 rtl:mr-0 rtl:ml-4 text-orange-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-1">{t.phoneLabel}</h4>
                                    <p className="text-xl font-medium font-mono">+1 514-272-8058</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-xl mr-4 rtl:mr-0 rtl:ml-4 text-orange-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-1">{t.emailLabel}</h4>
                                    <a href="mailto:customerservice@wardcom.ca" className="text-xl font-medium hover:text-orange-400 transition-colors break-all">customerservice@wardcom.ca</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-6">
                           <div className="flex space-x-2 rtl:space-x-reverse text-sm text-slate-500">
                                <Clock size={16} />
                                <span>Mon - Fri: 10am - 5pm</span>
                           </div>
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:w-1/2 min-h-[400px] bg-slate-200 relative">
                        {/* 
                           Note: Since I cannot generate a valid Google Maps API key, 
                           I am using an iframe embed approach with a placeholder query. 
                           In production, this should be replaced with a real Google Maps Embed.
                        */}
                        <iframe 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            loading="lazy" 
                            allowFullScreen 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.673894451717!2d-73.65586668443997!3d45.53678097910196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918bd11d4d3bf%3A0x6c6e643878788!2s1525%20Rue%20Mazurette%20%23208%2C%20Montr%C3%A9al%2C%20QC%20H4N%201G8%2C%20Canada!5e0!3m2!1sen!2sus!4v1633000000000!5m2!1sen!2sus"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 7. Footer
const Footer = () => (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-white mb-4">Wardcom Comptabilité-Accounting</h3>
            <p className="text-slate-500 mb-2">&copy; {new Date().getFullYear()} Wardcom Accounting inc. All rights reserved.</p>
            <p className="text-slate-600 text-sm">Made by Iceberg Marketing</p>
        </div>
    </footer>
);

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 selection:bg-orange-200 selection:text-orange-900 ${lang === 'ar' ? 'font-[sans-serif]' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} isScrolled={isScrolled} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Testimonial lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
    </div>
  );
}