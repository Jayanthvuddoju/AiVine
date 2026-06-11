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

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <div className="overflow-hidden ">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-12 pb-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none min-h-screen">
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-fill"
          >
            <source src="/HeroBg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-4 max-w-4xl mr-auto"
          >

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f7f7f7] leading-[1.08] drop-shadow-sm"
            >
              Where AI Talent <br />
              Takes Root and <br />
              <span className="text-[#2078cf] relative">
                Innovation Grows
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#f7f7f7] max-w-2xl leading-relaxed"
            >
              AI VINE connects exceptional AI professionals with ambitious organizations, creating a thriving ecosystem where talent, technology, and opportunity grow together.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-4"
            >
              <Link
                href="/hire"
                className="w-full sm:w-auto px-8 py-4 bg-vine-green text-white font-semibold rounded-vine hover:bg-vine-green/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Hire AI Talent
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/join"
                className="w-full sm:w-auto px-8 py-4 border border-[#f7f7f7]/30 text-[#f7f7f7] font-medium rounded-vine hover:border-[#f7f7f7] hover:bg-[#f7f7f7]/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Join the Network
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="py-24 bg-transparent relative border-y border-vine-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">
              Our Core Services
            </h2>
            <p className="font-display text-3xl sm:text-5xl font-bold text-vine-forest">
              Cultivating Growth and Connection
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Whether you need direct engineering support, product advisory, or tailored learning paths, we provide a unified gateway to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: IT Staffing */}
            <div className="bg-card rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-vine-green/10 flex items-center justify-center text-vine-green group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">🌿 AI Staffing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We source, screen, and place ML Engineers, Data Scientists, AI Product Managers, and more — on contract or full-time.
                </p>
              </div>
              <Link href="/hire" className="mt-8 flex items-center gap-1 text-sm font-semibold text-vine-green group-hover:underline">
                Find the right AI talent, fast <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Enterprise Solutions */}
            <div className="bg-card rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-vine-green/10 flex items-center justify-center text-vine-green group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">🌿 AI Services</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From strategy to deployment, our AI consultants help you integrate intelligence into your core operations.
                </p>
              </div>
              <Link href="/services" className="mt-8 flex items-center gap-1 text-sm font-semibold text-vine-green group-hover:underline">
                Build smarter with AI <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Academy */}
            <div className="bg-card rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-harvest-gold/10 flex items-center justify-center text-harvest-gold group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">🌿 AI Training</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured programs for students, professionals, and corporate teams to master AI tools and frameworks.
                </p>
              </div>
              <Link href="/training" className="mt-8 flex items-center gap-1 text-sm font-semibold text-vine-green group-hover:underline">
                Grow the next generation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why AI VINE Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Why AI VINE</span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest leading-tight">
                  Organic Connections. Accelerated Scale.
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {"Like a vine, AI VINE thrives on integration, growth, and structural strength. We don't just search keyword match lists. We evaluate our candidate pool technically through rigorous assessments, ensuring you bypass filters and secure top talent."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Active Network</h4>
                    <p className="text-xs text-muted-foreground mt-1">500+ AI professionals in our active talent network ready for deployment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Proven Placements</h4>
                    <p className="text-xs text-muted-foreground mt-1">Proven placements and operations across USA.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-sage/10 flex items-center justify-center text-vine-green shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">7-Day Hiring</h4>
                    <p className="text-xs text-muted-foreground mt-1">Average time-to-hire of just 7 business days for vetted candidates.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-green/10 flex items-center justify-center text-vine-green shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Key Roles Filled</h4>
                    <p className="text-xs text-muted-foreground mt-1">ML Engineers, NLP Specialists, AI PMs, Data Engineers, LLM Devs, CV Engineers, AI Trainers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-vine-green/20 to-vine-green/5 rounded-card blur-2xl transform rotate-3" />
              <div className="relative bg-card rounded-card p-8 border border-vine-green/10 shadow-lg space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <span className="font-mono text-xs font-semibold text-vine-green">TALENT MAP: USA &bull; SF</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-vine bg-root-cream/50 border border-vine-green/5">
                    <p className="text-xs font-mono text-vine-green font-bold">USA VENTURE PLACEMENTS</p>
                    <p className="text-sm font-semibold text-vine-forest mt-1">Senior MLOps Team - Fintech Scaleup</p>
                    <span className="inline-block bg-vine-green text-root-cream text-[10px] font-mono px-2 py-0.5 rounded mt-2">PLACED IN 3 DAYS</span>
                  </div>
                  <div className="p-4 rounded-vine bg-root-cream/50 border border-vine-green/5">
                    <p className="text-xs font-mono text-vine-green font-bold">WEST COAST DEVELOPMENT HUB</p>
                    <p className="text-sm font-semibold text-vine-forest mt-1">Custom LLM Fine-Tuning - 4 ML Engineers</p>
                    <span className="inline-block bg-vine-sage text-white text-[10px] font-mono px-2 py-0.5 rounded mt-2">TEAM DEPLOYED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-24 bg-transparent border-t border-vine-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Process Workflow</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest">
              Two Paths, One Vine
            </h2>
            <p className="text-muted-foreground text-sm">
              We streamline recruitment workflows for vendors, while nurturing career opportunities for talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Path A: For Companies */}
            <div className="bg-card rounded-card p-8 border border-vine-green/5 shadow-sm space-y-8">
              <h3 className="font-display text-2xl font-bold text-vine-green border-b border-muted pb-4 flex items-center gap-2">
                <span className="text-xs font-mono bg-vine-green text-root-cream px-2 py-1 rounded-full">For Companies</span>
                Hiring Pre-Vetted Talent
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-vine-sage">01</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Explore & Filter</h4>
                    <p className="text-sm text-muted-foreground mt-1">Browse our real-time [Anonymous Talent Pool](/talent) to select matching skillsets without initial filters.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-vine-sage">02</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Request Full Profiles</h4>
                    <p className="text-sm text-muted-foreground mt-1">Submit vendor details to unlock unmasked resumes, candidate portfolio histories, and vetted test transcripts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-vine-sage">03</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Interview & Deploy</h4>
                    <p className="text-sm text-muted-foreground mt-1">Run direct scheduling loops. Finalize contracts with transparent, managed employment channels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Path B: For Candidates */}
            <div className="bg-card rounded-card p-8 border border-vine-green/5 shadow-sm space-y-8">
              <h3 className="font-display text-2xl font-bold text-vine-green border-b border-muted pb-4 flex items-center gap-2">
                <span className="text-xs font-mono bg-vine-sage text-white px-2 py-1 rounded-full">For Candidates</span>
                Joining & Training Paths
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-grape-light">01</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Apply & Assess</h4>
                    <p className="text-sm text-muted-foreground mt-1">Submit your profile via [Join Talent](/join) and complete our standard technical evaluation scripts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-grape-light">02</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Train & Polish</h4>
                    <p className="text-sm text-muted-foreground mt-1">Join our specialized [AI Academy](/training) to bridge gaps in pipeline scaling and deep learning production design.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-lg font-bold text-grape-light">03</span>
                  <div>
                    <h4 className="font-bold text-vine-forest text-base">Placement Matching</h4>
                    <p className="text-sm text-muted-foreground mt-1">Gain exposure to our premium enterprise clients, entering roles with pre-vetted trust signals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold tracking-widest text-vine-green uppercase">Sectors Served</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest">
              Engineered for Core Industries
            </h2>
            <p className="text-muted-foreground text-sm">
              We deliver specialized AI skillsets tailored to the domain logic of specific industrial segments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">Finance & Fintech</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Fraud classification models, algorithmic risk analysis, predictive modeling.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">Healthcare</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Clinical NLP summaries, segmenting medical imaging data, HIPAA-compliant training.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">Retail & E-comm</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Recommendation engines, demand forecasting, visual search, inventory optimization.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">Manufacturing</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Predictive maintenance, quality inspection computer vision, supply chain optimization.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">Legal Tech</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Document summarization, semantic search, contract analytics, automated compliance.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">EdTech</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Personalized learning paths, automated grading assistance, conversational study buddies.</p>
            </div>
            <div className="p-4 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-vine-forest">SaaS</h4>
              <p className="text-[11px] text-muted-foreground mt-2">Generative agents, internal vector knowledge bases, conversational user interfaces.</p>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-grape-light text-vine-forest p-8 rounded-card border border-vine-green/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left z-10">
              <h3 className="font-display text-2xl font-bold text-white">Establish your AI Pipeline today</h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Partner with AI VINE to hire engineering teams or develop tailored AI modules. Reach out to schedule a consultation.
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
