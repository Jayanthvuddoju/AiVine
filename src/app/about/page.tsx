"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Globe, Target, HeartHandshake, Compass, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const brandPillars = [
    {
      title: "Growth",
      desc: "Every engagement should leave both company and candidate stronger.",
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      title: "Connection",
      desc: "We build networks, not just placements.",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      title: "Innovation",
      desc: "We stay ahead of the AI curve so our clients don't have to.",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      title: "Scalability",
      desc: "Our model grows with the market.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Intelligence",
      desc: "We apply AI thinking to everything, including how we work.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Page Header - Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="min-h-[70vh] flex flex-col justify-center space-y-6 text-left max-w-4xl pt-10 pl-4 sm:pl-6 lg:pl-8"
        >
          <h1 className="font-nevera uppercase text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide leading-[1.2] drop-shadow-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b]">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#bbf7d0] via-[#00FF99] to-[#065f46]">Story</span>
          </h1>
          <p className="text-[#D8DEE5] font-light text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl drop-shadow-md tracking-wide">
            AI VINE was founded with one belief that the right AI talent, placed in the right environment, creates compounding value — like a vine that strengthens every branch it touches. We bridge the gap between exceptional AI professionals and companies ready to build intelligently.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-syncopate uppercase text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-wide">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {brandPillars.map((pillar, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                key={idx} 
                className="p-6 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-start group relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-[#00FF99]/10 flex items-center justify-center mb-4 text-[#00FF99]">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-base drop-shadow-sm mb-2">{pillar.title}</h4>
                </div>
                <p className="text-sm text-[#8E9AA7] leading-relaxed relative z-10 text-center sm:text-left mt-2">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presence / Offices Synergy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-8 md:p-10 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden group hover:border-[#00FF99]/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,153,0.1)_0%,transparent_70%)] blur-2xl -z-10" />
          <Globe className="w-10 h-10 text-[#00FF99] mx-auto drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]" />
          <h3 className="font-syncopate uppercase text-xl sm:text-2xl font-bold text-white tracking-wide">Our Presence</h3>
          <p className="text-base text-[#D8DEE5] max-w-2xl mx-auto leading-relaxed">
            AI VINE is based in the USA, supporting organizations nationwide with elite AI talent and custom engineering solutions.
          </p>
          <div className="max-w-md mx-auto pt-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
              <span className="font-mono text-xs uppercase text-[#00FF99] font-bold tracking-widest">🇺🇸 USA Headquarters</span>
              <p className="text-sm text-white mt-2">San Francisco, CA — Strategic Operations & Client Relations</p>
            </div>
          </div>
          <div className="flex justify-center pt-6 border-t border-white/10 mt-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn">
              <span className="relative z-10 flex items-center gap-2">Get in Touch <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
