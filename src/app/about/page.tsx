"use client";
import React from "react";
import Link from "next/link";
import { Sprout, Globe, Target, HeartHandshake, Compass, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const brandPillars = [
    {
      title: "🌿 Growth",
      desc: "Every engagement should leave both company and candidate stronger.",
      icon: <Sprout className="w-5 h-5 text-vine-green" />,
    },
    {
      title: "🌿 Connection",
      desc: "We build networks, not just placements.",
      icon: <HeartHandshake className="w-5 h-5 text-vine-green" />,
    },
    {
      title: "🌿 Innovation",
      desc: "We stay ahead of the AI curve so our clients don't have to.",
      icon: <Compass className="w-5 h-5 text-vine-green" />,
    },
    {
      title: "🌿 Scalability",
      desc: "Our model grows with the market.",
      icon: <Target className="w-5 h-5 text-vine-green" />,
    },
    {
      title: "🌿 Intelligence",
      desc: "We apply AI thinking to everything, including how we work.",
      icon: <ShieldCheck className="w-5 h-5 text-vine-green" />,
    },
  ];

  return (
    <div className="min-h-screen  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            Our Story & Values
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            Our Story
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            AI VINE was founded with one belief: that the right AI talent, placed in the right environment, creates compounding value — like a vine that strengthens every branch it touches. We bridge the gap between exceptional AI professionals and companies ready to build intelligently.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold text-vine-green uppercase">Brand Pillars</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-vine-forest">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {brandPillars.map((pillar, idx) => (
              <div key={idx} className="p-5 bg-card rounded-card border border-vine-green/5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-root-cream/50 flex items-center justify-center mb-2">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-vine-forest text-sm">{pillar.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presence / Offices Synergy */}
        <div className="bg-grape-light text-vine-forest rounded-card border border-vine-green/20 p-8 text-center max-w-4xl mx-auto space-y-4">
          <Globe className="w-8 h-8 text-vine-green mx-auto" />
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Our Presence</h3>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
            AI VINE is based in the USA, supporting organizations nationwide with elite AI talent and custom engineering solutions.
          </p>
          <div className="max-w-md mx-auto pt-2">
            <div className="p-4 bg-white/5 rounded-vine border border-white/10">
              <span className="font-mono text-[10px] uppercase text-vine-green font-bold">🇺🇸 USA Headquarters</span>
              <p className="text-xs text-vine-forest/90 mt-1">San Francisco, CA — Strategic Operations & Client Relations</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
            <Link href="/contact" className="text-xs text-vine-green font-semibold hover:underline">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
