"use client";
import React, { useState } from "react";
import JoinForm from "@/components/forms/JoinForm";
import { Modal } from "@/components/ui/modal";
import { Terminal, CheckCircle2, ArrowRight, UserPlus, Award, Zap } from "lucide-react";

import Lightfall from "@/components/ui/Lightfall";
import NetworkDiagram from "@/components/ui/network-diagram";

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
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/PinkBg.png)' }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.8))' }}
        />
        {/* Bottom Pink Glow */}
        <div className="absolute bottom-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,105,180,0.15),transparent_50%)] pointer-events-none" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section Container */}
        <div className="relative min-h-[70vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden lg:overflow-visible">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Header Content (Left) */}
            <div className="space-y-6 text-center lg:text-left lg:col-span-5 lg:ml-8">
              <h1 className="font-deltha text-4xl sm:text-6xl font-bold text-[#FFFFFF] tracking-[-0.04em] leading-tight drop-shadow-lg">
                Your AI Career. <br/>
                <span className="text-[#EAE5D9]">Rooted in Opportunity.</span>
              </h1>
              <p className="font-space-grotesk text-[#D2D5DC] font-normal text-base sm:text-lg leading-[1.8] max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                Whether you're an emerging AI professional or a seasoned engineer — AI VINE connects you with the right companies across the USA.
              </p>
            </div>

            {/* Network Diagram (Right) */}
            <div className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:col-span-7 scale-100 lg:scale-110 origin-right lg:-mr-12 translate-y-6 lg:translate-y-10">
              <NetworkDiagram />
            </div>
          </div>

          {/* Centered CTA Row */}
          <div className="w-full flex justify-center mt-6 relative z-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full text-base hover:bg-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(234,229,217,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(234,229,217,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1"
            >
              Submit Your Profile <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-12">
          {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* How to Join */}
            <div className="bg-[rgba(16,16,24,0.55)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.06)] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(234,229,217,0.2)]">
              <h3 className="font-exo-2 text-2xl font-bold text-[#FFFFFF] mb-6 flex items-center gap-3">
                <UserPlus className="w-6 h-6 text-[#EAE5D9]" /> How to Join
              </h3>
              <ul className="space-y-5 relative z-10">
                {howToJoin.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(255,255,255,0.04)] border-t border-[#EAE5D9] text-[#FFFFFF] font-mono text-[10px] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-[#D2D5DC] leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Get */}
            <div className="bg-[rgba(16,16,24,0.55)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.06)] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(234,229,217,0.2)]">
              <h3 className="font-exo-2 text-2xl font-bold text-[#FFFFFF] mb-6 relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#EAE5D9]" /> What You Get
              </h3>
              <ul className="space-y-3 relative z-10">
                {whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EAE5D9] shrink-0" />
                    <span className="text-sm text-[#D2D5DC]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Who We Place */}
            <div className="bg-[rgba(16,16,24,0.55)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.06)] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(234,229,217,0.2)]">
              <h3 className="font-exo-2 text-2xl font-bold text-[#FFFFFF] mb-6 relative z-10 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#EAE5D9]" /> Who We Place
              </h3>
              <div className="flex flex-col gap-3 relative z-10">
                {whoWePlace.map((who, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#D2D5DC] font-medium text-sm rounded-xl hover:bg-[rgba(255,255,255,0.08)] transition-colors"
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
          <div className="bg-[rgba(16,16,24,0.55)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.06)] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(234,229,217,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,229,217,0.08)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(234,229,217,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(234,229,217,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1"
                >
                  Submit Your Profile
                </button>
              </div>
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
