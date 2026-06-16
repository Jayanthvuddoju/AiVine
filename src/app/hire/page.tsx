"use client";
import React, { useState } from "react";
import Link from "next/link";
import HireTalentForm from "@/components/forms/HireTalentForm";
import { Modal } from "@/components/ui/modal";
import { Building2, ArrowRight, CheckCircle2, Database, Sparkles } from "lucide-react";
import { AuroraHero } from "@/components/ui/aurora-hero-bg";

export default function HirePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staffingProcess = [
    "You share the role requirement and team context",
    "We match from our active, pre-screened candidate pool",
    "You receive a curated shortlist — typically within 48–72 hours",
    "Interview, select, and onboard with our support",
  ];

  const roleCategories = [
    "Machine Learning Engineers",
    "Data Scientists & Analysts",
    "LLM / Generative AI Developers",
    "AI Product Managers",
    "Computer Vision Engineers",
    "NLP Engineers",
    "AI Infrastructure / MLOps Engineers",
    "AI Trainers & RLHF Specialists",
    "Prompt Engineers",
    "AI Business Analysts",
  ];

  const engagementModels = [
    {
      title: "Contract / C2C",
      desc: "Flexible, short to mid-term placements",
    },
    {
      title: "Full-Time",
      desc: "Direct hire AI professionals",
    },
    {
      title: "Staff Augmentation",
      desc: "Extend your existing AI team on demand",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      <AuroraHero className="min-h-[70vh] pt-32 pb-16 items-start sm:items-center">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-vine-green/20 border border-vine-green/30 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase backdrop-blur-md">
            <Building2 className="w-4 h-4" /> For Companies
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            Hire Pre-Vetted AI Talent. <br/><span className="text-vine-green drop-shadow-sm">No Guesswork.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Tell us the role. We'll deliver interview-ready AI professionals — contract, C2C, or full-time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-vine-green text-white font-semibold rounded-vine text-sm hover:bg-vine-green/90 transition-all duration-300 shadow-[0_0_30px_rgba(32,120,207,0.4)] hover:shadow-[0_0_40px_rgba(32,120,207,0.6)] hover:-translate-y-1"
            >
              Request Specific Talent <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/talent"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-vine text-sm hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Browse Our Talent Pool
            </Link>
          </div>
        </div>
      </AuroraHero>

      {/* Background accents for lower section */}
      <div className="absolute bottom-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(32,120,207,0.15),transparent_50%)] pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 pt-12">
        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* Our Staffing Process */}
            <div className="bg-white/60 dark:bg-[#010a1f]/60 backdrop-blur-md rounded-3xl p-8 border border-vine-forest/5 dark:border-white/5 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-vine-forest dark:text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-vine-green" /> Our Staffing Process
              </h3>
              <ul className="space-y-4">
                {staffingProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vine-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-vine-forest/80 dark:text-white/80 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engagement Models */}
            <div>
              <h3 className="font-display text-2xl font-bold text-vine-forest dark:text-white mb-6">Engagement Models</h3>
              <div className="space-y-4">
                {engagementModels.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/60 dark:bg-[#010a1f]/60 backdrop-blur-md rounded-2xl border border-vine-forest/5 dark:border-white/5 shadow-sm hover:border-vine-green/30 transition-colors"
                  >
                    <h4 className="font-bold text-vine-forest dark:text-white text-base">{model.title}</h4>
                    <p className="text-sm text-vine-forest/60 dark:text-white/60 mt-1">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Role Categories We Fill */}
            <div className="bg-vine-forest dark:bg-[#0a122c] rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,120,207,0.15),transparent_70%)]" />
              <h3 className="font-display text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <Database className="w-6 h-6 text-vine-green" /> Roles We Fill
              </h3>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {roleCategories.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/90 font-mono text-[11px] rounded-lg hover:bg-vine-green hover:border-vine-green hover:text-white transition-all cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-[#010a1f] border border-vine-green/40 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(32,120,207,0.5)] group hover:shadow-[0_0_80px_-10px_rgba(32,120,207,0.7)] hover:border-vine-green/60 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,120,207,0.3)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Establish your AI Pipeline today
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
                Partner with AI VINE to hire engineering teams or develop tailored AI modules. Reach out to schedule a consultation.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-vine-green text-root-cream font-bold rounded-vine text-sm hover:bg-vine-green/90 transition-all duration-300 shadow-[0_0_20px_rgba(32,120,207,0.3)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <HireTalentForm />
      </Modal>
    </div>
  );
}
