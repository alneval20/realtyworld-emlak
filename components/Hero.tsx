'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Search, MapPin, Home, Building2 } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Home"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            {t('hero.subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
            <div className="flex items-center space-x-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
              <MapPin className="text-red-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Konum</p>
                <input 
                  type="text" 
                  placeholder="Söke, Aydın..." 
                  className="bg-transparent border-none p-0 text-sm font-semibold focus:ring-0 text-slate-800 w-full"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
              <Home className="text-red-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Emlak Tipi</p>
                <select className="bg-transparent border-none p-0 text-sm font-semibold focus:ring-0 text-slate-800 w-full appearance-none">
                  <option>Daire</option>
                  <option>Villa</option>
                  <option>Arsa</option>
                  <option>Ticari</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3">
              <Building2 className="text-red-600 w-5 h-5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Durum</p>
                <select className="bg-transparent border-none p-0 text-sm font-semibold focus:ring-0 text-slate-800 w-full appearance-none">
                  <option>Satılık</option>
                  <option>Kiralık</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-red-600/30">
            <Search size={20} />
            <span>{t('hero.search.button')}</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-xs uppercase tracking-widest text-white/60 font-medium">Mutlu Müşteri</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">120+</p>
            <p className="text-xs uppercase tracking-widest text-white/60 font-medium">Aktif İlan</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">15+</p>
            <p className="text-xs uppercase tracking-widest text-white/60 font-medium">Yıllık Tecrübe</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
