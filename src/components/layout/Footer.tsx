"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isHirePage = pathname === "/hire";
  const isJoinPage = pathname === "/join";
  const isAboutPage = pathname === "/about";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#000000] text-[#D8DEE5] border-t border-[rgba(255,255,255,0.08)]">
      {/* Newsletter / CTA banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-2xl md:text-3xl text-[#FFFFFF] font-semibold">
              Ready to grow your AI capabilities?
            </h3>
            <p className="max-w-xl text-[#8E9AA7] text-sm md:text-base">
              Subscribe to the AI VINE newsletter for industry updates, insights on AI staffing trends, and access to premium candidate summaries.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {subscribed ? (
              <div className="bg-[#00FF99]/10 border border-[#00FF99]/30 rounded-vine p-4 text-center">
                <p className="text-[#00FF99] text-sm font-semibold flex items-center justify-center gap-2">
                  <Sprout className="w-5 h-5" /> Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-vine px-4 py-2.5 text-sm text-[#FFFFFF] placeholder-[#8E9AA7] focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99]"
                />
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="bg-[#00FF99] hover:bg-[#00FF99]/80 text-[#000000] px-4 py-2.5 rounded-vine transition-all duration-300 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(0,255,153,0.3)]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300",
                isHirePage ? "bg-[#00FF99] shadow-[0_0_15px_rgba(0,255,153,0.3)]" : 
                isJoinPage ? "bg-[#5c2057] shadow-[0_0_15px_rgba(92,32,87,0.3)]" : 
                isAboutPage ? "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]" : 
                isHomePage ? "bg-[#F43F5E] shadow-[0_0_15px_rgba(244,63,94,0.3)]" : 
                "bg-vine-green shadow-[0_0_15px_rgba(32,120,207,0.3)]"
              )}>
                <Sprout className={cn("w-5 h-5", isHirePage ? "text-[#000000]" : "text-white")} />
              </div>
              <span className={cn(
                "font-display text-lg font-bold tracking-tight transition-colors duration-300",
                isHirePage ? "text-[#00FF99]" : 
                isJoinPage ? "text-[#5c2057]" : 
                isAboutPage ? "text-orange-500" : 
                isHomePage ? "text-[#F43F5E]" : 
                "text-vine-green"
              )}>
                AI VINE
              </span>
            </Link>
            <p className="text-sm text-[#8E9AA7] leading-relaxed max-w-sm">
              We cultivate, pre-vet, and place outstanding AI talent into top-tier organizations. Operating at the intersection of intelligence and connectivity, we bridge the gap between AI candidates and enterprises.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-xs font-mono uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[#D8DEE5]">
                🇺🇸 USA
              </span>
            </div>
          </div>

          {/* Column 2: Employers */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold text-sm tracking-wider uppercase mb-4">
              For Employers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/talent" className="hover:text-[#00FF99] transition-colors flex items-center gap-1">
                  Anonymous Talent Pool <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9AA7]" />
                </Link>
              </li>
              <li>
                <Link href="/hire" className="hover:text-[#00FF99] transition-colors">
                  Hire Vetted Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Talent */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold text-sm tracking-wider uppercase mb-4">
              For Candidates
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/join" className="hover:text-[#00FF99] transition-colors">
                  Submit Profile
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00FF99] transition-colors">
                  AI Interview Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices & Contact */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold text-sm tracking-wider uppercase mb-4">
              Office Details
            </h4>
            <ul className="space-y-3.5 text-sm text-[#8E9AA7]">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-[#00FF99] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-xs block text-[#FFFFFF] font-mono">USA OFFICE</span>
                  100 Pine St, Suite 1250<br />San Francisco, CA 94111
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-[#00FF99] shrink-0" />
                <span className="font-mono text-xs text-[#FFFFFF]">hello@aivine.ai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8E9AA7]">
          <p>&copy; {new Date().getFullYear()} AI VINE LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[#00FF99] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#00FF99] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
