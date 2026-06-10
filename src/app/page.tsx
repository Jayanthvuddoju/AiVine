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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden bg-root-mist">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/HeroBg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-8 max-w-4xl mr-auto"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vine-sage/20 border border-vine-sage/35 text-vine-sage text-xs font-semibold font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Cultivating Elite AI Teams
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-sm"
            >
              The Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-vine-sage to-grape-light relative">
                AI Talent Vine
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              We vet, nurture, and connect outstanding Artificial Intelligence talent with forward-thinking enterprises. Scale your engineering seamlessly across the USA and India.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-4"
            >
              <Link
                href="/talent"
                className="w-full sm:w-auto px-8 py-4 bg-vine-sage text-vine-forest font-semibold rounded-vine hover:bg-vine-sage/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Browse Talent Pool
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/hire"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-white/10 text-white font-medium rounded-vine hover:border-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Hire AI Developers
              </Link>
            </motion.div>

            {/* Stats Summary & Locations */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/20 max-w-3xl mr-auto"
            >
              <div className="text-left py-2 pr-4">
                <p className="font-display text-3xl font-bold text-vine-sage">100%</p>
                <p className="text-xs font-mono uppercase tracking-wider text-white/70 mt-1">Pre-Vetted Technical Skills</p>
              </div>
              <div className="text-left py-2 pr-4">
                <p className="font-display text-3xl font-bold text-grape-light">48h</p>
                <p className="text-xs font-mono uppercase tracking-wider text-white/70 mt-1">Average Match Time</p>
              </div>
              <div className="text-left col-span-2 md:col-span-1 py-2 pr-4">
                <p className="font-display text-3xl font-bold text-white">Dual-Shore</p>
                <p className="text-xs font-mono uppercase tracking-wider text-white/70 mt-1">San Francisco & Hyderabad</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="py-24 bg-root-cream relative border-y border-vine-green/10">
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
            <div className="bg-white rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-vine-green/10 flex items-center justify-center text-vine-green group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">AI & IT Staffing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Augment your teams with elite AI, ML, Data, and Cloud engineering professionals. Contract, full-time, or contract-to-hire engagement models built around your constraints.
                </p>
              </div>
              <Link href="/hire" className="mt-8 flex items-center gap-1 text-sm font-semibold text-vine-green group-hover:underline">
                Hire Talent <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Enterprise Solutions */}
            <div className="bg-white rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-grape-indigo/10 flex items-center justify-center text-grape-indigo group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">Enterprise AI Solutions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We deploy systems. From LLM fine-tuning and retrieval-augmented generation (RAG) pipelines to custom MLOps orchestration, we deliver ready-to-run systems.
                </p>
              </div>
              <Link href="/services" className="mt-8 flex items-center gap-1 text-sm font-semibold text-grape-indigo group-hover:underline">
                Explore Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Academy */}
            <div className="bg-white rounded-card p-8 border border-vine-green/5 hover:border-vine-green/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-vine bg-harvest-gold/10 flex items-center justify-center text-harvest-gold group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-vine-forest">AI Placement & Training</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nurturing the next generation of engineers. Our specialized curricula train graduates and professionals on production-grade machine learning pipelines, ensuring they are placement-ready.
                </p>
              </div>
              <Link href="/training" className="mt-8 flex items-center gap-1 text-sm font-semibold text-vine-green group-hover:underline">
                Learn Academy <ChevronRight className="w-4 h-4" />
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
                <span className="font-mono text-xs font-bold tracking-widest text-grape-indigo uppercase">Why AI VINE</span>
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
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Deeply Vetted</h4>
                    <p className="text-xs text-muted-foreground mt-1">Every candidate passes a hands-on technical validation covering theory and pipeline setup.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-grape-indigo/10 flex items-center justify-center text-grape-indigo shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Dual-Shore Support</h4>
                    <p className="text-xs text-muted-foreground mt-1">Operate with native representatives in San Francisco, alongside direct pipelines in Hyderabad.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-vine-sage/10 flex items-center justify-center text-vine-green shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Frictionless Hiring</h4>
                    <p className="text-xs text-muted-foreground mt-1">Direct scheduling, standard contract structures, and transparent payroll channels.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-harvest-gold/10 flex items-center justify-center text-vine-forest shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vine-forest text-sm">Growth Metaphor</h4>
                    <p className="text-xs text-muted-foreground mt-1">We maintain long-term placement mentoring to ensure candidate growth matches company scale.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-vine-green/20 to-grape-indigo/20 rounded-card blur-2xl transform rotate-3" />
              <div className="relative bg-white rounded-card p-8 border border-vine-green/10 shadow-lg space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <span className="font-mono text-xs font-semibold text-grape-indigo">TALENT MAP: HYDERABAD &bull; SF</span>
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
                    <p className="text-xs font-mono text-grape-indigo font-bold">HYDERABAD DEVELOPMENT HUB</p>
                    <p className="text-sm font-semibold text-vine-forest mt-1">Custom LLM Fine-Tuning - 4 ML Engineers</p>
                    <span className="inline-block bg-grape-indigo text-white text-[10px] font-mono px-2 py-0.5 rounded mt-2">TEAM DEPLOYED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-24 bg-root-cream border-t border-vine-green/10">
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
            <div className="bg-white rounded-card p-8 border border-vine-green/5 shadow-sm space-y-8">
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
            <div className="bg-white rounded-card p-8 border border-vine-green/5 shadow-sm space-y-8">
              <h3 className="font-display text-2xl font-bold text-grape-indigo border-b border-muted pb-4 flex items-center gap-2">
                <span className="text-xs font-mono bg-grape-indigo text-white px-2 py-1 rounded-full">For Candidates</span>
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
                    <p className="text-sm text-muted-foreground mt-1">Gain exposure to our premium USA and Indian clients, entering roles with pre-vetted trust signals.</p>
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
            <span className="font-mono text-xs font-bold tracking-widest text-grape-indigo uppercase">Sectors Served</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest">
              Engineered for Core Industries
            </h2>
            <p className="text-muted-foreground text-sm">
              We deliver specialized AI skillsets tailored to the domain logic of specific industrial segments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h4 className="font-display text-lg font-bold text-vine-forest">Finance & Fintech</h4>
              <p className="text-xs text-muted-foreground mt-2">Fraud classification models, algorithmic risk analysis, predictive modeling pipelines.</p>
            </div>
            <div className="p-6 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h4 className="font-display text-lg font-bold text-vine-forest">Healthcare</h4>
              <p className="text-xs text-muted-foreground mt-2">Clinical NLP summaries, segmenting medical imaging data, HIPAA-compliant model training.</p>
            </div>
            <div className="p-6 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h4 className="font-display text-lg font-bold text-vine-forest">Autonomous Systems</h4>
              <p className="text-xs text-muted-foreground mt-2">Real-time computer vision detection, ROS middleware setup, Edge AI optimizations.</p>
            </div>
            <div className="p-6 rounded-card border border-vine-green/5 bg-root-cream/30 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h4 className="font-display text-lg font-bold text-vine-forest">SaaS & Enterprise</h4>
              <p className="text-xs text-muted-foreground mt-2">Generative agents, internal vector knowledge bases, conversational user interfaces.</p>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-vine-forest text-root-cream p-8 rounded-card border border-vine-green/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left z-10">
              <h3 className="font-display text-2xl font-bold">Establish your AI Pipeline today</h3>
              <p className="text-sm text-root-cream/70 max-w-xl">
                Partner with AI VINE to hire engineering teams or develop tailored AI modules. Reach out to schedule a consultation.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full md:w-auto px-6 py-3 bg-vine-sage text-vine-forest font-semibold rounded-vine hover:bg-vine-sage/90 transition-colors z-10 text-center flex items-center justify-center gap-1.5 shrink-0"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
