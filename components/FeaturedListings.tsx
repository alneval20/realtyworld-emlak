'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';
import { listings } from '@/lib/data';

import { useLanguage } from '@/context/LanguageContext';

const FeaturedListings = () => {
  const { t, language } = useLanguage();

  return (
    <section id="ilanlar" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">{language === 'TR' ? 'Portföyümüz' : 'Our Portfolio'}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2">{t('listings.featured')}</h2>
            <p className="text-slate-600 mt-4 text-lg">
              {language === 'TR' 
                ? 'Söke ve çevresindeki en güncel, en avantajlı ve en prestijli gayrimenkul seçeneklerini sizin için derledik.'
                : 'We have compiled the most up-to-date, most advantageous and most prestigious real estate options in Soke and its surroundings for you.'}
            </p>
          </div>
          <Link href="/ilanlar" className="text-red-600 font-bold border-b-2 border-red-600 pb-1 hover:text-red-700 hover:border-red-700 transition-all">
            {t('listings.viewAll')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.slice(0, 6).map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
                    listing.tag === 'Satılık' ? 'bg-red-600' : 'bg-slate-900'
                  }`}>
                    {language === 'TR' ? listing.tag : (listing.tag === 'Satılık' ? 'For Sale' : 'For Rent')}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-600 hover:text-white transition-all">
                  <Heart size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <MapPin size={14} className="mr-1 text-red-600" />
                  {language === 'TR' ? listing.location : (listing.locationEn || listing.location)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {language === 'TR' ? listing.title : (listing.titleEn || listing.title)}
                </h3>
                <p className="text-2xl font-display font-extrabold text-red-600 mb-6">
                  {language === 'TR' ? listing.price : (listing.priceEn || listing.price)}
                </p>

                <div className="flex justify-between items-center py-4 border-t border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    <Bed size={18} className="text-slate-400" />
                    <span className="text-sm font-semibold text-slate-600">{listing.beds} {language === 'TR' ? 'Oda' : 'Rooms'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Bath size={18} className="text-slate-400" />
                    <span className="text-sm font-semibold text-slate-600">{listing.baths} {language === 'TR' ? 'Banyo' : 'Baths'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Square size={18} className="text-slate-400" />
                    <span className="text-sm font-semibold text-slate-600">{listing.sqft} m²</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 py-3 bg-slate-50 text-slate-900 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all">
                  {language === 'TR' ? 'Detayları İncele' : 'View Details'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
