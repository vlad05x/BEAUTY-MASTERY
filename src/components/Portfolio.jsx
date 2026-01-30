"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const works = [
  { id: 1, type: "Brows", before: "https://images.unsplash.com/photo-1591360236480-4ed861055a1e?q=80&w=1887&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop", title: "Powder Ombré Brows" },
  { id: 2, type: "Lips", before: "https://images.unsplash.com/photo-1588513570415-8334468f7000?q=80&w=1887&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop", title: "Aquarelle Lips" },
  { id: 3, type: "Eyes", before: "https://images.unsplash.com/photo-1583243552636-224429e74659?q=80&w=1887&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1070&auto=format&fit=crop", title: "Soft Eyeliner" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("After");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Brows", "Lips", "Eyes"];

  return (
    <section id="portfolio" className="py-32 bg-nude-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading mb-12"
          >
            A Gallery of <span className="italic text-gold">Transformation</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <div className="flex gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all duration-300 border-b ${
                    filter === cat ? "border-gold text-foreground" : "border-transparent text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-black/10 hidden md:block" />

            <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-full border border-black/5">
              {["Before", "After"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.filter(w => filter === "All" || w.type === filter).map((work) => (
            <motion.div
              layout
              key={work.id}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={activeTab === "Before" ? work.before : work.after}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-6 left-6 px-4 py-1 bg-black/20 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em]">
                  {activeTab}
                </div>
              </div>
              <div className="text-center">
                <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2 block">{work.type}</span>
                <h3 className="text-xl font-heading">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="group px-12 py-5 bg-transparent border border-foreground relative overflow-hidden transition-colors duration-500">
            <span className="relative z-10 text-xs uppercase tracking-[0.3em] group-hover:text-background transition-colors duration-500">View Extensive Gallery</span>
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
