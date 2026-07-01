"use client";
import React, { useState } from "react";
import Link from "next/link";
import JoinForm from "@/components/forms/JoinForm";
import { Modal } from "@/components/ui/modal";
import { motion } from "framer-motion";
import { Terminal, CheckCircle2, ArrowRight, UserPlus, Award, Zap, MessageSquare, Database, Target, Rocket, Sparkles } from "lucide-react";

import Lightfall from "@/components/ui/Lightfall";
import NetworkDiagram from "@/components/ui/network-diagram";

export default function JoinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whoWePlace = [
    "Mid-level AI/ML professionals ready for their next step",
    "Senior AI engineers and architects targeting impactful roles",
    "OPT / CPT candidates in AI-related fields",
    "H1B holders seeking transfers or sponsorship-friendly opportunities",
    "US Citizens and Green Card holders across all AI disciplines",
  ];

  const rolesWePlace = [
    "Machine Learning Engineers",
    "Data Scientists & Analysts",
    "LLM / Generative AI Developers",
    "AI Product Managers",
    "Computer Vision Engineers",
    "NLP Engineers",
    "MLOps / AI Infrastructure Engineers",
    "AI Trainers & RLHF Specialists",
    "Prompt Engineers",
    "AI Business Analysts",
  ];

  const howToJoinSteps = [
    { title: "Choose role", desc: "Select your career path and target industry.", icon: UserPlus },
    { title: "Intro call", desc: "A quick conversation to understand your goals.", icon: MessageSquare },
    { title: "Verification", desc: "We confirm your technical background.", icon: CheckCircle2 },
    { title: "Active pool", desc: "Your profile goes live in our network.", icon: Database },
    { title: "Get matched", desc: "We reach out when a role matches perfectly.", icon: Zap },
    { title: "Interview support", desc: "We prepare you for the specific role.", icon: Target },
    { title: "Negotiation", desc: "We support you through the offer process.", icon: Award },
    { title: "Onboarding", desc: "We check in to ensure a smooth transition.", icon: Rocket },
  ];

  const whatYouGet = [
    "Access to exclusive, unpublished AI roles across the USA",
    "A recruiter who actually understands AI — not just someone reading your resume for buzzwords",
    "Interview prep tailored to the specific role and company",
    "Honest feedback at every stage",
    "Support through offer negotiation",
    "Ongoing relationship — we're not done after placement",
  ];

  const testimonials = [
    {
      quote: "I was on OPT and nervous about finding the right company. AI VINE not only found me a role fast — they made sure the company was comfortable with my visa situation before I even got on the first call. That saved me a lot of wasted time.",
      author: "NLP Engineer, placed in New York",
    },
    {
      quote: "I'd applied to dozens of roles on my own and kept hitting walls. Within two weeks of submitting my profile to AI VINE, I had three interviews lined up — all for roles that actually matched my background.",
      author: "Machine Learning Engineer, placed in Seattle",
    },
    {
      quote: "My recruiter at AI VINE knew exactly what questions a company like that would ask and helped me prep specifically for that interview. I walked in confident. I got the offer.",
      author: "AI Product Manager, placed in Austin",
    },
    {
      quote: "What I appreciated most was the honesty. They told me upfront which roles I was a strong fit for and which ones to skip. No false promises, no wasted energy. Just a clear path to the right opportunity.",
      author: "Data Scientist, placed in Chicago",
    },
    {
      quote: "I was switching from a generalist data role into a more focused ML engineering position. AI VINE understood that transition and pitched me to companies who were open to it. That nuance made all the difference.",
      author: "MLOps Engineer, placed in Denver",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      
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

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section Container */}
        <div className="relative min-h-[70vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden lg:overflow-visible">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Header Content (Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6 text-center lg:text-left lg:col-span-5 lg:ml-8 relative z-20"
            >
              <h1 className="font-nevera uppercase text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-[1.2] drop-shadow-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b]">Your</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#bbf7d0] via-[#00FF99] to-[#065f46]">AI Career.</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b]">Rooted in Opportunity.</span>
              </h1>
              <p className="text-[#D8DEE5] font-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md tracking-wide">
                We work exclusively in AI — which means every role we pitch you is real, relevant, and worth your time.
              </p>
            </motion.div>

            {/* Network Diagram (Right) */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:col-span-7 scale-100 sm:scale-110 lg:scale-110 xl:scale-125 origin-center lg:origin-right lg:-mr-12 xl:-mr-16 lg:translate-x-12 xl:translate-x-20 translate-y-6 lg:translate-y-8 relative z-10"
            >
              <NetworkDiagram />
            </motion.div>
          </div>

          {/* Centered CTA Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center mt-6 relative z-10"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-10 py-5 bg-[#00FF99] text-[#000000] font-bold rounded-full text-base transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Submit Your Profile <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>
        </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-12 relative z-10">
        <div className="flex flex-col gap-32 mt-16">

          {/* Why AI VINE Is Different (Centered) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-6 tracking-wide">
              Why We're Different
            </h3>
            <p className="text-[#D8DEE5] text-lg leading-relaxed font-light">
              Most recruiters send your resume out blindly and hope something sticks. We don't work that way. We take the time to understand where you are in your career, where you want to go, and what kind of environment helps you do your best work. <strong className="text-white font-medium">Then we match you with companies that fit</strong> — not just roles that match keywords.
            </p>
          </motion.div>

          {/* How to Join (Snake Interface) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto w-full relative pt-10"
          >
            <style>
              {`
                @keyframes snakeLine {
                  0% { stroke-dashoffset: 1000; }
                  100% { stroke-dashoffset: 0; }
                }
                .animate-snake {
                  animation: snakeLine 30s linear infinite;
                }
              `}
            </style>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,153,0.06),transparent_60%)] pointer-events-none" />
            
            <div className="text-center mb-16 relative z-10">
              <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] tracking-wide flex justify-center items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#00FF99]" /> How It Works
              </h3>
            </div>
            
            <div className="relative">
              {/* S-Curve SVG for Desktop */}
              <div className="hidden lg:block absolute top-0 left-0 w-full h-[22rem] z-0 pointer-events-none">
                <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,153,0.3)] overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 352">
                  <path 
                    d="M 125 32 L 875 32 C 1000 32, 1000 176, 875 176 L 125 176 C 0 176, 0 320, 125 320 L 875 320" 
                    fill="none" 
                    stroke="rgba(0, 255, 153, 0.3)" 
                    strokeWidth="3" 
                    strokeDasharray="12 12" 
                    className="animate-snake"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative z-10">
                {howToJoinSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center relative group px-2 h-[14rem]">
                      <div className="relative w-16 h-16 rounded-xl bg-[#0a0f12] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:border-[#00FF99]/50 group-hover:shadow-[0_0_30px_rgba(0,255,153,0.2)] transition-all duration-300 z-10">
                        <Icon className="w-6 h-6 text-[#00FF99] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#00FF99] text-black flex items-center justify-center font-bold text-[10px] shadow-[0_0_10px_rgba(0,255,153,0.4)] border-[2px] border-[#0a0f12]">
                          {idx + 1}
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-3 text-center group-hover:text-[#00FF99] transition-colors">{step.title}</h4>
                      <p className="text-[#8E9AA7] text-sm text-center leading-relaxed max-w-[220px]">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* What You Get & Who We Place (2 Column Feature Blocks) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto w-full items-start">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-8 flex items-center gap-3 tracking-wide">
                <Zap className="w-6 h-6 text-[#00FF99]" /> What You Get
              </h3>
              <ul className="space-y-5">
                {whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF99] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#FFFFFF] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-8 flex items-center gap-3 tracking-wide">
                <Award className="w-6 h-6 text-[#00FF99]" /> Who We Place
              </h3>
              <div className="flex flex-col gap-4">
                {whoWePlace.map((who, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-4 bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#D8DEE5] font-medium text-sm rounded-xl hover:bg-[#00FF99]/10 hover:border-[#00FF99]/30 transition-all duration-300"
                  >
                    {who}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Roles We Place (Wide Block) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto w-full text-center"
          >
            <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-8 flex justify-center items-center gap-3 tracking-wide">
              <Terminal className="w-6 h-6 text-[#00D9FF]" /> Roles We Place
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {rolesWePlace.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#D8DEE5] font-mono text-xs rounded-lg hover:bg-[#00FF99]/20 hover:border-[#00FF99] hover:text-[#FFFFFF] transition-all cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Your Profile Stays Private */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto w-full text-center p-8 md:p-12 bg-[#0a0f12]/65 backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] rounded-3xl shadow-[0_20px_60px_rgba(0,255,153,0.08)]"
          >
            <h3 className="font-syncopate uppercase text-xl font-bold text-[#FFFFFF] mb-4 flex items-center justify-center gap-3 tracking-wide">
              Your Profile Stays Private
            </h3>
            <p className="text-[#D8DEE5] text-base leading-relaxed">
              Your identity is never shared without your explicit consent. Companies see anonymized profiles only. You stay in control of where your information goes and when.
            </p>
          </motion.div>
          
        </div>
      </div>

      {/* Infinite Scroll Testimonials (Naturally Full Width) */}
      <div className="w-full relative z-10 my-24 overflow-hidden py-16 bg-[#000208]/20 border-y border-white/5">
        <h3 className="font-syncopate uppercase text-2xl font-bold text-[#FFFFFF] mb-16 text-center tracking-wide">
          What Candidates Say
        </h3>
        
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
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
                Ready to Join?
              </h2>
              <p className="text-[#D8DEE5] max-w-2xl mx-auto text-sm leading-relaxed">
                Submit your profile and we'll be in touch within 24 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">Submit Your Profile <ArrowRight className="w-4 h-4" /></span>
                </button>
                <Link
                  href="/talent"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#FFFFFF] font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm glossy-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">Browse Open Roles <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JoinForm />
      </Modal>
    </div>
  );
}