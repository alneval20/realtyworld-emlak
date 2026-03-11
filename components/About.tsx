'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="hakkimizda" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Emlak Ofisi"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600 rounded-3xl -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-100 rounded-full -z-0 hidden md:block"></div>
            
            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
              <p className="text-4xl font-display font-black text-red-600 mb-1">15+</p>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">Yıllık Tecrübe</p>
              <p className="text-xs text-slate-500 mt-2">Söke&apos;nin yerel pazarında uzman kadromuzla hizmetinizdeyiz.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Biz Kimiz?</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2 mb-6">
              Realty World Söke: <br />
              <span className="text-red-600">Güvenin Adresi</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Realty World Söke olarak, Aydın Söke bölgesinde gayrimenkul sektörüne yön veren, yenilikçi ve müşteri odaklı yaklaşımımızla hizmet veriyoruz. Dünya çapındaki Realty World ağının gücünü, yerel pazar tecrübemizle birleştiriyoruz.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Şeffaf ve dürüst ticaret anlayışı',
                'Profesyonel ekspertiz ve değerleme',
                'Geniş ve güncel portföy ağı',
                'Hukuki ve finansal danışmanlık desteği',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-red-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-600 transition-all shadow-xl shadow-slate-900/20">
              Daha Fazla Bilgi
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
