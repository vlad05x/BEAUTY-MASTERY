"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Thompson",
    role: "Aesthetic Client",
    text: "Elena is a true artist. My eyebrows look so natural, people can't even tell I've had anything done. They just think I wake up looking this way! Her attention to detail is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Isabella Rossi",
    role: "Training Graduate",
    text: "The lip blush course was transformative. Elena's teaching style is clear, patient, and inspiring. I left feeling confident and ready to start my own business. Best investment ever.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Business Partner",
    text: "Professionalism at its finest. Elena's studio sets the gold standard for luxury beauty services. Her reputation is well-deserved and her work speaks for itself.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

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
                src={testimonials[index].image}
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
            <span className="text-xs uppercase tracking-[0.4em] text-gold mb-8 block">Kind Words</span>
            
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
                  <p className="text-2xl md:text-3xl font-heading leading-relaxed mb-10 italic">
                    &quot;{testimonials[index].text}&quot;
                  </p>
                  <div>
                    <h4 className="text-xl font-heading mb-1">{testimonials[index].name}</h4>
                    <p className="text-xs uppercase tracking-widest text-muted">{testimonials[index].role}</p>
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
