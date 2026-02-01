"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const ptComponents = {
  marks: {
    gold: ({ children }) => <span className="italic text-gold">{children}</span>,
  },
  block: {
    normal: ({ children }) => <>{children}</>,
  },
};

const categoryMap = {
  "Все": "Все",
  "Брови": "Brows",
  "Губи": "Lips"
};

const Portfolio = ({ data }) => {
  // Розпаковуємо дані, які прийшли з page.js
  const { section, items } = data;
  const [activeTab, setActiveTab] = useState("Після");
  const [filter, setFilter] = useState("Все");
  const [showFullGallery, setShowFullGallery] = useState(false);

  const categories = ["Все", "Брови", "Губи"];
  const works = items || [];

  return (
    <section id="portfolio" className="py-32 bg-nude-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 className="text-5xl md:text-7xl font-heading mb-12">
            {section?.title ? (
              <PortableText value={section.title} components={ptComponents} />
            ) : (
              <>Галерея <span className="italic text-gold">Трансформацій</span></>
            )}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <div className="flex gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all duration-300 border-b ${filter === cat ? "border-gold text-foreground" : "border-transparent text-muted hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-black/10 hidden md:block" />

            <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-full border border-black/5">
              {["До", "Після"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 ${activeTab === tab ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works
            .filter(w => filter === "Все" || w.category === categoryMap[filter])
            .slice(0, showFullGallery ? undefined : 3)
            .map((work) => (
              <motion.div layout key={work._id} className="group relative flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab}
                      // Виправлена умова для фото
                      src={urlFor(activeTab === "До" ? work.before : work.after).url()}
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
                  <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2 block">{work.category}</span>
                  <h3 className="text-xl font-heading">{work.title}</h3>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Кнопка внизу */}
        {works.filter(w => filter === "Все" || w.category === categoryMap[filter]).length > 6 && (
          <div className="mt-24 text-center">
            <button
              onClick={() => setShowFullGallery(!showFullGallery)}
              className="group px-12 py-5 bg-transparent border border-foreground relative overflow-hidden transition-colors duration-500"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] group-hover:text-background transition-colors duration-500">
                {showFullGallery ? "Сховати" : (section?.buttonText || "Переглянути велику галерею")}
              </span>
              <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;