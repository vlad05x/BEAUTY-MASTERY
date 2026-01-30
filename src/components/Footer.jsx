"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-nude-100 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-3xl font-heading tracking-widest">
            ELENA<span className="text-gold">.</span>
          </div>
          
          <div className="flex gap-12">
            {["Services", "About", "Portfolio", "Education", "Privacy"].map((item) => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted/60">
            &copy; {currentYear} Elena Beauty Artistry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted/60 italic">Designed by Excellence</span>
            <div className="w-4 h-px bg-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
