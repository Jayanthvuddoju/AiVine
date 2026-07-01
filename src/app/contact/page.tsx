"use client";

import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/GreenBg.png)' }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.8))' }}
        />
        {/* Bottom Green Glow */}
        <div className="absolute bottom-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,153,0.15),transparent_50%)] pointer-events-none" />
      </div>

      <div className="min-h-screen pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
            
            {/* Office coordinates column (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99]/20 text-[#00FF99] rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
                  <Building className="w-3.5 h-3.5" /> Get In Touch
                </span>
                <h1 className="font-nevera uppercase text-3xl sm:text-5xl font-bold text-white tracking-wide leading-tight drop-shadow-md">
                  Connect With AI VINE
                </h1>
                <p className="text-[#8E9AA7] text-sm leading-relaxed">
                  Connect with our team to explore staffing options, services, or joining as a candidate.
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                
                {/* USA Office */}
                <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-6 space-y-3 hover:border-[#00FF99]/30 transition-all duration-300">
                  <h3 className="font-exo-2 text-lg font-bold text-[#00FF99] flex items-center gap-2">
                    <span className="text-xs font-mono bg-[#00FF99] text-black px-2 py-0.5 rounded">US</span>
                    San Francisco Headquarters
                  </h3>
                  <div className="space-y-2 text-xs text-[#8E9AA7]">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#00FF99] shrink-0 mt-0.5" />
                      <span>100 Pine St, Suite 1250, San Francisco, CA 94111</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#00FF99] shrink-0" />
                      <span>+1 (415) 555-0199</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#00FF99] shrink-0" />
                      <span className="font-mono">sf@aivine.ai</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* General details */}
              <div className="flex items-center gap-2 text-xs text-[#8E9AA7] bg-white/5 p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
                <Globe className="w-4 h-4 text-[#00FF99]" />
                <span>For corporate billing or vendor agreements: <strong className="text-white font-semibold font-mono">legal@aivine.ai</strong></span>
              </div>
            </motion.div>

            {/* Contact form column (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
