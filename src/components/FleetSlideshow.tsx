"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fleetImages = [
  {
    src: "/trucks1.jpg",
    title: "Heavy-Duty Haulers",
    desc: "Our late-model, meticulously maintained power units ensure maximum uptime and reliability on the road."
  },
  {
    src: "/trucks2.jpg",
    title: "Versatile Trailing Equipment",
    desc: "From standard dry vans to specialized flatbeds, we have the diverse trailing equipment to handle any cargo."
  },
  {
    src: "/trucks3.jpg",
    title: "Desert Express",
    desc: "Running scenic desert routes to deliver your freight coast-to-coast."
  },
  {
    src: "/trucks4.jpg",
    title: "Industrial Loading docks",
    desc: "Seamless integration with bustling distribution centers and logistics hubs."
  },
  {
    src: "/trucks5.jpg",
    title: "Extreme Weather Capability",
    desc: "Navigating snowy mountain passes safely to ensure your supply chain never stops."
  },
  {
    src: "/trucks6.jpg",
    title: "24/7 Night Operations",
    desc: "Operating around the clock on major city interstates to hit critical delivery windows."
  },
  {
    src: "/trucks7.jpg",
    title: "Nationwide Capacity",
    desc: "This is just a glimpse of our network. Our expansive, dynamic fleet is ready to deploy across all 48 lower states."
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export default function FleetSlideshow() {
  const [[page, direction], setPage] = useState([0, 1]);

  const imageIndex = Math.abs(page % fleetImages.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-none shadow-2xl bg-onyx"
      onContextMenu={(e) => e.preventDefault()}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${fleetImages[imageIndex].src}')`, opacity: 0.9 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent opacity-75" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${imageIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-stark mb-4 drop-shadow-md">
                {fleetImages[imageIndex].title}
              </h3>
              <p className="text-stark/90 text-lg md:text-xl font-light max-w-2xl drop-shadow-md">
                {fleetImages[imageIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-onyx/30 hover:bg-gold-dark text-stark backdrop-blur-sm transition-colors rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-onyx/30 hover:bg-gold-dark text-stark backdrop-blur-sm transition-colors rounded-full"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
