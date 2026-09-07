"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Truck, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FleetSlideshow from "@/components/FleetSlideshow";
import LogoModified from "@/components/LogoModified";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stark text-onyx font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-6 bg-[#FAFAFA]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle light background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-stark z-10"></div>
          <div className="absolute inset-0 bg-[url('/trucks3.jpg')] bg-cover bg-center opacity-40 grayscale"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-gold-dark uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6">
            The RAZ Standard
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-onyx">
            Driving the <br className="hidden md:block" />
            <span className="gold-gradient-text">Future of Freight</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-onyx/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            Premium logistics and freight solutions engineered for speed, safety, and uncompromising reliability. 
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto px-8 py-4 gold-gradient-bg rounded-none uppercase tracking-widest text-sm flex items-center justify-center gap-2 text-stark hover:shadow-xl hover:shadow-gold-light/20 transition-all">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto px-8 py-4 border border-onyx/20 hover:border-gold-dark hover:bg-onyx/[0.02] rounded-none uppercase tracking-widest text-sm transition-all flex items-center justify-center text-onyx font-bold">
              Our Fleet
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-8 md:scroll-mt-10 py-16 lg:py-20 px-6 bg-white relative border-t border-onyx/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-onyx">The RAZ Standard</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold-light to-gold-dark mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Clock size={40} className="text-gold-dark" />,
                title: "Unmatched Speed",
                desc: "Time is money. Our optimized routing and dedicated drivers ensure your freight arrives precisely when promised."
              },
              {
                icon: <ShieldCheck size={40} className="text-gold-dark" />,
                title: "Absolute Safety",
                desc: "From advanced driver training to rigorous vehicle maintenance, your cargo is protected at every mile."
              },
              {
                icon: <Truck size={40} className="text-gold-dark" />,
                title: "Uncompromising Reliability",
                desc: "We deliver on our promises. No excuses, just transparent tracking and dependable capacity when you need it most."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 border border-onyx/10 bg-stark hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-onyx">{feature.title}</h3>
                <p className="text-onyx/70 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-8 md:scroll-mt-10 py-16 lg:py-20 px-6 bg-stark relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div>
              <p className="text-gold-dark uppercase tracking-widest text-sm mb-4 font-bold">Our Fleet</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-onyx">Uncompromising Capacity</h2>
            </div>
            <Link href="#contact" className="text-sm uppercase tracking-widest text-onyx hover:text-gold-dark transition-colors flex items-center gap-2 pb-2 border-b border-onyx/20 hover:border-gold-dark font-bold">
              Dispatch a Truck <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Fleet Slideshow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <FleetSlideshow />
          </motion.div>
        </div>
      </section>

      {/* Footer - Keeping it dark for strong contrast and premium grounding */}
      <footer id="contact" className="scroll-mt-8 md:scroll-mt-10 bg-slate-900 pt-16 pb-8 px-6 border-t border-white/10 relative overflow-hidden text-stark">
        {/* Subtle Industrial Asphalt Texture */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold-light/50 to-transparent z-10"></div>
        
        {/* Centered Large Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-12">
           <LogoModified className="w-48 h-auto md:w-64 max-w-full text-stark group-hover:scale-105 transition-transform" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="lg:col-span-1">
            <p className="text-stark/60 font-light mb-6 text-sm leading-relaxed">
              Premium logistics and freight solutions engineered for speed, safety, and uncompromising reliability.
            </p>
            <div className="inline-block border border-gold-light/30 px-4 py-2 text-xs uppercase tracking-widest text-gold-light font-medium">
              U.S DOT No. 3208292
            </div>
          </div>
          
          <div className="lg:col-start-3">
            <h4 className="font-heading text-lg font-bold mb-6 text-stark">Contact Us</h4>
            <ul className="space-y-4 text-stark/70 font-light text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold-light mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stark/50 mb-1">Main</span>
                  (218) 313-1439
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold-light mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stark/50 mb-1">Direct</span>
                  (612) 814-3567
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-light shrink-0" />
                razdispatch1@raztransportationllc.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-stark">Headquarters</h4>
            <ul className="space-y-4 text-stark/70 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-light mt-0.5 shrink-0" />
                <span>
                  2015 27TH ST SE<br />
                  APT 105<br />
                  ST CLOUD, MN 56304
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-stark/60 font-medium relative z-10">
          <p>&copy; {new Date().getFullYear()} RAZ Transportation LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold-light transition-colors relative z-10">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-light transition-colors relative z-10">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
