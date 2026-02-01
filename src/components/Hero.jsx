  "use client";

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

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

const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-nude-100">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.5em] text-muted mb-6 block">
            {data.text}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light leading-tight mb-8">

            {data.title && <PortableText value={data.title} components={components} />}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <p className="max-w-md text-sm md:text-base text-muted font-body leading-relaxed">
            {data.description}
          </p>
          <div className="h-px w-12 bg-gold hidden md:block" />
          <button className="group relative overflow-hidden px-10 py-4 bg-foreground text-background text-xs uppercase tracking-widest transition-all duration-500">
            <span className="relative z-10">Ознайомитися з послугами</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-nude-200 blur-3xl opacity-60 -z-1"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/30 blur-3xl opacity-60 -z-1"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Прокрутити</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
