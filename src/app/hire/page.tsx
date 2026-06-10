"use client";

import React from "react";
import HireTalentForm from "@/components/forms/HireTalentForm";
import { Zap, Globe2, Building2, UserCheck } from "lucide-react";

export default function HirePage() {
  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Information & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
                <Building2 className="w-3.5 h-3.5" /> For Companies
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight leading-tight">
                Scale Your AI Capabilities
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with pre-vetted AI, ML, Data, and MLOps engineering professionals. We bypass candidate lists by verifying skills through active technical builds before matching them to your team.
              </p>
            </div>

            {/* Structured Value Props */}
            <div className="space-y-6 pt-4">
              {/* Prop 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">Vetted Engineering Assessments</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Every candidate completes a standard framework evaluation covering deep learning pipelines, system scaling, and data workflows.
                  </p>
                </div>
              </div>

              {/* Prop 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-grape-indigo/10 flex items-center justify-center text-grape-indigo shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">Flexible Dual-Shore Models</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hire US-based remote developers for core integrations, or set up a dedicated offshore development branch in Hyderabad.
                  </p>
                </div>
              </div>

              {/* Prop 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-harvest-gold/10 flex items-center justify-center text-vine-forest shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">Rapid Matching & Delivery</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Bypass recruiters. We present pre-matched profiles within 48 hours of your request, ready to schedule direct engineering interviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-root-cream/50 rounded-card p-6 border border-vine-green/5 space-y-3">
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                &ldquo;AI VINE provided three senior MLOps engineers within a week. Their coding foundations and understanding of GPU scaling let them contribute on day one.&rdquo;
              </p>
              <p className="text-xs font-semibold text-vine-forest">
                &mdash; VP of Engineering, Series-B FinTech SaaS
              </p>
            </div>
          </div>

          {/* Form wrapper (7 cols) */}
          <div className="lg:col-span-7">
            <HireTalentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
