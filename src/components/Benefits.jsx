"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safety First",
    description: "Medical-grade sterilization and premium pigments for your absolute peace of mind."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timeless Results",
    description: "Advanced techniques that age beautifully and gracefully over the years."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Master Certified",
    description: "Trained by world-renowned experts in the permanent makeup industry."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Bespoke Artistry",
    description: "No templates. Every procedure is custom-designed for your unique features."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 text-gold group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading mb-4 tracking-wider uppercase">{benefit.title}</h3>
              <p className="text-background/60 text-sm font-body leading-relaxed max-w-[200px]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
