"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-5xl font-heading mb-12">Get in <span className="italic">Touch</span></h2>
            <p className="text-muted mb-12 font-body leading-relaxed">
              We would love to hear from you. Whether you have a question about our services or would like to book a training session, please reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Email Us</p>
                  <p className="font-heading text-lg">hello@elenabeauty.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Call Us</p>
                  <p className="font-heading text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Visit Us</p>
                  <p className="font-heading text-lg">123 Beauty Lane, New York, NY</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-black/5 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-nude-100 p-8 md:p-16"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted ml-1">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-gold transition-colors font-body" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted ml-1">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-gold transition-colors font-body" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted ml-1">Subject</label>
                <select className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-gold transition-colors font-body appearance-none">
                  <option>Permanent Makeup Inquiry</option>
                  <option>Lip Augmentation</option>
                  <option>Training Courses</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted ml-1">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-gold transition-colors font-body resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-6 bg-foreground text-background text-xs uppercase tracking-widest hover:bg-gold transition-colors duration-500 font-semibold mt-12">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
