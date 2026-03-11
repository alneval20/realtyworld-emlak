'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Home, Key, BadgePercent, Landmark, Users, Briefcase } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const services = language === 'TR' ? [
    {
      icon: Home,
      title: 'Gayrimenkul Satış',
      description: 'Evinizi en doğru fiyata ve en kısa sürede satmanız için profesyonel pazarlama stratejileri uyguluyoruz.',
    },
    {
      icon: Key,
      title: 'Kiralama Hizmetleri',
      description: 'Mülkünüz için güvenilir kiracılar buluyor, kiralama sürecinin tüm aşamalarını titizlikle yönetiyoruz.',
    },
    {
      icon: BadgePercent,
      title: 'Ücretsiz Ekspertiz',
      description: 'Gayrimenkulünüzün gerçek piyasa değerini uzman danışmanlarımızla ücretsiz olarak belirliyoruz.',
    },
    {
      icon: Landmark,
      title: 'Yatırım Danışmanlığı',
      description: 'Söke ve çevresindeki yüksek getiri potansiyelli arsa ve ticari alanlar için stratejik danışmanlık veriyoruz.',
    },
    {
      icon: Users,
      title: 'Müşteri Yönetimi',
      description: 'Alıcı ve satıcı arasındaki tüm iletişim ve pazarlık süreçlerini profesyonelce yönetiyoruz.',
    },
    {
      icon: Briefcase,
      title: 'Tapu ve Kredi İşlemleri',
      description: 'Banka kredisi ve tapu devir süreçlerindeki tüm bürokratik işlemleri sizin adınıza takip ediyoruz.',
    },
  ] : [
    {
      icon: Home,
      title: 'Real Estate Sales',
      description: 'We apply professional marketing strategies to sell your home at the right price and in the shortest time.',
    },
    {
      icon: Key,
      title: 'Rental Services',
      description: 'We find reliable tenants for your property and meticulously manage all stages of the rental process.',
    },
    {
      icon: BadgePercent,
      title: 'Free Appraisal',
      description: 'We determine the real market value of your real estate free of charge with our expert consultants.',
    },
    {
      icon: Landmark,
      title: 'Investment Consultancy',
      description: 'We provide strategic consultancy for land and commercial areas with high return potential in Soke and its surroundings.',
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'We professionally manage all communication and negotiation processes between the buyer and the seller.',
    },
    {
      icon: Briefcase,
      title: 'Title Deed and Loan Procedures',
      description: 'We follow all bureaucratic procedures in bank loan and title deed transfer processes on your behalf.',
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">{language === 'TR' ? 'Neler Yapıyoruz?' : 'What We Do?'}</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">{language === 'TR' ? 'Profesyonel Hizmetlerimiz' : 'Our Professional Services'}</h2>
          <p className="text-slate-400 text-lg">
            {language === 'TR' 
              ? 'Sadece bir emlak ofisi değil, gayrimenkul yolculuğunuzdaki en güvenilir çözüm ortağınızız.'
              : 'We are not just a real estate office, we are your most reliable solution partner in your real estate journey.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
