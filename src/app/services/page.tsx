"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Settings, LineChart, Code, Shield, Network, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      icon: <Cpu className="w-6 h-6 text-vine-green" />,
      title: "LLM Finetuning & Alignment",
      description: "Adapt open-weights models (Llama, Mistral, Qwen) to your domain specific vocabulary. We manage custom dataset preparation, Supervised Fine-Tuning (SFT), and Alignment (DPO/RLHF) workflows.",
    },
    {
      icon: <Network className="w-6 h-6 text-grape-indigo" />,
      title: "Custom MLOps Pipelines",
      description: "Build robust orchestration systems for training, testing, and shipping models. We automate tracking, drift monitoring, and auto-scaling GPU environments using Kubernetes, MLflow, and Kubeflow.",
    },
    {
      icon: <Settings className="w-6 h-6 text-vine-green" />,
      title: "RAG & Knowledge Bases",
      description: "Implement high-fidelity Retrieval-Augmented Generation (RAG) structures using vector databases (Pinecone, Qdrant, Chroma). Reduce hallucination through semantic search and custom reranking models.",
    },
    {
      icon: <Code className="w-6 h-6 text-grape-indigo" />,
      title: "Enterprise Data Pipelines",
      description: "Clean, model, and feed your feature stores. We design low-latency streaming and batch ingest systems using Apache Spark, Kafka, Snowflake, and dbt to back your analytics and model layers.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-vine-green" />,
      title: "AI Integration & Advisory",
      description: "Develop a robust AI roadmap. We evaluate compute options, conduct feasibility studies, and prototype model pipelines to ensure your AI investments yield business outcomes.",
    },
    {
      icon: <Shield className="w-6 h-6 text-grape-indigo" />,
      title: "Model Governance & Compliance",
      description: "Secure your inference channels. We implement guardrails, red-teaming validations, data sanitization, and lineage audit trails, satisfying enterprise security guidelines.",
    },
  ];

  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            Enterprise Solutions
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            Deploy Production AI Systems
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We do more than staff candidates. Our systems engineering division builds and integrates custom machine learning, data engineering, and generative systems into your enterprise architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card p-6 border border-vine-green/10 shadow-sm hover:shadow-md hover:border-vine-green/20 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-vine bg-root-cream/50 flex items-center justify-center">
                  {svc.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-vine-forest">{svc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Model Callout */}
        <div className="bg-root-cream rounded-card border border-vine-green/10 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-vine-forest leading-snug">
                Dual-Shore Systems Delivery
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our hybrid delivery architecture guarantees efficiency and quality. Get local systems architects and project leads stationed in the USA, backed by dedicated development clusters in Hyderabad, India to optimize build speed and control budget constraints.
              </p>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-2.5 rounded-vine border border-vine-green/5 text-center flex-1">
                  <p className="font-bold text-vine-green text-sm">US Architects</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Design & Lead</p>
                </div>
                <div className="bg-white px-4 py-2.5 rounded-vine border border-vine-green/5 text-center flex-1">
                  <p className="font-bold text-grape-indigo text-sm">India Hub</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Build & scale</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-card border border-vine-green/5 p-6 shadow-sm space-y-6">
              <h4 className="font-mono text-xs font-bold text-vine-green uppercase">Typical Engagement Path</h4>
              
              <div className="space-y-4 text-xs text-vine-forest">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0">1</span>
                  <div>
                    <strong className="block text-sm">Discovery & Scope</strong>
                    Assess requirements, select models, and map ingestion patterns.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0">2</span>
                  <div>
                    <strong className="block text-sm">MVP Pipeline Build</strong>
                    Train model components and deploy mock API endpoints.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-vine-green text-root-cream flex items-center justify-center shrink-0">3</span>
                  <div>
                    <strong className="block text-sm">Deployment & Handoff</strong>
                    Automate training, configure monitoring, and transfer codebase.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-vine-green hover:bg-vine-green/95 text-root-cream font-semibold rounded-vine px-6 py-3.5 text-sm transition-all duration-300 shadow hover:shadow-md"
          >
            Discuss a Systems Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
