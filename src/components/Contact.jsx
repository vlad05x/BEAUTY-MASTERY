"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            {/* У твоїй схемі title - це string, тому лишаємо так */}
            <h2 className="text-5xl font-heading mb-12">{data.title}</h2>
            <p className="text-muted mb-12 font-body leading-relaxed">
              {data.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Email Us</p>
                  <p className="font-heading text-lg">{data.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Зателефонуйте нам</p>
                  <p className="font-heading text-lg">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Відвідайте нас</p>
                  <p className="font-heading text-lg whitespace-pre-line">{data.address}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <a
                href={data.socials?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-black/5 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-nude-100 p-8 md:p-16"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-heading mb-6">Варіанти швидкого зв'язку</h3>
                <p className="text-muted font-body leading-relaxed mb-8">
                  Оберіть найзручніший спосіб зв'язатися зі мною. Зазвичай я відповідаю протягом 24 годин.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href={`mailto:${data.email}`}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <h4 className="font-heading text-lg">Email</h4>
                  </div>
                  <p className="text-muted text-sm">{data.email}</p>
                  <p className="text-xs text-muted mt-2">Найкраще підходить для детальних запитів</p>
                </a>

                <a
                  href={`tel:${data.phone}`}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <h4 className="font-heading text-lg">Телефон</h4>
                  </div>
                  <p className="text-muted text-sm">{data.phone}</p>
                  {/* ВИПРАВЛЕНО: беремо дні та години з першого елемента масиву, якщо він є */}
                  <p className="text-xs text-muted mt-2">
                    {data.businessHours?.[0] ? `${data.businessHours[0].days}: ${data.businessHours[0].hours}` : ""}
                  </p>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-heading text-lg mb-4">Робочі години</h4>
                <div className="space-y-2 text-sm">
                  {/* ВИПРАВЛЕНО: динамічний вивід графіку через .map() */}
                  {data.businessHours?.map((item, idx) => (
                    <div key={item._key || idx} className="flex justify-between">
                      <span className="text-muted">{item.days}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted text-sm mb-4">Слідкуйте за нами в соціальних мережах</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={data.socials?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-black/5 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;