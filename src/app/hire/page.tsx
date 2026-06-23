"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HireTalentForm from "@/components/forms/HireTalentForm";
import { Modal } from "@/components/ui/modal";
import { Building2, ArrowRight, CheckCircle2, Database, Sparkles, Search, UserCheck, ListChecks, MessagesSquare, Handshake } from "lucide-react";
import VisaNetworkDiagram from "@/components/ui/visa-network-diagram";

export default function HirePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staffingProcess = [
    {
      title: "Requirement Deep-Dive",
      desc: "We don't just take a job description. We get on a call, understand your team structure, tech stack, and what \"great\" looks like for this role.",
      icon: Search
    },
    {
      title: "Candidate Matching",
      desc: "We search our active, pre-screened pool and identify the best fits — not the most available.",
      icon: UserCheck
    },
    {
      title: "Curated Shortlist",
      desc: "You receive 3–5 profiles, anonymized and summarized, typically within 48–72 hours.",
      icon: ListChecks
    },
    {
      title: "Interview Support",
      desc: "We coordinate scheduling, prep candidates, and stay close through every round.",
      icon: MessagesSquare
    },
    {
      title: "Offer & Onboarding",
      desc: "We support both sides through offer negotiation and first-day onboarding.",
      icon: Handshake
    },
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
      desc: "Flexible, short to mid-term placements. Best for project spikes, fast ramp-ups.",
    },
    {
      title: "Full-Time",
      desc: "Direct hire AI professionals. Best for core team building.",
    },
    {
      title: "Staff Augmentation",
      desc: "Extend your existing AI team on demand. Best for scaling without overhead.",
    },
  ];

  const testimonials = [
    {
      quote: "We'd been trying to hire a senior MLOps engineer for three months through two other agencies. AI VINE sent us a shortlist in 48 hours. We made an offer by end of the week.",
      author: "VP of Engineering, Healthcare AI",
    },
    {
      quote: "What sets AI VINE apart is that they actually understand the roles they're filling. When I said we needed someone with LangChain and RAG experience, they didn't ask me to explain what that meant. They just delivered.",
      author: "CTO, Legal Tech Startup",
    },
    {
      quote: "We scaled our AI team from 2 to 7 engineers in under two months. Every single placement came through AI VINE. The quality and speed were unlike anything we'd experienced with generalist recruiters.",
      author: "Head of Product, Fintech Scaleup",
    },
    {
      quote: "We were skeptical about using a staffing agency for AI roles — we'd been burned before. AI VINE changed that. They took the time to understand our stack, our culture, and what we actually needed. Every candidate they sent was worth interviewing.",
      author: "Engineering Manager, SaaS Platform",
    },
    {
      quote: "Our go-to for AI hiring. We've made four placements through AI VINE across ML, NLP, and data science. Fast, professional, and they always get it right.",
      author: "Director of AI, E-commerce",
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
        <div className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-16 overflow-x-hidden">
          {/* Extra dark overlay for hero readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_80%)] pointer-events-none -z-10" />
          
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0 lg:pl-8 relative z-10"
            >
              <h1 className="font-nevera uppercase text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-[1.2] drop-shadow-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] inline-block transform lg:origin-left">Hire Pre-Vetted</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#bbf7d0] via-[#00FF99] to-[#065f46] drop-shadow-sm inline-block transform lg:origin-left mt-2">AI Talent</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] inline-block transform lg:origin-left mt-2 whitespace-nowrap">No Guesswork</span>
              </h1>
              <p className="text-[#D8DEE5] font-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md tracking-wide">
                Tell us the role. We'll deliver interview-ready AI professionals — contract, C2C, or full-time. Most placements close in under 7 days.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Specific Talent <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <Link
                  href="/talent"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#FFFFFF] font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm glossy-btn"
                >
                  <span className="relative z-10">Browse Our Talent Pool</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Visa Network Diagram */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="w-full h-full min-h-[400px] flex items-center justify-center mt-8 lg:mt-0 lg:-translate-y-12 lg:scale-110 origin-center lg:origin-left"
            >
              <VisaNetworkDiagram />
            </motion.div>
          </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 pt-12">
        <div className="flex flex-col gap-32 mt-16">
          
          {/* The Problem We Solve (Centered Narrative) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-6 flex justify-center items-center gap-3 tracking-wide">
              <Building2 className="w-8 h-8 text-[#00FF99]" /> The Problem We Solve
            </h3>
            <p className="text-[#D8DEE5] text-lg leading-relaxed font-light">
              Most recruiters treat AI roles like any other tech hire. They keyword-match resumes, flood your inbox, and leave you to figure out the rest. <strong className="text-white font-medium">AI VINE is different.</strong> We live inside the AI talent market — we know the roles, the skills, the nuances, and the candidates. You get a curated shortlist, not a pile of profiles.
            </p>
          </motion.div>

          {/* Our Staffing Process (Sticky Stack) */}
          <div className="max-w-4xl mx-auto w-full relative z-10 my-24">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-20 text-center tracking-wide flex justify-center items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#00FF99]" /> Our Staffing Process
              </h3>
            </motion.div>
            
            <div className="relative flex flex-col w-full pb-[20vh]">
              {staffingProcess.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="sticky w-full mb-[10vh]"
                    style={{
                      top: `calc(120px + ${idx * 40}px)`,
                      zIndex: idx + 10,
                    }}
                  >
                    <motion.div
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 40 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-full rounded-[2rem] bg-[#05080a]/95 backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_-15px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row gap-5 md:gap-8 p-6 md:p-8"
                    >
                      {/* Icon Box */}
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                          <Icon className="w-7 h-7 text-[#00FF99]" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col justify-center">
                        <p className="text-[#00FF99] font-bold text-xs tracking-widest uppercase mb-2">
                          0{idx + 1} / Staffing Process
                        </p>
                        <h4 className="text-[#FFFFFF] text-xl md:text-2xl font-bold mb-2 font-exo-2">
                          {step.title}
                        </h4>
                        <p className="text-[#8E9AA7] text-sm md:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Engagement Models (3-Column Grid) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto w-full"
          >
            <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-10 text-center tracking-wide">Engagement Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] transition-all duration-300 group flex flex-col justify-center text-center"
                >
                  <h4 className="font-bold text-[#FFFFFF] text-lg mb-3 group-hover:text-[#00FF99] transition-colors">{model.title}</h4>
                  <p className="text-sm text-[#8E9AA7] leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Two-column block for Roles and Why Us to save vertical space but differently structured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto w-full items-start">
            {/* Why Companies Choose Us */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-8 flex items-center gap-3 tracking-wide">
                <CheckCircle2 className="w-6 h-6 text-[#00FF99]" /> Why Companies Choose Us
              </h3>
              <ul className="space-y-5">
                {[
                  "We only work AI roles — no generalist noise",
                  "Active pool means no waiting for passive sourcing",
                  "Candidates are pre-screened for skills, not just titles",
                  "Avg. time-to-hire: 7 business days",
                  "We support work authorization across all visa types",
                  "One point of contact from requirement to placement"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF99] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#FFFFFF] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Roles We Fill */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-8 flex items-center gap-3 tracking-wide">
                <Database className="w-6 h-6 text-[#00D9FF]" /> Roles We Fill
              </h3>
              <div className="flex flex-wrap gap-3">
                {roleCategories.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#D8DEE5] font-mono text-xs rounded-lg hover:bg-[#00FF99]/20 hover:border-[#00FF99] hover:text-[#FFFFFF] transition-all cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Infinite Scroll Testimonials (Naturally Full Width) */}
      <div className="w-full relative z-10 my-24 overflow-hidden py-16 bg-[#000208]/20 border-y border-white/5">
        <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-16 text-center tracking-wide">
          What Our Clients Say
        </h3>
        
        <style>
          {`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 1rem)); }
            }
            .scrolling-marquee {
              animation: marqueeScroll 40s linear infinite;
              will-change: transform;
            }
            .scrolling-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        
        <div className="relative flex overflow-hidden w-full group">
          <div className="flex w-max scrolling-marquee gap-8 px-4">
            {testimonials.map((t, idx) => (
              <div key={`t1-${idx}`} className="w-[200px] md:w-[240px] shrink-0 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-2xl p-4 border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.05)] hover:border-[#00FF99]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <Sparkles className="w-3 h-3 text-[#00FF99] mb-2 opacity-50" />
                  <blockquote className="text-[11px] md:text-xs italic text-[#FFFFFF] leading-snug mb-2 font-light">
                    "{t.quote}"
                  </blockquote>
                </div>
                <p className="text-[9px] md:text-[10px] text-[#00FF99] font-bold tracking-widest uppercase">
                  — {t.author}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless infinite loop */}
            {testimonials.map((t, idx) => (
              <div key={`t2-${idx}`} className="w-[200px] md:w-[240px] shrink-0 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-2xl p-4 border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.05)] hover:border-[#00FF99]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <Sparkles className="w-3 h-3 text-[#00FF99] mb-2 opacity-50" />
                  <blockquote className="text-[11px] md:text-xs italic text-[#FFFFFF] leading-snug mb-2 font-light">
                    "{t.quote}"
                  </blockquote>
                </div>
                <p className="text-[9px] md:text-[10px] text-[#00FF99] font-bold tracking-widest uppercase">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] hover:border-[#00FF99] rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-4">
              <h2 className="font-syncopate uppercase text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-wide">
                Ready to Hire?
              </h2>
              <p className="text-[#D8DEE5] max-w-2xl mx-auto text-sm leading-relaxed">
                Tell us what you're looking for and we'll get to work immediately.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn"
                >
                  Request Talent <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/talent"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#FFFFFF] font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm glossy-btn"
                >
                  Browse Talent Pool <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <HireTalentForm />
      </Modal>
    </>
  );
}
