"use client";
import React from "react";
import JoinForm from "@/components/forms/JoinForm";
import { Terminal, CheckCircle2 } from "lucide-react";

export default function JoinPage() {
  const whoWePlace = [
    "Freshers with AI fundamentals",
    "Mid-level AI/ML professionals",
    "Senior AI architects",
    "OPT/CPT students",
    "H1B holders",
  ];

  const howToJoin = [
    "Submit your profile (no cost, ever)",
    "Quick skill assessment call",
    "Enter our active candidate pool",
    "Get matched with live requirements",
    "We support you through interviews and onboarding",
  ];

  const studentProgram = [
    "Resume & portfolio review",
    "Mock AI interviews",
    "Real project exposure",
    "Direct referrals to hiring companies",
  ];

  return (
    <div className="min-h-screen  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
                <Terminal className="w-3.5 h-3.5" /> For Candidates
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight leading-tight">
                Your AI Career. Rooted in Opportunity.
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you're a student entering AI or a seasoned engineer — AI VINE connects you with the right opportunities.
              </p>
            </div>

            {/* Who We Place */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-vine-forest">Who We Place</h3>
              <div className="flex flex-wrap gap-2">
                {whoWePlace.map((who, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-card border border-vine-green/15 text-vine-forest font-mono text-[10px] rounded hover:border-vine-green/30 transition-colors"
                  >
                    {who}
                  </span>
                ))}
              </div>
            </div>

            {/* How to Join */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-vine-forest">How to Join</h3>
              <ul className="space-y-2">
                {howToJoin.map((step, idx) => (
                  <li key={idx} className="text-xs text-vine-forest flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vine-green shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-mono text-[11px] bg-vine-green/5 text-vine-green px-1.5 py-0.5 rounded mr-1">0{idx + 1}</strong>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Program */}
            <div className="bg-root-cream/50 rounded-card p-6 border border-vine-green/5 space-y-3">
              <h3 className="font-display text-sm font-bold text-vine-forest">🌿 Student Program</h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {studentProgram.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-vine-green font-bold">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
