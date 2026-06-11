"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Download, CircleUserRound, Server, LayoutTemplate, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

interface RequestProfileModalProps {
  candidateId: string | null;
  onClose: () => void;
}

export default function RequestProfileModal({ candidateId, onClose }: RequestProfileModalProps) {
  if (!candidateId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-root-mist/80 backdrop-blur-sm"
      />

      {/* Modal Container - Wide Dashboard */}
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-grape-indigo w-full max-w-6xl rounded-xl shadow-2xl border border-vine-sage/30 overflow-hidden z-10 flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-vine-sage/20 bg-grape-indigo">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-vine-sage/30">
               <CircleUserRound className="w-8 h-8 text-vine-forest" />
             </div>
             <div>
               <h2 className="font-display text-2xl font-bold text-vine-forest flex items-center gap-2">
                 Alex Chen (Operations Architecture)
               </h2>
               <p className="text-sm text-vine-forest/80 font-mono">Candidate Delivery Portfolio</p>
             </div>
           </div>

           <div className="mt-4 md:mt-0 flex gap-2">
             <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-vine-green text-root-mist text-xs font-bold hover:opacity-90 transition-opacity">
               <Server className="w-4 h-4" /> Cloud Engineering
             </button>
             <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-vine-sage/50 text-vine-forest hover:bg-vine-sage/20 text-xs font-semibold transition-colors">
               <LayoutTemplate className="w-4 h-4 text-vine-forest" /> Enterprise Apps
             </button>
             <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-vine-sage/50 text-vine-forest hover:bg-vine-sage/20 text-xs font-semibold transition-colors">
               <BrainCircuit className="w-4 h-4 text-vine-green" /> AI/ML Projects
             </button>
           </div>
           
           <button
             onClick={onClose}
             className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-vine-sage/20 text-vine-forest transition-colors"
             aria-label="Close modal"
           >
             <X className="w-5 h-5" />
           </button>
        </div>

        {/* Content area scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Column 1: Tech Stack */}
              <div className="bg-card rounded-xl p-5 border border-vine-sage/20 shadow-lg">
                 <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-vine-forest/70 mb-4">Technology Stack Proficiency (Production Depth)</h3>
                 
                 <div className="space-y-4">
                    {[
                      { name: "AWS Ecosystem", value: 92, color: "bg-vine-green" },
                      { name: "Azure Cloud", value: 88, color: "bg-vine-sage" },
                      { name: "Kubernetes/Docker", value: 85, color: "bg-blue-400" },
                      { name: "Python (AI/ML)", value: 80, color: "bg-yellow-400" },
                      { name: "Node.js/React", value: 75, color: "bg-green-400" },
                      { name: "Go/Microservices", value: 70, color: "bg-cyan-400" },
                      { name: "Terraform (IaC)", value: 85, color: "bg-purple-400" },
                    ].map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1 font-semibold text-vine-forest">
                          <span>{skill.name}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-root-mist rounded-full overflow-hidden">
                          <div className={`h-full ${skill.color}`} style={{ width: `${skill.value}%` }} />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Column 2: Donut Chart */}
              <div className="bg-card rounded-xl p-5 border border-vine-sage/20 shadow-lg flex flex-col items-center">
                 <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-vine-forest/70 mb-4 w-full text-left">Cloud Native & DevOps Implementation</h3>
                 
                 <div className="relative w-48 h-48 my-auto">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#000521" strokeWidth="15" />
                       {/* Cloud Migration 35% */}
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2078CF" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.35)} />
                       {/* Architecture & IaC 25% */}
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0E4EB2" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.25)} transform="rotate(126 50 50)" />
                       {/* CI/CD Pipelines 20% */}
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#60A5FA" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.20)} transform="rotate(216 50 50)" />
                       {/* Observability & Scaling 10% */}
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.10)} transform="rotate(288 50 50)" />
                       {/* Security & Compliance 10% */}
                       <circle cx="50" cy="50" r="40" fill="transparent" stroke="#93C5FD" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.10)} transform="rotate(324 50 50)" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-3xl font-bold text-vine-forest">85%</span>
                       <span className="text-[10px] text-vine-forest/70 uppercase font-mono tracking-wider">Cloud Native</span>
                    </div>
                 </div>

                 {/* Legend */}
                 <div className="w-full grid grid-cols-2 gap-2 mt-4 text-[10px] font-semibold text-vine-forest">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#2078CF]"/> Cloud Migration</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#0E4EB2]"/> Architecture & IaC</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#60A5FA]"/> CI/CD Pipelines</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#3B82F6]"/> Observability</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#93C5FD]"/> Security & Comp.</div>
                 </div>
              </div>

              {/* Column 3: Timeline */}
              <div className="bg-card rounded-xl p-5 border border-vine-sage/20 shadow-lg">
                 <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-vine-forest/70 mb-4">Velocity & Experience Timeline</h3>
                 
                 <div className="relative border-l-2 border-vine-sage/30 ml-3 space-y-6 pt-2 pb-2">
                    {[
                      { year: "2023 - Present", title: "Operations Management", desc: "Led team of 15 engineers, improved deployment frequency by 400%." },
                      { year: "2021 - 2023", title: "AI Integration & Data Pipelines", desc: "Built scalable data processing architecture handling 5TB/day." },
                      { year: "2019 - 2021", title: "AWS Cloud Migration", desc: "Migrated legacy monolith to AWS microservices (EKS, RDS)." },
                    ].map((item, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-card border-4 border-vine-green" />
                        <div className="text-[10px] font-bold text-vine-green mb-1">{item.year}</div>
                        <div className="text-sm font-bold text-vine-forest">{item.title}</div>
                        <div className="text-xs text-vine-forest/70 mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Delivery Highlights */}
           <div className="bg-card rounded-xl p-5 border border-vine-sage/20 shadow-lg">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-vine-forest/70 mb-4">Delivery Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[
                   "Kubernetes Cluster optimization (30% cost reduction)",
                   "Automated CI/CD pipelines deployment",
                   "Multi-region AWS architecture design",
                   "Zero-downtime database migrations",
                   "Implement zero-trust security model",
                   "Infrastructure as Code adoption",
                   "Microservices architecture transition",
                   "Cloud-native observability stack"
                 ].map((text, i) => (
                   <div key={i} className="flex items-start gap-2">
                     <CheckCircle2 className="w-4 h-4 text-vine-green shrink-0 mt-0.5" />
                     <span className="text-xs font-semibold text-vine-forest/90 leading-snug">{text}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-vine-sage/20 bg-grape-indigo/80 flex justify-between items-center">
           <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vine-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-vine-green"></span>
              </span>
              <span className="text-[11px] text-vine-forest/80 font-mono tracking-wider uppercase">Active Session</span>
           </div>
           
           <button className="flex items-center gap-2 px-5 py-2.5 bg-vine-green hover:bg-vine-green/90 text-root-mist text-xs font-bold rounded-lg transition-colors shadow-lg">
              <Download className="w-4 h-4" /> Download ATS-Safe PDF
           </button>
        </div>
      </motion.div>
    </div>
  );
}
