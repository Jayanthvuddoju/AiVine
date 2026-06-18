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
      {/* Global Lightfall Background - Hidden behind Hero because Hero has solid background */}
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-40">
        <Lightfall
          colors={['#6567b3', '#ffffff', '#15164f']}
          backgroundColor="#000208"
          speed={0.4}
          streakCount={6}
          streakWidth={0.3}
          streakLength={1.5}
          glow={0.7}
          density={0.3}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.75}
        />
      </div>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000208] z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-20 md:-top-20"
          fill="#4da6ff"
        />

        <div className="flex w-full h-screen">
          {/* Left — text content */}
          <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-20 relative z-10 pt-28">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left space-y-4 max-w-xl"
            >
              {/* Display Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-elianto text-4xl sm:text-5xl md:text-[4.125rem] font-bold tracking-tight text-[#f7f7f7] leading-[1.08] drop-shadow-sm"
              >
                Where AI Talent <br />
                Takes Root And <br />
                <span className="text-[#2078cf] relative">
                  Innovation Grows
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-neutral-300 max-w-lg leading-relaxed"
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
                  className="w-full sm:w-auto px-6 py-3 bg-vine-green text-white font-semibold rounded-vine hover:bg-vine-green/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
                >
                  Hire AI Talent
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/join"
                  className="w-full sm:w-auto px-6 py-3 border border-[#f7f7f7]/30 text-[#f7f7f7] font-medium rounded-vine hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
                >
                  Join the Network
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Spline 3D Robot */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="py-24 bg-transparent relative z-10 border-y border-vine-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16 relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,120,207,0.15)_0%,transparent_70%)] blur-2xl -z-10" />
            
            <div className="text-center space-y-8 heavy-frost-glass p-8 md:p-14 border border-white/10 relative group hover:border-vine-green/30 transition-colors duration-500 shadow-[0_0_40px_-20px_rgba(32,120,207,0.3)]">
              {/* Top gradient highlight */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-vine-green to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4">
                <p className="font-display text-3xl sm:text-5xl font-bold text-white drop-shadow-sm">
                  Cultivating Growth and <span className="text-transparent bg-clip-text bg-gradient-to-r from-vine-green to-[#4da6ff]">Connection</span>
                </p>
              </div>

              <div className="pt-4 space-y-6">
                <p className="text-xl sm:text-2xl font-medium text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
                  Whether you're building an AI team or launching your AI career, we provide a unified gateway to success.
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-vine-green/50 to-transparent mx-auto" />
                <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-4xl mx-auto">
                  Finding the right AI talent shouldn't feel like a gamble — and landing the right opportunity shouldn't feel like a long shot. We go deep on both sides of every placement: understanding what companies truly need, and what candidates are genuinely capable of. The result is matches that stick, teams that grow, and careers that take root.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-24 bg-transparent relative z-10 border-t border-vine-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Process Workflow</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Two Paths, One Vine
            </h2>
            <p className="text-white/80 text-sm">
              We streamline recruitment workflows for vendors, while nurturing career opportunities for talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Path A: For Companies */}
            <div className="bg-[#010a1f] rounded-card p-8 border border-vine-green/40 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(32,120,207,0.5)] group hover:shadow-[0_0_80px_-10px_rgba(32,120,207,0.7)] transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,120,207,0.4)_0%,transparent_60%)] animate-pulse pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                <h3 className="font-display text-2xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  <span className="text-xs font-mono bg-vine-green text-root-cream px-2 py-1 rounded-full">For Companies</span>
                  Hiring Pipeline
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-green drop-shadow-[0_0_8px_rgba(32,120,207,0.8)]">01</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Share requirement</h4>
                      <p className="text-sm text-white/70 mt-1">Submit your specific AI talent needs and technical requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-green drop-shadow-[0_0_8px_rgba(32,120,207,0.8)]">02</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">We match candidates</h4>
                      <p className="text-sm text-white/70 mt-1">Our system scans our vetted talent pool to find professionals perfectly aligned with your stack.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-green drop-shadow-[0_0_8px_rgba(32,120,207,0.8)]">03</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Interview shortlist</h4>
                      <p className="text-sm text-white/70 mt-1">Review a curated list of top-tier matches and conduct direct technical interviews.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-green drop-shadow-[0_0_8px_rgba(32,120,207,0.8)]">04</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Hire</h4>
                      <p className="text-sm text-white/70 mt-1">Finalize contracts seamlessly and onboard your new AI engineers to start building immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Path B: For Candidates */}
            <div className="bg-[#010a1f] rounded-card p-8 border border-vine-sage/40 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(14,78,178,0.5)] group hover:shadow-[0_0_80px_-10px_rgba(14,78,178,0.7)] transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,78,178,0.4)_0%,transparent_60%)] animate-pulse pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                <h3 className="font-display text-2xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  <span className="text-xs font-mono bg-vine-sage text-white px-2 py-1 rounded-full">For Candidates</span>
                  Career Pathway
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-sage drop-shadow-[0_0_8px_rgba(14,78,178,0.8)]">01</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Submit profile</h4>
                      <p className="text-sm text-white/70 mt-1">Share your experience, technical portfolio, and career goals with our dedicated talent team.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-sage drop-shadow-[0_0_8px_rgba(14,78,178,0.8)]">02</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Skill verification</h4>
                      <p className="text-sm text-white/70 mt-1">Complete our rigorous technical assessments to prove your capabilities in real-world scenarios.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-sage drop-shadow-[0_0_8px_rgba(14,78,178,0.8)]">03</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Enter active pool</h4>
                      <p className="text-sm text-white/70 mt-1">Join our exclusive network of pre-vetted AI professionals visible to premium enterprise clients.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-bold text-vine-sage drop-shadow-[0_0_8px_rgba(14,78,178,0.8)]">04</span>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-sm">Get placed</h4>
                      <p className="text-sm text-white/70 mt-1">Receive tailored offers and land high-impact roles that match your career trajectory.</p>
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
                <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Why AI VINE</span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                  Organic Connections. Accelerated Scale.
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {"Like a vine, AI VINE thrives on integration, growth, and structural strength. We don't just search keyword match lists. We evaluate our candidate pool technically through rigorous assessments, ensuring you bypass filters and secure top talent."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Active Network</h4>
                    <p className="text-xs text-white/70 mt-1">500+ AI professionals in our active talent network ready for deployment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Proven Placements</h4>
                    <p className="text-xs text-white/70 mt-1">Proven placements and operations across USA.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-sage/10 flex items-center justify-center text-vine-green shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">7-Day Hiring</h4>
                    <p className="text-xs text-white/70 mt-1">Average time-to-hire of just 7 business days for vetted candidates.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Key Roles Filled</h4>
                    <p className="text-xs text-white/70 mt-1">ML Engineers, NLP Specialists, AI PMs, Data Engineers, LLM Devs, CV Engineers, AI Trainers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Box Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-vine-green/20 to-vine-green/5 rounded-card blur-3xl transform rotate-3" />
              
              {/* NYC */}
              <div className="liquid-glass p-5 rounded-2xl space-y-4 relative z-10 border border-white/10 hover:border-vine-green/30 transition-colors shadow-lg">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-vine-green">TALENT MAP: USA &bull; NYC</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-vine-green font-bold uppercase">Northeast Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">Senior Data Scientist<br/><span className="text-white/60 text-xs font-normal">Healthcare AI Startup</span></p>
                  <span className="inline-block bg-vine-green text-white text-[9px] font-mono px-2 py-0.5 rounded mt-3">PLACED IN 5 DAYS</span>
                </div>
              </div>

              {/* AUSTIN */}
              <div className="liquid-glass p-5 rounded-2xl space-y-4 relative z-10 border border-white/10 hover:border-vine-green/30 transition-colors shadow-lg">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-vine-green">TALENT MAP: USA &bull; AUSTIN</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-vine-green font-bold uppercase">South Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">AI Product Manager<br/><span className="text-white/60 text-xs font-normal">Legal Tech Platform</span></p>
                  <span className="inline-block bg-vine-sage text-white text-[9px] font-mono px-2 py-0.5 rounded mt-3">PLACED IN 6 DAYS</span>
                </div>
              </div>

              {/* CHICAGO */}
              <div className="liquid-glass p-5 rounded-2xl space-y-4 relative z-10 border border-white/10 hover:border-vine-green/30 transition-colors shadow-lg">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-vine-green">TALENT MAP: USA &bull; CHICAGO</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-vine-green font-bold uppercase">Midwest Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">NLP Engineer<br/><span className="text-white/60 text-xs font-normal">Financial Services Firm</span></p>
                  <span className="inline-block bg-vine-green text-white text-[9px] font-mono px-2 py-0.5 rounded mt-3">PLACED IN 3 DAYS</span>
                </div>
              </div>

              {/* SEATTLE */}
              <div className="liquid-glass p-5 rounded-2xl space-y-4 relative z-10 border border-white/10 hover:border-vine-green/30 transition-colors shadow-lg">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-semibold text-vine-green">TALENT MAP: USA &bull; SEATTLE</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-vine-green font-bold uppercase">Pacific NW Placements</p>
                  <p className="text-sm font-semibold text-white/90 mt-1 leading-snug">Computer Vision Engineer<br/><span className="text-white/60 text-xs font-normal">Retail Tech Company</span></p>
                  <span className="inline-block bg-vine-sage text-white text-[9px] font-mono px-2 py-0.5 rounded mt-3">PLACED IN 7 DAYS</span>
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
            <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Sectors Served</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Engineered for Core Industries
            </h2>
            <p className="text-white/80 text-sm">
              We deliver specialized AI skillsets tailored to the domain logic of specific industrial segments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">Finance & Fintech</h4>
                <p className="text-[11px] text-white/50 mt-2">Fraud classification models, algorithmic risk analysis, predictive modeling.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">Healthcare</h4>
                <p className="text-[11px] text-white/50 mt-2">Clinical NLP summaries, segmenting medical imaging data, HIPAA-compliant training.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">Retail & E-comm</h4>
                <p className="text-[11px] text-white/50 mt-2">Recommendation engines, demand forecasting, visual search, inventory optimization.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">Manufacturing</h4>
                <p className="text-[11px] text-white/50 mt-2">Predictive maintenance, quality inspection computer vision, supply chain optimization.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">Legal Tech</h4>
                <p className="text-[11px] text-white/50 mt-2">Document summarization, semantic search, contract analytics, automated compliance.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">EdTech</h4>
                <p className="text-[11px] text-white/50 mt-2">Personalized learning paths, automated grading assistance, conversational study buddies.</p>
              </div>
            </div>
            <div className="liquid-glass p-4 flex flex-col justify-between group">
              <div className="relative z-10">
                <h4 className="font-display text-sm font-bold text-white/90">SaaS</h4>
                <p className="text-[11px] text-white/50 mt-2">Generative agents, internal vector knowledge bases, conversational user interfaces.</p>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-[#010a1f] text-white p-8 rounded-card border border-vine-green/40 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_0_60px_-15px_rgba(32,120,207,0.5)] group hover:shadow-[0_0_80px_-10px_rgba(32,120,207,0.7)] transition-all duration-500">
            {/* Glowing Core Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,120,207,0.4)_0%,transparent_60%)] animate-pulse pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-2 text-center md:text-left z-10 relative">
              <h3 className="font-display text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Your Gateway to AI Excellence</h3>
              <p className="text-sm text-white/70 max-w-xl">
                Whether you're building a world-class AI team or seeking your next big career move, partner with AI VINE to make it happen. Reach out to connect with us.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full md:w-auto px-6 py-3 bg-vine-green hover:bg-vine-green/90 text-background font-semibold rounded-vine transition-colors z-10 text-center flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
