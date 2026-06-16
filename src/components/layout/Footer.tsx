"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sprout, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-[#020c47] text-vine-forest/80 border-t border-vine-green/20">
      {/* Newsletter / CTA banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-vine-forest/10">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-2xl md:text-3xl text-vine-forest font-semibold">
              Ready to grow your AI capabilities?
            </h3>
            <p className="max-w-xl text-muted-foreground text-sm md:text-base">
              Subscribe to the AI VINE newsletter for industry updates, insights on AI staffing trends, and access to premium candidate summaries.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {subscribed ? (
              <div className="bg-vine-green/20 border border-vine-green/40 rounded-vine p-4 text-center">
                <p className="text-vine-green text-sm font-semibold flex items-center justify-center gap-2">
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
                  className="flex-1 bg-white/5 border border-white/10 rounded-vine px-4 py-2.5 text-sm text-vine-forest placeholder-vine-forest/40 focus:outline-none focus:border-vine-green focus:ring-1 focus:ring-vine-green"
                />
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="bg-vine-green hover:bg-vine-green/80 text-background px-4 py-2.5 rounded-vine transition-all duration-300 flex items-center justify-center cursor-pointer"
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
              <div className="w-8 h-8 rounded-full bg-vine-green flex items-center justify-center">
                <Sprout className="w-5 h-5 text-root-cream" />
              </div>
              <span className="font-display text-lg font-bold text-vine-forest tracking-tight">
                AI VINE
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              We cultivate, pre-vet, and place outstanding AI talent into top-tier organizations. Operating at the intersection of intelligence and connectivity, we bridge the gap between AI candidates and enterprises.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-xs font-mono uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1 text-vine-forest/80">
                🇺🇸 USA
              </span>
            </div>
          </div>

          {/* Column 2: Employers */}
          <div>
            <h4 className="text-vine-forest font-semibold text-sm tracking-wider uppercase mb-4">
              For Employers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/talent" className="hover:text-vine-green transition-colors flex items-center gap-1">
                  Anonymous Talent Pool <ArrowUpRight className="w-3.5 h-3.5 text-vine-forest/35" />
                </Link>
              </li>
              <li>
                <Link href="/hire" className="hover:text-vine-green transition-colors">
                  Hire Vetted Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Talent */}
          <div>
            <h4 className="text-vine-forest font-semibold text-sm tracking-wider uppercase mb-4">
              For Candidates
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/join" className="hover:text-vine-green transition-colors">
                  Submit Profile
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-vine-green transition-colors">
                  AI Interview Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices & Contact */}
          <div>
            <h4 className="text-vine-forest font-semibold text-sm tracking-wider uppercase mb-4">
              Office Details
            </h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-vine-green shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-xs block text-vine-forest font-mono">USA OFFICE</span>
                  100 Pine St, Suite 1250<br />San Francisco, CA 94111
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-vine-green shrink-0" />
                <span className="font-mono text-xs text-vine-forest">hello@aivine.ai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 border-t border-vine-forest/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI VINE LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-vine-green transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-vine-green transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
