"use client";
import React from "react";
import Link from "next/link";
import HireTalentForm from "@/components/forms/HireTalentForm";
import { Building2, ArrowRight } from "lucide-react";

export default function HirePage() {
  const roleCategories = [
    "Machine Learning Engineers",
    "Data Scientists & Analysts",
    "LLM / Generative AI Developers",
    "AI Product Managers",
    "Computer Vision Engineers",
    "NLP Engineers",
    "AI Infrastructure / MLOps",
    "AI Trainers & RLHF Specialists",
    "Prompt Engineers",
    "AI Business Analysts",
  ];

  const engagementModels = [
    {
      title: "Contract / C2C",
      desc: "Flexible, short to mid-term placements.",
    },
    {
      title: "Full-Time",
      desc: "Direct hire AI professionals.",
    },
    {
      title: "Project-Based",
      desc: "Dedicated team for defined AI projects.",
    },
  ];

  return (
    <div className="min-h-screen  pt-24 pb-16">
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
                Hire Pre-Vetted AI Talent. No Guesswork.
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tell us the role. We'll deliver interview-ready AI professionals — contract, full-time, or project-based.
              </p>
            </div>

            {/* Role Categories We Fill */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-vine-forest">Role Categories We Fill</h3>
              <div className="flex flex-wrap gap-2">
                {roleCategories.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-card border border-vine-green/10 text-vine-forest font-mono text-[10px] rounded hover:border-vine-sage transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement Models */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-vine-forest">Engagement Models</h3>
              <div className="grid grid-cols-1 gap-3">
                {engagementModels.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-card rounded-vine border border-vine-green/5 flex flex-col justify-between"
                  >
                    <h4 className="font-bold text-vine-forest text-xs">{model.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-1">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/talent"
                className="flex items-center justify-center gap-1.5 px-5 py-3 bg-vine-green text-root-cream font-semibold rounded-vine text-xs hover:bg-vine-green/90 transition-colors"
              >
                Browse Our Talent Pool <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
