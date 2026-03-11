'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Target, Users, Award, ShieldCheck, Zap } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export default function HakkimizdaPage() {
  const { language } = useLanguage();

  const values = language === 'TR' ? [
    { icon: ShieldCheck, title: 'Güven ve Şeffaflık', desc: 'Tüm süreçlerimizde dürüstlükten ödün vermez, her adımı şeffaf bir şekilde paylaşırız.' },
    { icon: Target, title: 'Sonuç Odaklılık', desc: 'Müşterilerimizin hedeflerine en hızlı ve en karlı şekilde ulaşması için çalışırız.' },
    { icon: Users, title: 'Müşteri Memnuniyeti', desc: 'Sadece bir satış değil, ömür boyu sürecek bir güven ilişkisi kurmayı hedefleriz.' },
    { icon: Award, title: 'Profesyonellik', desc: 'Sektördeki en güncel eğitimleri alan uzman kadromuzla yüksek standartlarda hizmet veririz.' },
    { icon: Zap, title: 'Yenilikçilik', desc: 'Gayrimenkul pazarlamasında en modern teknolojileri ve dijital araçları kullanırız.' },
    { icon: CheckCircle2, title: 'Yerel Uzmanlık', desc: 'Söke bölgesinin her noktasına hakimiyetimizle en doğru danışmanlığı sağlarız.' },
  ] : [
    { icon: ShieldCheck, title: 'Trust and Transparency', desc: 'We do not compromise on honesty in all our processes and share every step transparently.' },
    { icon: Target, title: 'Result Oriented', desc: 'We work for our customers to reach their goals in the fastest and most profitable way.' },
    { icon: Users, title: 'Customer Satisfaction', desc: 'We aim to establish a lifelong trust relationship, not just a sale.' },
    { icon: Award, title: 'Professionalism', desc: 'We provide high-standard services with our expert staff who receive the most up-to-date training in the sector.' },
    { icon: Zap, title: 'Innovation', desc: 'We use the most modern technologies and digital tools in real estate marketing.' },
    { icon: CheckCircle2, title: 'Local Expertise', desc: 'We provide the most accurate consultancy with our dominance in every point of the Soke region.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Building"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm">{language === 'TR' ? 'Kurumsal' : 'Corporate'}</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">{language === 'TR' ? 'Hakkımızda' : 'About Us'}</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {language === 'TR' 
                ? 'Realty World Söke olarak, gayrimenkul sektöründe güven, şeffaflık ve profesyonellik ilkeleriyle Söke\'nin geleceğini inşa ediyoruz.'
                : 'As Realty World Soke, we are building the future of Soke with the principles of trust, transparency, and professionalism in the real estate sector.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                {language === 'TR' ? 'Söke\'nin Yerel Gücü,' : 'Soke\'s Local Power,'} <br />
                <span className="text-red-600">{language === 'TR' ? 'Dünya Markası Güvencesi' : 'Global Brand Assurance'}</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  {language === 'TR'
                    ? 'Realty World, 1973 yılında ABD\'de kurulan ve bugün dünyanın en hızlı büyüyen gayrimenkul devlerinden biridir. Türkiye\'de ise Garanti Koza güvencesiyle faaliyet gösteren bu dev ağın Söke temsilcisi olarak, global standartları yerel pazar tecrübemizle harmanlıyoruz.'
                    : 'Realty World was founded in the USA in 1973 and is today one of the world\'s fastest-growing real estate giants. As the Soke representative of this giant network operating under the assurance of Garanti Koza in Turkey, we blend global standards with our local market experience.'}
                </p>
                <p>
                  {language === 'TR'
                    ? 'Söke pazarını sokak sokak, mahalle mahalle tanıyoruz. Yenikent\'ten Güllübahçe\'ye, Atatürk Mahallesi\'nden Cumhuriyet Mahallesi\'ne kadar her bölgenin dinamiklerine hakimiz. Bu sayede mülkünüz için en doğru değeri belirliyor, alıcılar için ise en karlı yatırımları sunuyoruz.'
                    : 'We know the Soke market street by street, neighborhood by neighborhood. We dominate the dynamics of every region from Yenikent to Gullubahce, from Ataturk Neighborhood to Cumhuriyet Neighborhood. In this way, we determine the most accurate value for your property and offer the most profitable investments for buyers.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                alt="Team Meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{language === 'TR' ? 'Değerlerimiz' : 'Our Values'}</h2>
            <p className="text-slate-500 mt-4">{language === 'TR' ? 'Bizi biz yapan ve her gün daha iyi olmamızı sağlayan ilkelerimiz.' : 'Our principles that make us who we are and allow us to be better every day.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-red-600 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">{language === 'TR' ? 'Vizyonumuz' : 'Our Vision'}</h3>
              <p className="text-red-50 leading-relaxed text-lg">
                {language === 'TR'
                  ? 'Söke ve çevresinde gayrimenkul denince akla gelen ilk isim olmak, sektördeki standartları her geçen gün daha yukarıya taşımak ve teknolojiyi emlak dünyasıyla en verimli şekilde buluşturmak.'
                  : 'To be the first name that comes to mind when real estate is mentioned in Soke and its surroundings, to raise the standards in the sector every day, and to bring technology together with the real estate world in the most efficient way.'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">{language === 'TR' ? 'Misyonumuz' : 'Our Mission'}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {language === 'TR'
                  ? 'Müşterilerimizin gayrimenkul ihtiyaçlarına en doğru, en hızlı ve en güvenilir çözümleri sunarak, onların hayallerindeki mülklere kavuşmalarını sağlamak ve yatırımlarına değer katmak.'
                  : 'To provide the most accurate, fastest, and most reliable solutions to our customers\' real estate needs, ensuring they reach their dream properties and adding value to their investments.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
