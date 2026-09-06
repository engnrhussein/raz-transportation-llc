"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fleetImages = [
  {
    src: "/trucks1.jfif",
    title: "Heavy-Duty Haulers",
    desc: "Our late-model, meticulously maintained power units ensure maximum uptime and reliability on the road."
  },
  {
    src: "/trucks2.jfif",
    title: "Versatile Trailing Equipment",
    desc: "From standard dry vans to specialized flatbeds, we have the diverse trailing equipment to handle any cargo."
  },
  {
    src: "/trucks3.jfif",
    title: "Nationwide Capacity",
    desc: "This is just a glimpse of our network. Our expansive, dynamic fleet is ready to deploy across all 48 lower states."
  }
];

export default function FleetSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fleetImages.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-none shadow-2xl bg-onyx"
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* We use background-image to make it difficult to drag/right-click "Open Image" */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${fleetImages[currentIndex].src}')`, opacity: 0.8 }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-90" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content at the bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-stark mb-4 drop-shadow-md">
                {fleetImages[currentIndex].title}
              </h3>
              <p className="text-stark/90 text-lg md:text-xl font-light max-w-2xl drop-shadow-md">
                {fleetImages[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-onyx/30 hover:bg-gold-dark text-stark backdrop-blur-sm transition-colors rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-onyx/30 hover:bg-gold-dark text-stark backdrop-blur-sm transition-colors rounded-full"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-3">
        {fleetImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-12 h-1.5 transition-all ${idx === currentIndex ? 'bg-gold-light' : 'bg-stark/30 hover:bg-stark/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
