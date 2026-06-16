"use client";
import React, { useState } from "react";
import JoinForm from "@/components/forms/JoinForm";
import { Modal } from "@/components/ui/modal";
import { Terminal, CheckCircle2, ArrowRight, UserPlus, Award, Zap } from "lucide-react";

export default function JoinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whoWePlace = [
    "Mid-level AI/ML professionals",
    "Senior AI engineers and architects",
    "OPT / CPT candidates in AI-related fields",
    "H1B holders seeking transfers or new opportunities",
    "US Citizens and Green Card holders in AI roles",
  ];

  const howToJoin = [
    "Submit your profile (no cost, ever)",
    "Quick skill verification call with our team",
    "Enter our active, anonymized candidate pool",
    "Get matched with live company requirements",
    "We support you through interviews and onboarding",
  ];

  const whatYouGet = [
    "Access to exclusive, unpublished AI roles across the USA",
    "Dedicated recruiter who understands AI roles (not just keywords)",
    "Interview prep and guidance",
    "Ongoing support through offer and onboarding",
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-vine-sage/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Centered) */}
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-vine-sage/10 border border-vine-sage/20 text-vine-sage rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            <Terminal className="w-4 h-4" /> For Candidates
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-vine-forest tracking-tight leading-tight">
            Your AI Career. <br/><span className="text-vine-sage drop-shadow-sm">Rooted in Opportunity.</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're an emerging AI professional or a seasoned engineer — AI VINE connects you with the right companies across the USA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-vine-sage text-white font-semibold rounded-vine text-sm hover:bg-vine-sage/90 transition-all duration-300 shadow-[0_0_30px_rgba(14,78,178,0.4)] hover:shadow-[0_0_40px_rgba(14,78,178,0.6)] hover:-translate-y-1"
            >
              Submit Your Profile <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* How to Join */}
            <div className="bg-white/60 dark:bg-[#010a1f]/60 backdrop-blur-md rounded-3xl p-8 border border-vine-forest/5 dark:border-white/5 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-vine-forest dark:text-white mb-6 flex items-center gap-3">
                <UserPlus className="w-6 h-6 text-vine-sage" /> How to Join
              </h3>
              <ul className="space-y-5">
                {howToJoin.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-vine-sage/10 text-vine-sage font-mono text-[10px] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-vine-forest/80 dark:text-white/80 leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Get */}
            <div className="bg-root-cream dark:bg-[#0a122c] rounded-3xl p-8 border border-vine-sage/10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,78,178,0.05),transparent_60%)]" />
              <h3 className="font-display text-2xl font-bold text-vine-forest dark:text-white mb-6 relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6 text-vine-sage" /> What You Get
              </h3>
              <ul className="space-y-3 relative z-10">
                {whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vine-sage shrink-0" />
                    <span className="text-sm text-vine-forest/70 dark:text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Who We Place */}
            <div className="bg-vine-forest dark:bg-[#010a1f] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-vine-sage/20 to-transparent opacity-50" />
              <h3 className="font-display text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <Award className="w-6 h-6 text-vine-sage" /> Who We Place
              </h3>
              <div className="flex flex-col gap-3 relative z-10">
                {whoWePlace.map((who, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 bg-white/5 border border-white/10 text-white/90 font-medium text-sm rounded-xl hover:bg-white/10 transition-colors"
                  >
                    {who}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-[#010a1f] border border-vine-sage/40 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(14,78,178,0.5)] group hover:shadow-[0_0_80px_-10px_rgba(14,78,178,0.7)] hover:border-vine-sage/60 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,78,178,0.3)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Accelerate your AI Career today
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
                Join our exclusive network of pre-vetted AI professionals. We connect you with premium enterprise clients to land high-impact roles.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-3 bg-vine-sage text-white font-bold rounded-vine text-sm hover:bg-vine-sage/90 transition-all duration-300 shadow-[0_0_20px_rgba(14,78,178,0.3)]"
                >
                  Submit Your Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JoinForm />
      </Modal>
    </div>
  );
}
