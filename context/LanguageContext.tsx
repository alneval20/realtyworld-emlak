'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'TR' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  TR: {
    'nav.home': 'Ana Sayfa',
    'nav.listings': 'İlanlar',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.contact': 'İletişim',
    'hero.title': 'Söke\'de Hayalinizdeki Evi Bulun',
    'hero.subtitle': 'Realty World Söke ile güvenilir, şeffaf ve profesyonel gayrimenkul danışmanlığı.',
    'hero.search.placeholder': 'Mahalle, oda sayısı veya ilan tipi ara...',
    'hero.search.button': 'İlanları Bul',
    'about.title': 'Söke\'nin Gayrimenkul Uzmanı',
    'about.subtitle': '20 yılı aşkın tecrübemizle Söke ve çevresinde binlerce aileyi ev sahibi yaptık.',
    'about.button': 'Daha Fazla Bilgi',
    'listings.featured': 'Öne Çıkan İlanlar',
    'listings.viewAll': 'Tüm İlanları Gör',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.address': 'Atatürk Mah. İstasyon Cad. No:45 Söke/Aydın',
  },
  EN: {
    'nav.home': 'Home',
    'nav.listings': 'Listings',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Find Your Dream Home in Söke',
    'hero.subtitle': 'Reliable, transparent, and professional real estate consultancy with Realty World Söke.',
    'hero.search.placeholder': 'Search neighborhood, rooms, or type...',
    'hero.search.button': 'Find Listings',
    'about.title': 'Söke\'s Real Estate Expert',
    'about.subtitle': 'With over 20 years of experience, we have helped thousands of families find homes in Söke.',
    'about.button': 'Learn More',
    'listings.featured': 'Featured Listings',
    'listings.viewAll': 'View All Listings',
    'footer.rights': 'All rights reserved.',
    'footer.address': 'Ataturk Mah. Istasyon Ave. No:45 Soke/Aydin',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('TR');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['TR']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
