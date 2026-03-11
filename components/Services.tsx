'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Home, Key, BadgePercent, Landmark, Users, Briefcase } from 'lucide-react';

const services = [
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
];

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Neler Yapıyoruz?</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">Profesyonel Hizmetlerimiz</h2>
          <p className="text-slate-400 text-lg">
            Sadece bir emlak ofisi değil, gayrimenkul yolculuğunuzdaki en güvenilir çözüm ortağınızız.
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
