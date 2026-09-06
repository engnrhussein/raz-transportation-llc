"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Truck, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="min-h-screen bg-onyx text-stark font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="RAZ Transportation Logo" width={48} height={48} className="w-12 h-12" />
          <span className="font-heading font-bold text-xl tracking-wide hidden sm:block">RAZ TRANSPORTATION</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-stark/80">
          <Link href="#about" className="hover:text-gold-light transition-colors">About</Link>
          <Link href="#services" className="hover:text-gold-light transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-gold-light transition-colors">Contact</Link>
        </div>
        <Link href="#contact" className="px-5 py-2 gold-gradient-bg rounded-none text-sm uppercase tracking-widest text-onyx font-bold">
          Get a Quote
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          {/* A moody, dark placeholder background. In a real app, this could be a video or a high-res image of a truck at night */}
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-onyx/80 to-onyx z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-gold-light uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6">
            The RAZ Standard
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Driving the <br className="hidden md:block" />
            <span className="gold-gradient-text">Future of Freight</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-stark/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Premium logistics and freight solutions engineered for speed, safety, and uncompromising reliability. 
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto px-8 py-4 gold-gradient-bg rounded-none uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-gold-light/50 hover:bg-white/5 rounded-none uppercase tracking-widest text-sm transition-all flex items-center justify-center">
              Our Fleet
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-onyx relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">The RAZ Standard</h2>
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
                icon: <Clock size={40} className="text-gold-light" />,
                title: "Unmatched Speed",
                desc: "Time is money. Our optimized routing and dedicated drivers ensure your freight arrives precisely when promised."
              },
              {
                icon: <ShieldCheck size={40} className="text-gold-light" />,
                title: "Absolute Safety",
                desc: "From advanced driver training to rigorous vehicle maintenance, your cargo is protected at every mile."
              },
              {
                icon: <Truck size={40} className="text-gold-light" />,
                title: "Uncompromising Reliability",
                desc: "We deliver on our promises. No excuses, just transparent tracking and dependable capacity when you need it most."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-stark/60 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div>
              <p className="text-gold-light uppercase tracking-widest text-sm mb-4">What We Do</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">Premium Services</h2>
            </div>
            <Link href="#contact" className="text-sm uppercase tracking-widest hover:text-gold-light transition-colors flex items-center gap-2 pb-2 border-b border-white/20 hover:border-gold-light">
              View All Capabilities <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Bento Box Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Main Service */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-2 relative group overflow-hidden border border-white/10 bg-onyx h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-gold-light transition-colors">Full Truckload (FTL)</h3>
                <p className="text-stark/70 max-w-md font-light">Dedicated capacity for your largest shipments. Direct, secure, and fast.</p>
              </div>
            </motion.div>

            {/* Secondary Service 1 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden border border-white/10 bg-onyx h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-gold-light transition-colors">Expedited Shipping</h3>
                <p className="text-stark/70 font-light">When tomorrow is too late. Time-critical freight delivered on schedule.</p>
              </div>
            </motion.div>

            {/* Secondary Service 2 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden border border-white/10 bg-onyx h-[300px]">
              <div className="absolute inset-0 hover:bg-white/[0.02] transition-colors p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full gold-border flex items-center justify-center mb-6 group-hover:bg-gold-light/10 transition-colors">
                  <ShieldCheck size={28} className="text-gold-light" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">High-Value Cargo</h3>
                <p className="text-stark/60 text-sm font-light">Enhanced security protocols for sensitive freight.</p>
              </div>
            </motion.div>

            {/* Secondary Service 3 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 relative group overflow-hidden border border-gold-light/20 bg-gradient-to-br from-onyx to-[#1a1505] h-[300px] flex items-center p-10">
               <div className="absolute right-0 top-0 w-64 h-64 bg-gold-light/10 blur-3xl rounded-full"></div>
               <div className="relative z-10 max-w-xl">
                 <p className="text-gold-light uppercase tracking-widest text-xs font-bold mb-3">Custom Solutions</p>
                 <h3 className="font-heading text-3xl font-bold mb-4">Need a specialized logistics plan?</h3>
                 <p className="text-stark/70 mb-8 font-light">We tailor our capabilities to meet your exact supply chain requirements.</p>
                 <Link href="#contact" className="inline-block px-6 py-3 gold-gradient-bg text-onyx uppercase text-xs font-bold tracking-wider">
                   Talk to an Expert
                 </Link>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-onyx pt-24 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold-light/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Image src="/logo.svg" alt="RAZ Transportation Logo" width={64} height={64} className="w-16 h-16 mb-6" />
            <p className="text-stark/60 font-light mb-6 text-sm leading-relaxed">
              Premium logistics and freight solutions engineered for speed, safety, and uncompromising reliability.
            </p>
            <div className="inline-block border border-gold-light/30 px-4 py-2 text-xs uppercase tracking-widest text-gold-light">
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
                dispatch@raztransportation.com
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
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-stark/40 font-light">
          <p>&copy; {new Date().getFullYear()} RAZ Transportation LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
