'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Mesajınız başarıyla gönderildi!');
  };

  return (
    <section id="iletisim" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">İletişime Geçin</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2 mb-8">Sorularınız İçin <br />Buradayız</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Adresimiz</h4>
                  <p className="text-slate-600">Yenikent Mah. İsmet İnönü Cad. No:45/A <br />Söke / Aydın</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefon</h4>
                  <p className="text-slate-600">+90 (256) 518 00 00</p>
                  <p className="text-slate-600">+90 (505) 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">E-Posta</h4>
                  <p className="text-slate-600">soke@realtyworld.com.tr</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Telefon</label>
                  <input
                    {...register('phone', { required: true })}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all"
                    placeholder="05xx xxx xx xx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-Posta</label>
                <input
                  {...register('email', { required: true })}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all"
                  placeholder="eposta@adresiniz.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all resize-none"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-5 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-red-700 transition-all shadow-lg shadow-red-600/30"
              >
                <Send size={20} />
                <span>Mesaj Gönder</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 h-[450px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.362145634567!2d27.3986!3d37.7516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be958c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2zU8O2a2UsIEF5ZMSxbg!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
