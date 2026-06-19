"use client";
import React from "react";
import Link from "next/link";
import { Sprout, Globe, Target, HeartHandshake, Compass, Zap, ShieldCheck } from "lucide-react";

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
        style={{ backgroundImage: 'url(/OrangeBg.png)' }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.1), rgba(0,0,0,0.5))' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Page Header - Hero */}
        <div className="min-h-[70vh] flex flex-col justify-center space-y-6 text-left max-w-4xl pt-10 pl-4 sm:pl-6 lg:pl-8">
          <h1 className="font-gunken text-4xl sm:text-6xl md:text-7xl text-white tracking-tight drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl drop-shadow-sm">
            AI VINE was founded with one belief that the right AI talent, placed in the right environment, creates compounding value — like a vine that strengthens every branch it touches. We bridge the gap between exceptional AI professionals and companies ready to build intelligently.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-gunken text-3xl sm:text-4xl text-white drop-shadow-sm">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {brandPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 liquid-glass rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-start group relative overflow-hidden shadow-lg h-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.4)_0%,transparent_60%)] animate-pulse pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-base drop-shadow-sm mb-2">{pillar.title}</h4>
                </div>
                <p className="text-sm text-white/70 leading-relaxed relative z-10 text-center sm:text-left mt-2">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presence / Offices Synergy */}
        <div className="liquid-glass rounded-3xl border border-white/10 p-8 md:p-10 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)] blur-2xl -z-10" />
          <Globe className="w-10 h-10 text-orange-500 mx-auto drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          <h3 className="font-gunken text-2xl sm:text-3xl text-white drop-shadow-sm">Our Presence</h3>
          <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            AI VINE is based in the USA, supporting organizations nationwide with elite AI talent and custom engineering solutions.
          </p>
          <div className="max-w-md mx-auto pt-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="font-mono text-xs uppercase text-orange-500 font-bold tracking-widest">🇺🇸 USA Headquarters</span>
              <p className="text-sm text-white mt-2">San Francisco, CA — Strategic Operations & Client Relations</p>
            </div>
          </div>
          <div className="flex justify-center pt-6 border-t border-white/10 mt-6">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-vine transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 cursor-pointer text-sm glossy-btn">
              <span className="relative z-10">Get in Touch &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
