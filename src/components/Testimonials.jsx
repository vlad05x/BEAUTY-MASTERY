"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const Testimonials = ({ data }) => {
  const testimonials = data || [];
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-nude-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={testimonials[index].image ? urlFor(testimonials[index].image).url() : ""}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover shadow-2xl"
              />
            </AnimatePresence>
            <div className="absolute top-8 left-8 p-4 bg-white shadow-xl rounded-full">
              <Quote className="w-6 h-6 text-gold" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] text-gold mb-8 block">
              {testimonials[index].text}
            </span>

            <div className="relative h-[250px] md:h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar scroll-smooth">
                      <p className="text-2xl md:text-3xl font-heading leading-relaxed italic">
                        &quot;{testimonials[index].review}&quot;
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-heading mb-1">{testimonials[index].name_person}</h4>
                      <p className="text-xs uppercase tracking-widest text-muted">Естетичний клієнт</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-6 mt-12">
              <button
                onClick={prev}
                className="w-14 h-14 border border-black/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 border border-black/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;