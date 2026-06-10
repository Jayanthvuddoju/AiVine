"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Globe, Target, HeartHandshake, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            Our Brand Story
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            Cultivating Connection and Intelligence
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            AI VINE bridges elite computational engineering with corporate vision. Built around the metaphor of a vine, we drive long-term structural scaling, support, and technical strength.
          </p>
        </div>

        {/* Brand Metaphor Callout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-vine-forest">
              The Metaphor of the Vine
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In nature, a vine represents growth, adaptability, connection, and scale. It forms strong structural anchors while spreading and climbing. We applied these same attributes to Artificial Intelligence team staffing:
            </p>
            
            <div className="space-y-4 text-xs text-vine-forest">
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0 text-[10px] font-bold">1</span>
                <div>
                  <strong>Growth & Adaptability:</strong>
                  {"We don't just place candidates; we nurture talent through our academy, upgrading skills as tools evolve."}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0 text-[10px] font-bold">2</span>
                <div>
                  <strong>Organic Connection:</strong>
                  We bridge the gap between US engineering managers and skilled developer hubs in India, managing communication and legal compliance.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0 text-[10px] font-bold">3</span>
                <div>
                  <strong>Structural Scale:</strong>
                  Our placements support long-term projects, ensuring candidates integrate into workflows with reliable contract support.
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-8 rounded-card bg-root-cream border border-vine-green/10 shadow-sm space-y-6 flex flex-col justify-center">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-vine-green text-root-cream flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-vine-forest">Nurturing AI Capability</h4>
                <p className="text-[10px] text-muted-foreground font-mono">ESTABLISHED 2024</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              We started AI VINE after seeing recruitment models break down under AI buzzwords. Keywords on resumes replaced real capabilities, leaving hiring managers frustrated. We set out to build a staffing pipeline built on technical proof: candidates qualify for our pool only after passing hands-on coding tests.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold text-grape-indigo uppercase">Core Principles</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-vine-forest">What Guides Our Vine</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-card border border-vine-green/5 space-y-3">
              <Target className="w-5 h-5 text-vine-green" />
              <h4 className="font-bold text-vine-forest text-sm">Technical Rigor</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We believe in code verification, not keyword matching. Technical screeners evaluate pipelines, modeling theories, and cloud deployments.
              </p>
            </div>
            <div className="p-6 bg-white rounded-card border border-vine-green/5 space-y-3">
              <HeartHandshake className="w-5 h-5 text-grape-indigo" />
              <h4 className="font-bold text-vine-forest text-sm">Confidentiality First</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our anonymous talent database respects candidate careers and prevents recruiter spam, unlocking profiles only for verified enterprise buyers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-card border border-vine-green/5 space-y-3">
              <Compass className="w-5 h-5 text-vine-green" />
              <h4 className="font-bold text-vine-forest text-sm">Global Perspective</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                With dual locations in California and Hyderabad, we provide 24-hour engineering coverage and cross-border billing compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Office Callout */}
        <div className="bg-vine-forest text-root-cream rounded-card border border-vine-green/20 p-8 text-center max-w-4xl mx-auto space-y-4">
          <Globe className="w-8 h-8 text-vine-sage mx-auto" />
          <h3 className="font-display text-xl sm:text-2xl font-bold">Dual Office Synergy</h3>
          <p className="text-xs text-root-cream/70 max-w-xl mx-auto leading-relaxed">
            Our San Francisco team coordinates agreements, scopes client requirements, and supports project handoffs. Simultaneously, our training center and engineering workspace in Madhapur, Hyderabad operates technical screening and academy courses.
          </p>
          <div className="flex justify-center gap-6 pt-2">
            <Link href="/contact" className="text-xs text-vine-sage font-semibold hover:underline flex items-center gap-1">
              Contact SF Office &rarr;
            </Link>
            <Link href="/contact" className="text-xs text-vine-sage font-semibold hover:underline flex items-center gap-1">
              Contact Hyderabad Hub &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
