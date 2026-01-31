"use client";

import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

const AboutMe = ({ data }) => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden">
              <img
                src={urlFor(data.profileImage).url()}
                alt="Natalia - Artist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute top-10 -left-10 w-full h-full border border-gold -z-0 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 bg-nude-200 p-8 z-20 hidden md:block">
              <p className="text-4xl font-heading italic">14+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">Роки досвіду</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-gold mb-6 block">Майстер-художник</span>
            <h2 className="text-5xl md:text-6xl font-heading mb-8 leading-tight">
              {data.title}
            </h2>
            <div className="space-y-6 text-muted font-body leading-relaxed">
              <PortableText value={data.bio} />
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {data?.achievements?.map((item, index) => (
                <div key={index}>
                  <h4 className="font-heading text-xl mb-2">{item.title}</h4>
                  <p className="text-xs text-muted">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="mt-12 inline-flex items-center gap-4 cursor-pointer group"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Читати мою повну історію</span>
              <div className="w-12 h-px bg-foreground group-hover:w-20 transition-all duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-[0.03] whitespace-nowrap hidden lg:block">
        <span className="text-[20rem] font-heading font-bold uppercase">ARTISTRY</span>
      </div>
    </section>
  );
};

export default AboutMe;
