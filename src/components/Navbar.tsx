"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoModified from "@/components/LogoModified";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollToTop = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stark/80 backdrop-blur-md border-b border-onyx/5 px-6 py-4 flex items-center justify-between">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-start group-hover:scale-105 transition-transform">
           <LogoModified className="h-12 w-auto max-w-none origin-left" />
        </div>
        <span className="font-heading font-bold text-xl tracking-wide hidden sm:block text-onyx">RAZ TRANSPORTATION</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-onyx/80">
        <Link href={getHref("#about")} className="hover:text-gold-dark transition-colors font-medium">About</Link>
        <Link href={getHref("#services")} className="hover:text-gold-dark transition-colors font-medium">Services</Link>
        <Link href={getHref("#contact")} className="hover:text-gold-dark transition-colors font-medium">Contact</Link>
      </div>
      <Link href={getHref("#contact")} className="px-5 py-2 gold-gradient-bg rounded-none text-sm uppercase tracking-widest text-stark font-bold hover:shadow-lg hover:shadow-gold-light/20 transition-all">
        Get a Quote
      </Link>
    </nav>
  );
}
