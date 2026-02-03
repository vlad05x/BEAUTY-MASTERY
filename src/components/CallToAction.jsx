"use client";

import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-black text-white">
      {/* Animated background image */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-heading mb-12 leading-tight">
            Готові Розкрити Свій <br />
            <span className="italic text-gold">Шедевр?</span>?
          </h2>
          <p className="text-lg md:text-xl font-body text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            Кожне перетворення починається з розмови. Давайте обговоримо, як ми можемо підкреслити вашу унікальну красу та підвищити вашу впевненість.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-12 py-5 bg-gold text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto font-semibold">
              Забронюйте зустріч
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  );
};

export default CallToAction;
