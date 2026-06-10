"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, ArrowRight } from "lucide-react";

export default function TrainingPage() {
  const bootcamps = [
    {
      title: "Machine Learning Systems Engineering",
      duration: "12 Weeks",
      level: "Intermediate",
      summary: "Master classical ML, deep learning foundations, and pipelines. Focus on PyTorch models, GPU scaling, feature stores, and REST API deployment strategies.",
      modules: ["PyTorch & TensorFlow Foundations", "Classical ML Pipelines", "Dataflow & Feature Store Ingestion", "FastAPI Inference Serving"],
    },
    {
      title: "Generative AI & LLM Systems",
      duration: "8 Weeks",
      level: "Advanced",
      summary: "Deep dive into Transformer models, pretraining math, fine-tuning structures, and semantic search integration. Learn to design production-grade RAG pipelines.",
      modules: ["Transformer Architecture Details", "Supervised Fine-Tuning (SFT & PEFT)", "RAG & Vector Database Architecture", "Evaluation & Guardrails (Ragas, Guardrails)"],
    },
    {
      title: "MLOps & Cloud Infrastructure",
      duration: "10 Weeks",
      level: "Advanced",
      summary: "Scale your inference. Build infrastructure frameworks using Kubernetes, Docker, and automation pipelines. Focus on automated retraining and model drift monitoring.",
      modules: ["Docker & Kubernetes Setup", "CI/CD for Machine Learning (GitLab)", "Orchestration (Airflow, Kubeflow)", "Monitoring & Model Drift Tracking"],
    },
  ];

  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            AI VINE Academy
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            Nurturing Elite AI Engineering Talent
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our intensive curricula bridge the gap between academic math and production deployment. We train software engineers and computational graduates to compile, train, scale, and monitor real-world AI systems.
          </p>
        </div>

        {/* Bootcamps Listing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bootcamps.map((camp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card p-6 border border-vine-green/10 shadow-sm hover:shadow-md hover:border-vine-green/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-grape-indigo">
                  <span className="bg-grape-indigo/10 px-2 py-0.5 rounded">{camp.level}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {camp.duration}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-vine-forest">{camp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{camp.summary}</p>
                
                <hr className="border-vine-green/10" />

                {/* Modules list */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">Syllabus Breakdown</span>
                  <ul className="space-y-1.5">
                    {camp.modules.map((mod, modIdx) => (
                      <li key={modIdx} className="text-xs text-vine-forest flex items-start gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-vine-green shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hyderabad Classroom Banner */}
        <div className="bg-vine-forest text-root-cream rounded-card p-8 sm:p-12 border border-vine-green/20 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-vine-sage/10 blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded-full text-xs font-semibold font-mono uppercase text-vine-sage border border-white/10">
                <MapPin className="w-3.5 h-3.5" /> Hyderabad Training Hub
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-root-cream leading-tight">
                Classroom Bootcamps in HITEC City
              </h2>
              <p className="text-xs sm:text-sm text-root-cream/70 leading-relaxed">
                Our physical facility in Madhapur, Hyderabad, TS offers hands-on classroom training, GPU workstation clusters, and peer programming networks. Work directly with experienced mentors to solve pipeline failure scripts, prepare for technical screenings, and secure placement roles.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-card p-6 space-y-4">
              <h4 className="font-mono text-xs font-bold text-vine-sage uppercase tracking-widest">Placements & Eligibility</h4>
              <ul className="space-y-2 text-xs text-root-cream/80">
                <li className="flex gap-2">
                  <span className="text-vine-sage font-bold font-mono">&bull;</span>
                  <span><strong>Eligibility:</strong> Open to software engineers, CS/IT engineering graduates, and data analysts.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-vine-sage font-bold font-mono">&bull;</span>
                  <span><strong>Assessments:</strong> Regular pipeline builds verify that candidates qualify for the unmasked AI VINE placement pool.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-vine-sage font-bold font-mono">&bull;</span>
                  <span><strong>Job Placement:</strong> USA-based corporate projects, offshore development contract gigs, and local IT opportunities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-xs text-muted-foreground">Ready to start the assessment and training program?</p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 bg-vine-green hover:bg-vine-green/95 text-root-cream font-semibold rounded-vine px-6 py-3.5 text-sm transition-all duration-300 shadow hover:shadow-md"
          >
            Apply to Academy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
