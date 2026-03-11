'use client';

import React from 'react';
import { Home, Mail, Phone, MapPin, ChevronRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = language === 'TR' 
    ? ['Ana Sayfa', 'İlanlar', 'Hakkımızda', 'Hizmetler', 'İletişim']
    : ['Home', 'Listings', 'About Us', 'Services', 'Contact'];

  const services = language === 'TR'
    ? ['Gayrimenkul Satış', 'Kiralama Hizmetleri', 'Ücretsiz Ekspertiz', 'Yatırım Danışmanlığı', 'Tapu İşlemleri']
    : ['Real Estate Sales', 'Rental Services', 'Free Appraisal', 'Investment Consultancy', 'Title Deed Procedures'];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-red-600 p-1.5 rounded-sm">
                <Home className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                REALTY WORLD <span className="text-red-600">SÖKE</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              {language === 'TR' 
                ? 'Aydın Söke bölgesinde gayrimenkul sektörünün lideri olarak, müşterilerimize en güvenilir ve profesyonel hizmeti sunuyoruz.'
                : 'As the leader of the real estate sector in the Aydin Soke region, we offer the most reliable and professional service to our customers.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">{language === 'TR' ? 'Hızlı Menü' : 'Quick Menu'}</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-red-500 flex items-center group transition-all">
                    <ChevronRight size={14} className="mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8">{language === 'TR' ? 'Hizmetlerimiz' : 'Our Services'}</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-red-500 flex items-center group transition-all">
                    <ChevronRight size={14} className="mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">{language === 'TR' ? 'İletişim Bilgileri' : 'Contact Information'}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Yenikent Mah. İsmet İnönü Cad. No:45/A Söke / Aydın</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-600 flex-shrink-0" />
                <span className="text-slate-400">+90 (256) 518 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-600 flex-shrink-0" />
                <span className="text-slate-400">soke@realtyworld.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 Realty World Söke Emlak. {t('footer.rights')}
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-white">{language === 'TR' ? 'Gizlilik Politikası' : 'Privacy Policy'}</Link>
            <Link href="#" className="hover:text-white">{language === 'TR' ? 'Kullanım Şartları' : 'Terms of Use'}</Link>
            <Link href="#" className="hover:text-white">{language === 'TR' ? 'KVKK Aydınlatma Metni' : 'KVKK Information'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
