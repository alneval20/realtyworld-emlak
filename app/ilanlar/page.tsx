'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin, Heart, Search, Filter } from 'lucide-react';
import { listings } from '@/lib/data';

export default function IlanlarPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Tüm İlanlar</h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Söke ve çevresindeki en güncel satılık ve kiralık gayrimenkul portföyümüzü inceleyin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 sticky top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="İlan ara (mahalle, oda sayısı...)" 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-6 py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all">
                <Filter size={18} />
                <span>Filtrele</span>
              </button>
              <select className="flex-1 md:flex-none px-6 py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all outline-none appearance-none">
                <option>Sıralama: En Yeni</option>
                <option>Fiyat: Düşükten Yükseğe</option>
                <option>Fiyat: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                      {listing.tag}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-600 hover:text-white transition-all">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-sm mb-2">
                    <MapPin size={14} className="mr-1 text-red-600" />
                    {listing.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-2xl font-display font-extrabold text-red-600 mb-6">
                    {listing.price}
                  </p>

                  <div className="flex justify-between items-center py-4 border-t border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Bed size={18} className="text-slate-400" />
                      <span className="text-sm font-semibold text-slate-600">{listing.beds} Oda</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bath size={18} className="text-slate-400" />
                      <span className="text-sm font-semibold text-slate-600">{listing.baths} Banyo</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Square size={18} className="text-slate-400" />
                      <span className="text-sm font-semibold text-slate-600">{listing.sqft} m²</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-3 bg-slate-50 text-slate-900 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all">
                    Detayları İncele
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center space-x-2">
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                className={`w-12 h-12 rounded-xl font-bold transition-all ${
                  page === 1 ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
