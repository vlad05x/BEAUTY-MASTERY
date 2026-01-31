"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";

const IconMap = {
  Shield: Shield,
  Clock: Clock,
  Award: Award,
  Star: Star,
};

const Benefits = ({ data }) => {
  const items = data?.items || [];

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => {
            const IconComponent = IconMap[item.iconName] || Star;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-8 text-gold group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading mb-4 tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-background/60 text-sm font-body leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;