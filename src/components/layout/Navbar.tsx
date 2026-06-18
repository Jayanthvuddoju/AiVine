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
  const isHirePage = pathname === "/hire";
  const isHomePage = pathname === "/";
  const isJoinPage = pathname === "/join";

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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
        scrolled
          ? "bg-root-cream/40 backdrop-blur-sm border-border/20 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-vine-green flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
              <Sprout className="w-6 h-6 text-root-cream" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-vine-green">
                AI VINE
              </span>
              <p className="text-[10px] tracking-widest text-muted-foreground font-mono leading-none mt-0.5">
                USA
              </p>
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
                      ? isHirePage 
                        ? "text-[#00FF99] drop-shadow-[0_0_12px_rgba(0,255,153,1)] font-semibold"
                        : isJoinPage
                          ? "text-[#d8b4fe] drop-shadow-[0_0_12px_rgba(216,180,254,0.8)] font-semibold"
                          : "text-vine-green drop-shadow-[0_0_12px_rgba(32,120,207,1)] font-semibold"
                      : "text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
                        isHirePage ? "bg-[#00FF99]" : isJoinPage ? "bg-[#d8b4fe]" : "bg-vine-green"
                      )}
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
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-vine transition-all duration-300",
                isJoinPage
                  ? "bg-[#5c2057] text-white hover:bg-[#5c2057]/90 shadow-[0_0_20px_rgba(92,32,87,0.5)] hover:shadow-[0_0_30px_rgba(92,32,87,0.8)]"
                  : "border border-[#f7f7f7]/30 hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] text-[#f7f7f7]"
              )}
            >
              Join Talent
            </Link>
            <Link
              href="/hire"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-vine flex items-center gap-1.5 transition-all duration-300",
                isHirePage 
                  ? "bg-gradient-to-r from-[#00FF99] to-[#00D9FF] text-black shadow-[0_0_20px_rgba(0,255,153,0.5)] hover:shadow-[0_0_30px_rgba(0,255,153,0.8)] hover:opacity-90"
                  : isHomePage
                    ? "bg-[#7859ba] hover:bg-[#7859ba]/90 text-white shadow-[0_0_20px_rgba(120,89,186,0.5)] hover:shadow-[0_0_30px_rgba(120,89,186,0.8)]"
                    : "bg-vine-green hover:bg-vine-green/90 text-white shadow-[0_0_20px_rgba(32,120,207,0.5)] hover:shadow-[0_0_30px_rgba(32,120,207,0.8)]"
              )}
            >
              Hire Talent <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-vine-green transition-colors"
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
            className="md:hidden border-t border-border bg-white dark:bg-root-cream shadow-lg overflow-hidden"
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
                          ? isHirePage 
                            ? "bg-[#00FF99]/10 text-[#00FF99]" 
                            : isJoinPage
                              ? "bg-[#5c2057]/20 text-[#d8b4fe]"
                              : "bg-vine-green/10 text-vine-green"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <hr className="border-border" />

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "w-full text-center py-2.5 px-4 text-sm font-medium rounded-vine transition-colors",
                    isJoinPage
                      ? "bg-[#5c2057] text-white hover:bg-[#5c2057]/90"
                      : "border border-[#f7f7f7]/30 hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/5 text-[#f7f7f7]"
                  )}
                >
                  Join Talent
                </Link>
                <Link
                  href="/hire"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "w-full text-center py-2.5 px-4 text-sm font-medium rounded-vine flex items-center justify-center gap-1.5 transition-colors",
                    isHirePage
                      ? "bg-gradient-to-r from-[#00FF99] to-[#00D9FF] text-black hover:opacity-90"
                      : isHomePage
                        ? "bg-[#7859ba] text-white hover:bg-[#7859ba]/90"
                        : "bg-vine-green text-white hover:bg-vine-green/90"
                  )}
                >
                  Hire Talent <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
