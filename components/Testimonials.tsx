'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Ev Sahibi',
    content: 'Söke\'deki evimi satarken Realty World ekibinin profesyonelliği beni çok etkiledi. 2 hafta gibi kısa bir sürede istediğim fiyata satışı gerçekleştirdiler.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Ayşe Demir',
    role: 'Kiracı',
    content: 'Kiralık ev arayışımda bana çok yardımcı oldular. Güler yüzlü ve dürüst yaklaşımları için tüm ekibe teşekkür ederim.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Yatırımcı',
    content: 'Arsa yatırımı konusunda verdikleri danışmanlık sayesinde çok karlı bir alım yaptım. Bölgeye hakimiyetleri gerçekten takdire şayan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Müşteri Deneyimleri</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2 mb-6">Bizi Müşterilerimizden Dinleyin</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100"
            >
              <Quote className="absolute top-6 right-8 text-red-600/10 w-16 h-16" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 relative z-10">
                &quot;{item.content}&quot;
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
