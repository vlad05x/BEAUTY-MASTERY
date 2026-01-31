"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Star } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const IconMap = {
  Sparkles,
  Heart,
  Zap,
  Star,
};

const components = {
  marks: {
    gold: ({ children }) => (
      <span className="italic text-gold">{children}</span>
    ),
  },
  block: {
    normal: ({ children }) => <>{children}</>,
  },
};

const Services = ({ data }) => {
  if (!data || !data.servicesList) return null;

  return (
    <section id="services" className="py-32 bg-nude-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-heading mb-8">
              <PortableText value={data.title} components={components} />
            </h2>
            <p className="text-muted text-lg font-body max-w-lg">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="flex gap-4">
              <div className="w-12 h-[1px] bg-gold mt-4" />
              <span className="text-xs uppercase tracking-[0.3em]">Кураторство досконалості</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.servicesList.map((service, index) => {
            const Icon = IconMap[service.iconName] || Star;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <motion.img
                    src={urlFor(service.image).url()}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-white/60 font-body text-xs">
                        {service.number || `0${index + 1}`}
                      </span>
                    </div>

                    <div className="text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
                      <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-body leading-relaxed">
                        Послуга виконується з використанням преміальних матеріалів.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;