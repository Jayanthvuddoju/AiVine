"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Users,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Zap,
  Globe2,
  TrendingUp,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Lightfall from "@/components/ui/Lightfall";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 3.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
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

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000208] z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-20 md:-top-20"
          fill="#00FF99"
        />

        <div className="flex w-full h-screen">
          {/* Left — text content */}
          <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-16 relative z-10 pt-32">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left space-y-6 max-w-2xl xl:max-w-3xl"
            >
              {/* Display Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-nevera uppercase text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold tracking-wide leading-[1.2] drop-shadow-md"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] block">Where AI Talent</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] block mt-1">Takes Root And</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#bbf7d0] via-[#00FF99] to-[#065f46] block mt-1">
                  Innovation Grows
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-[#D8DEE5] font-light text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-md tracking-wide"
              >
                AI VINE connects exceptional AI professionals with ambitious organizations, creating a thriving ecosystem where talent, technology, and opportunity grow together.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 pt-2"
              >
                <Link
                  href="/hire"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire AI Talent
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/join"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#FFFFFF] font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm glossy-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join the Network
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Spline 3D Robot */}
          <div className="flex-1 relative hidden md:block">
            {/* Glow Behind Robot */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5] }}
              transition={{ 
                duration: 4,
                delay: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.3)_0%,transparent_70%)] blur-3xl -z-10" 
            />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full relative z-10"
            />
          </div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="py-24 bg-transparent relative z-10 border-y border-[#00FF99]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16 relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,153,0.1)_0%,transparent_70%)] blur-2xl -z-10" />
            
            <div className="text-center space-y-8 bg-[#0a0f12]/65 backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-14 relative group hover:border-[#00FF99]/30 transition-colors duration-500">
              {/* Top gradient highlight */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00FF99] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4">
                <p className="font-syncopate uppercase text-2xl sm:text-4xl font-bold text-white drop-shadow-sm tracking-wide">
                  Cultivating Growth and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF99] to-[#bbf7d0]">Connection</span>
                </p>
              </div>

              <div className="pt-4 space-y-6">
                <p className="text-xl sm:text-2xl font-medium text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
                  Whether you're building an AI team or launching your AI career, we provide a unified gateway to success.
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#00FF99]/50 to-transparent mx-auto" />
                <p className="text-base sm:text-lg text-[#8E9AA7] leading-relaxed max-w-4xl mx-auto">
                  Finding the right AI talent shouldn't feel like a gamble — and landing the right opportunity shouldn't feel like a long shot. We go deep on both sides of every placement understanding what companies truly need, and what candidates are genuinely capable of. The result is matches that stick, teams that grow, and careers that take root.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-24 bg-transparent relative z-10 border-t border-[#00FF99]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-syncopate uppercase text-2xl sm:text-4xl font-bold text-white tracking-wide">
              Two Paths, One Vine
            </h2>
            <p className="text-[#D8DEE5] text-sm">
              We streamline recruitment workflows for vendors, while nurturing career opportunities for talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Path A: For Companies */}
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-8 relative overflow-hidden group hover:border-[#00FF99]/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                <h3 className="font-syncopate uppercase text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2 tracking-wide">
                  <span className="text-xs font-mono bg-[#00FF99] text-black px-2 py-1 rounded-full">For Companies</span>
                  Hiring Pipeline
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">01</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Share requirement</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Submit your specific AI talent needs and technical requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">02</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">We match candidates</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Our system scans our vetted talent pool to find professionals perfectly aligned with your stack.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">03</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Interview shortlist</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Review a curated list of top-tier matches and conduct direct technical interviews.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">04</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Hire</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Finalize contracts seamlessly and onboard your new AI engineers to start building immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Path B: For Candidates */}
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-8 relative overflow-hidden group hover:border-[#00FF99]/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                <h3 className="font-syncopate uppercase text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2 tracking-wide">
                  <span className="text-xs font-mono bg-[#00FF99] text-black px-2 py-1 rounded-full">For Candidates</span>
                  Career Pathway
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">01</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Submit profile</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Share your experience, technical portfolio, and career goals with our dedicated talent team.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">02</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Skill verification</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Complete our rigorous technical assessments to prove your capabilities in real-world scenarios.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">03</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Enter active pool</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Join our exclusive network of pre-vetted AI professionals visible to premium enterprise clients.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-[#00FF99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">04</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Get placed</h4>
                      <p className="text-sm text-[#8E9AA7] mt-1">Receive tailored offers and land high-impact roles that match your career trajectory.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why AI VINE Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold tracking-widest text-[#00FF99] uppercase">Why AI VINE</span>
                <h2 className="font-syncopate uppercase text-2xl sm:text-4xl font-bold text-white leading-tight tracking-wide">
                  Organic Connections. Accelerated Scale.
                </h2>
                <p className="text-[#D8DEE5] text-sm sm:text-base leading-relaxed">
                  {"Like a vine, AI VINE thrives on integration, growth, and structural strength. We don't just search keyword match lists. We evaluate our candidate pool technically through rigorous assessments, ensuring you bypass filters and secure top talent."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FF99]/10 flex items-center justify-center text-[#00FF99] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Active Network</h4>
                    <p className="text-xs text-[#8E9AA7] mt-1">500+ AI professionals in our active talent network ready for deployment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FF99]/10 flex items-center justify-center text-[#00FF99] shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Proven Placements</h4>
                    <p className="text-xs text-[#8E9AA7] mt-1">Proven placements and operations across USA.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FF99]/10 flex items-center justify-center text-[#00FF99] shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">7-Day Hiring</h4>
                    <p className="text-xs text-[#8E9AA7] mt-1">Average time-to-hire of just 7 business days for vetted candidates.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FF99]/10 flex items-center justify-center text-[#00FF99] shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Key Roles Filled</h4>
                    <p className="text-xs text-[#8E9AA7] mt-1">ML Engineers, NLP Specialists, AI PMs, Data Engineers, LLM Devs, CV Engineers, AI Trainers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Box Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF99]/10 to-transparent rounded-3xl blur-3xl transform rotate-3" />
              
              {/* NYC */}
              <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-5 space-y-4 relative z-10 hover:border-[#00FF99]/30 transition-colors shadow-[0_20px_60px_rgba(0,255,153,0.08)]">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-[#00FF99]">TALENT MAP: USA &bull; NYC</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#00FF99] font-bold uppercase">Northeast Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">Senior Data Scientist<br/><span className="text-[#8E9AA7] text-xs font-normal">Healthcare AI Startup</span></p>
                  <span className="inline-block bg-[#00FF99] text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-3">PLACED IN 5 DAYS</span>
                </div>
              </div>

              {/* AUSTIN */}
              <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-5 space-y-4 relative z-10 hover:border-[#00FF99]/30 transition-colors shadow-[0_20px_60px_rgba(0,255,153,0.08)]">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-[#00FF99]">TALENT MAP: USA &bull; AUSTIN</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#00FF99] font-bold uppercase">South Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">AI Product Manager<br/><span className="text-[#8E9AA7] text-xs font-normal">Legal Tech Platform</span></p>
                  <span className="inline-block bg-[#00FF99] text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-3">PLACED IN 6 DAYS</span>
                </div>
              </div>

              {/* CHICAGO */}
              <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-5 space-y-4 relative z-10 hover:border-[#00FF99]/30 transition-colors shadow-[0_20px_60px_rgba(0,255,153,0.08)]">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-[#00FF99]">TALENT MAP: USA &bull; CHICAGO</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#00FF99] font-bold uppercase">Midwest Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">NLP Engineer<br/><span className="text-[#8E9AA7] text-xs font-normal">Financial Services Firm</span></p>
                  <span className="inline-block bg-[#00FF99] text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-3">PLACED IN 3 DAYS</span>
                </div>
              </div>

              {/* SEATTLE */}
              <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-5 space-y-4 relative z-10 hover:border-[#00FF99]/30 transition-colors shadow-[0_20px_60px_rgba(0,255,153,0.08)]">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-[#00FF99]">TALENT MAP: USA &bull; SEATTLE</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#00FF99] font-bold uppercase">Pacific NW Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">Computer Vision Engineer<br/><span className="text-[#8E9AA7] text-xs font-normal">Retail Tech Company</span></p>
                  <span className="inline-block bg-[#00FF99] text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded mt-3">PLACED IN 7 DAYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-syncopate uppercase text-2xl sm:text-4xl font-bold text-white tracking-wide">
              Engineered for Core Industries
            </h2>
            <p className="text-[#D8DEE5] text-sm">
              We deliver specialized AI skillsets tailored to the domain logic of specific industrial segments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">Finance & Fintech</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Fraud classification models, algorithmic risk analysis, predictive modeling.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">Healthcare</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Clinical NLP summaries, segmenting medical imaging data, HIPAA-compliant training.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">Retail & E-comm</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Recommendation engines, demand forecasting, visual search, inventory optimization.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">Manufacturing</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Predictive maintenance, quality inspection computer vision, supply chain optimization.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">Legal Tech</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Document summarization, semantic search, contract analytics, automated compliance.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">EdTech</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Personalized learning paths, automated grading assistance, conversational study buddies.</p>
              </div>
            </div>
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between group hover:border-[#00FF99]/30 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-exo-2 text-sm font-bold text-white/90">SaaS</h4>
                <p className="text-[11px] text-[#8E9AA7] mt-2">Generative agents, internal vector knowledge bases, conversational user interfaces.</p>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] text-white p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 group transition-all duration-500 hover:-translate-y-1 hover:border-[#00FF99]/30">
            {/* Glowing Core Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_60%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-2 text-center md:text-left z-10 relative">
              <h3 className="font-syncopate uppercase text-xl font-bold text-white tracking-wide">Your Gateway to AI Excellence</h3>
              <p className="text-sm text-[#8E9AA7] max-w-xl">
                Whether you're building a world-class AI team or seeking your next big career move, partner with AI VINE to make it happen. Reach out to connect with us.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF99] text-[#000000] font-bold rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] glossy-btn z-10 shrink-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
