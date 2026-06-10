"use client";

import React from "react";
import JoinForm from "@/components/forms/JoinForm";
import { Terminal, Award, Briefcase, Code } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-grape-indigo/10 border border-grape-indigo/20 text-grape-indigo rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
                <Terminal className="w-3.5 h-3.5" /> For Candidates
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight leading-tight">
                Accelerate Your AI Career
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlock top-tier roles with leading enterprises in the USA and India. By joining the AI VINE network, your skills are validated through our technical screening, giving you direct visibility with hiring decision makers.
              </p>
            </div>

            {/* Candidate Benefits */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">Direct Placements</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Bypass generic job boards. We map your verified skills directly to active enterprise demands in NLP, CV, and MLOps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-grape-indigo/10 flex items-center justify-center text-grape-indigo shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">Skills Assessment Verification</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Complete our hands-on technical build evaluations. Gain verified credentials that prove your coding capability under pressure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-harvest-gold/10 flex items-center justify-center text-vine-forest shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-vine-forest text-sm">AI Academy Training</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Identify skill gaps? Access our specialized bootcamps covering large language models, inference optimization, and cloud engineering pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Hyderabad notice */}
            <div className="bg-root-cream/50 rounded-card p-6 border border-vine-green/5">
              <h4 className="text-xs font-mono font-bold text-vine-green uppercase mb-2 flex items-center gap-1">
                <span>HYDERABAD TRAINING CENTER</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Interested in local classroom bootcamp sessions in Hyderabad, TS? State this in your comments to schedule a visit to our Madhapur training hub.
              </p>
            </div>
          </div>

          {/* Form wrapper (7 cols) */}
          <div className="lg:col-span-7">
            <JoinForm />
          </div>
        </div>
      </div>
    </div>
  );
}
