"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LogoModified from "@/components/LogoModified";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setIsMobileMenuOpen(false);
  };

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const navLinks = [
    { name: "About", href: getHref("#about") },
    { name: "Services", href: getHref("#services") },
    { name: "Contact", href: getHref("#contact") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stark/90 backdrop-blur-md border-b border-onyx/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={scrollToTop}
        >
          <div className="flex items-center justify-start group-hover:scale-105 transition-transform">
             <LogoModified className="h-10 md:h-12 w-auto max-w-none origin-left" />
          </div>
          <span className="font-heading font-bold text-lg md:text-xl tracking-wide hidden sm:block text-onyx">RAZ TRANSPORTATION</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-onyx/80">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gold-dark transition-colors font-medium">
              {link.name}
            </Link>
          ))}
          <Link href={getHref("#contact")} className="px-5 py-2 gold-gradient-bg rounded-none text-sm uppercase tracking-widest text-stark font-bold hover:shadow-lg hover:shadow-gold-light/20 transition-all">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-onyx hover:text-gold-dark transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-stark border-t border-onyx/5 mt-4"
          >
            <div className="flex flex-col py-4 gap-4 px-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base uppercase tracking-widest text-onyx/80 hover:text-gold-dark transition-colors font-medium p-2"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile-only Legal Links */}
              <Link 
                href="/privacy" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-onyx/80 hover:text-gold-dark transition-colors font-medium p-2"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-onyx/80 hover:text-gold-dark transition-colors font-medium p-2"
              >
                Terms of Service
              </Link>

              <Link 
                href={getHref("#contact")} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-5 py-3 gold-gradient-bg text-center rounded-none text-sm uppercase tracking-widest text-stark font-bold hover:shadow-lg hover:shadow-gold-light/20 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
