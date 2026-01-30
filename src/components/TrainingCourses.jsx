"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Mastering the Art of Brows",
    level: "Intermediate to Advanced",
    duration: "3 Full Days",
    description: "An intensive deep-dive into microblading and shading techniques, color theory, and facial mapping.",
    features: ["Hands-on model practice", "Full starter kit included", "Marketing & business module", "Lifetime mentorship"],
    price: "$2,400"
  },
  {
    title: "The Lip Blush Specialist",
    level: "All Levels",
    duration: "2 Full Days",
    description: "Learn how to create soft, velvet lip blushes and achieve perfect saturation with minimal trauma.",
    features: ["Anatomy & Physiology", "Pigment selection", "Stretching techniques", "Social media guide"],
    price: "$1,800"
  }
];

const TrainingCourses = () => {
  return (
    <section id="courses" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gold mb-6 block">Education & Mentorship</span>
          <h2 className="text-5xl md:text-7xl font-heading mb-8">
            Empowering the <br /><span className="italic text-foreground/40">Next Generation</span>
          </h2>
          <p className="text-muted text-lg font-body">
            Join our premium education programs and learn the secrets of world-class aesthetic artistry directly from Elena.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 md:p-16 bg-nude-100 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] uppercase tracking-widest border border-gold/30 text-gold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm font-body text-muted">{course.duration}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading mb-6">{course.title}</h3>
                <p className="text-muted mb-10 font-body leading-relaxed">{course.description}</p>
                
                <ul className="space-y-4 mb-12">
                  {course.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-gold" />
                      <span className="text-muted/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between pt-10 border-t border-black/5 gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted mb-1">Tuition</span>
                  <span className="text-3xl font-heading text-gold">{course.price}</span>
                </div>
                <button className="flex items-center gap-4 bg-foreground text-background px-10 py-4 hover:bg-gold transition-colors duration-300 w-full md:w-auto justify-center">
                  <span className="text-xs uppercase tracking-widest">Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCourses;
