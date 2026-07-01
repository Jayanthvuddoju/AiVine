"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Hire", href: "/hire" },
  { name: "Join", href: "/join" },
  { name: "Talent Pool", href: "/talent" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#05080a]/80 backdrop-blur-xl border-white/[0.06] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#00FF99] flex items-center justify-center transition-colors duration-300">
              <Sprout className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-[#00FF99]">
                AI VINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative py-1",
                    isActive
                      ? "text-[#00FF99] drop-shadow-[0_0_12px_rgba(0,255,153,1)] font-semibold"
                      : "text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#00FF99]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/join"
              className="px-4 py-2 text-sm font-medium border border-[#f7f7f7]/30 rounded-vine hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] text-[#f7f7f7] transition-all duration-300"
            >
              Join Talent
            </Link>
            <Link
              href="/hire"
              className="px-4 py-2 text-sm font-medium rounded-vine transition-all duration-300 glossy-btn bg-[#00FF99] text-black shadow-[0_0_20px_rgba(0,255,153,0.5)] hover:shadow-[0_0_30px_rgba(0,255,153,0.8)] hover:opacity-90"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Hire Talent <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-[#00FF99] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#05080a]/95 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-3 py-2 rounded-md text-base font-medium transition-colors",
                        isActive
                          ? "bg-[#00FF99]/10 text-[#00FF99]"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <hr className="border-white/[0.06]" />

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 px-4 text-sm font-medium border border-[#f7f7f7]/30 rounded-vine hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/5 text-[#f7f7f7] transition-colors"
                >
                  Join Talent
                </Link>
                <Link
                  href="/hire"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 px-4 text-sm font-medium rounded-vine transition-colors glossy-btn bg-[#00FF99] text-black hover:opacity-90 shadow-[0_0_20px_rgba(0,255,153,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    Hire Talent <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
