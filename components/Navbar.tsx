'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Home } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.listings'), href: '/ilanlar' },
    { name: t('nav.about'), href: '/hakkimizda' },
    { name: t('nav.services'), href: '/#hizmetler' },
    { name: t('nav.contact'), href: '/#iletisim' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-red-600 p-1.5 rounded-sm">
                <Home className="text-white w-6 h-6" />
              </div>
              <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                REALTY WORLD <span className="text-red-600">SÖKE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className={`flex items-center space-x-2 text-sm font-bold ${scrolled ? 'text-slate-600' : 'text-white'}`}>
              <button 
                onClick={() => setLanguage('TR')}
                className={`cursor-pointer transition-colors hover:text-red-600 ${language === 'TR' ? 'text-red-600' : ''}`}
              >
                TR
              </button>
              <span className="opacity-30">|</span>
              <button 
                onClick={() => setLanguage('EN')}
                className={`cursor-pointer transition-colors hover:text-red-600 ${language === 'EN' ? 'text-red-600' : ''}`}
              >
                EN
              </button>
            </div>

            <Link
              href="tel:+902565180000"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
              <Phone size={16} />
              <span>{language === 'TR' ? 'Hemen Ara' : 'Call Now'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className={`flex items-center space-x-2 text-sm font-bold ${scrolled ? 'text-slate-600' : 'text-white'}`}>
              <button 
                onClick={() => setLanguage('TR')}
                className={`cursor-pointer transition-colors hover:text-red-600 ${language === 'TR' ? 'text-red-600' : ''}`}
              >
                TR
              </button>
              <span className="opacity-30">|</span>
              <button 
                onClick={() => setLanguage('EN')}
                className={`cursor-pointer transition-colors hover:text-red-600 ${language === 'EN' ? 'text-red-600' : ''}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="tel:+902565180000"
                  className="w-full bg-red-600 text-white px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>{language === 'TR' ? 'Bizi Arayın' : 'Call Us'}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
