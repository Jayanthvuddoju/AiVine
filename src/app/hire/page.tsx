"use client";
import React, { useState } from "react";
import Link from "next/link";
import HireTalentForm from "@/components/forms/HireTalentForm";
import { Modal } from "@/components/ui/modal";
import { Building2, ArrowRight, CheckCircle2, Database, Sparkles } from "lucide-react";

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

      <div className="min-h-screen relative z-10">
        {/* Hero Section Container */}
        <div className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-16">
          {/* Extra dark overlay for hero readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_80%)] pointer-events-none -z-10" />
          
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="font-syncopate uppercase text-xl sm:text-3xl md:text-5xl font-bold text-[#FFFFFF] tracking-wide leading-relaxed drop-shadow-lg">
              <span className="inline-block transform scale-x-[1.4] scale-y-[1.15] origin-bottom">Hire Pre-Vetted AI Talent</span>
              <br/>
              <span className="text-[#00FF99] drop-shadow-sm inline-block transform scale-x-[1.4] scale-y-[1.15] origin-bottom mt-6">No Guesswork</span>
            </h1>
            <p className="text-[#D8DEE5] font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-md tracking-wide">
              Tell us the role. We'll deliver interview-ready AI professionals — contract, C2C, or full-time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px]"
                style={{ 
                  background: 'linear-gradient(90deg, #00FF99, #00D9FF)',
                  boxShadow: '0 0 40px rgba(0,255,153,0.5)'
                }}
              >
                Request Specific Talent <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/talent"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#FFFFFF] font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Browse Our Talent Pool
              </Link>
            </div>
          </div>
        </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 pt-12">
        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* Our Staffing Process */}
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] transition-all duration-300">
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-6 flex items-center gap-3 tracking-wide">
                <Sparkles className="w-6 h-6 text-[#00FF99]" /> Our Staffing Process
              </h3>
              <ul className="space-y-4">
                {staffingProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF99] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#D8DEE5] leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engagement Models */}
            <div>
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-6 tracking-wide">Engagement Models</h3>
              <div className="space-y-4">
                {engagementModels.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-2xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] transition-all duration-300"
                  >
                    <h4 className="font-bold text-[#FFFFFF] text-base">{model.title}</h4>
                    <p className="text-sm text-[#8E9AA7] mt-1">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Role Categories We Fill */}
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] transition-all duration-300 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.15),transparent_70%)]" />
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-6 relative z-10 flex items-center gap-3 tracking-wide">
                <Database className="w-6 h-6 text-[#00D9FF]" /> Roles We Fill
              </h3>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {roleCategories.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#D8DEE5] font-mono text-[11px] rounded-lg hover:bg-[#00FF99]/20 hover:border-[#00FF99] hover:text-[#FFFFFF] transition-all cursor-default"
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
          <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-4">
              <h2 className="font-syncopate uppercase text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-wide">
                Establish your AI Pipeline today
              </h2>
              <p className="text-[#D8DEE5] max-w-2xl mx-auto text-sm leading-relaxed">
                Partner with AI VINE to hire engineering teams or develop tailored AI modules. Reach out to schedule a consultation.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px]"
                  style={{ 
                    background: 'linear-gradient(90deg, #00FF99, #00D9FF)',
                    boxShadow: '0 0 40px rgba(0,255,153,0.5)'
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <HireTalentForm />
      </Modal>
    </>
  );
}
