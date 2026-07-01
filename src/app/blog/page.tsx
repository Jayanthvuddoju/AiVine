"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    slug: "demystifying-mlops-notebooks-to-production",
    title: "Demystifying MLOps: Transitioning Models from Jupyter Notebooks to Production",
    excerpt: "Why 80% of machine learning models fail to transition out of Jupyter Notebooks, and how to build automated training and deployment pipelines that scale.",
    date: "June 08, 2026",
    readTime: "6 min read",
    category: "MLOps",
    content: "Machine learning research usually begins in Jupyter Notebooks. It is a fantastic environment for data exploration, visualization, and rapid experimentation. However, the path from a working notebook to a production-grade inference service is fraught with issues. In this article, we outline the primary friction points—including dependency drift, feature mismatch, and inadequate performance monitoring—and provide a blueprint for constructing automated, git-triggered training and evaluation pipelines using MLflow and Docker.",
  },
  {
    slug: "why-technical-assessments-replace-resumes",
    title: "Why Technical Assessments are Replacing Resume Screening in AI Recruiting",
    excerpt: "AI buzzwords have rendered keyword resume screening obsolete. Discover how active coding builds and hands-on screening verify developer quality.",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "Recruitment",
    content: "The massive explosion of generative AI has led to an influx of candidates claiming expertise in machine learning. Recruiters are overwhelmed with resumes mentioning PyTorch, LangChain, and LLM fine-tuning. However, keyword matching fails to measure a candidate's actual architectural understanding or debug capability. We examine the shift towards sandbox-based assessments: requiring candidates to debug training loops, design API wrappers, or optimize GPU memory usage, proving capability before entering client interviews.",
  },
  {
    slug: "fine-tuning-vs-rag-enterprise-llm",
    title: "Fine-Tuning vs. RAG: Selecting the Right Architecture for Enterprise LLM Systems",
    excerpt: "A technical comparison of Retrieval-Augmented Generation (RAG) and Supervised Fine-Tuning (SFT) for adapting LLMs to company data.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Architecture",
    content: "When businesses deploy large language models, the immediate question is: how do we inject our proprietary data? The two main avenues are fine-tuning (modifying the weights of the model) and Retrieval-Augmented Generation (injecting relevant context dynamically). This guide compares the trade-offs of both approaches. We look at cost metrics, update frequencies, compliance constraints, and explain why a hybrid architecture (using PEFT for tone adaptation and semantic vector stores for factuality) is often the optimal path.",
  },
];

export default function BlogListingPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  
  const categories = ["All", "MLOps", "Recruitment", "Architecture", "Management"];

  const filteredPosts = selectedCat === "All"
    ? mockBlogPosts
    : mockBlogPosts.filter(p => p.category === selectedCat);

  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/GreenBg.png)' }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.8))' }}
        />
        <div className="absolute bottom-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,153,0.15),transparent_50%)] pointer-events-none" />
      </div>

      <div className="min-h-screen pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99]/20 text-[#00FF99] rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5" /> AI VINE INSIGHTS
            </span>
            <h1 className="font-nevera uppercase text-3xl sm:text-5xl font-bold text-white tracking-wide drop-shadow-md">
              AI Staffing & Systems Engineering Blog
            </h1>
            <p className="text-[#8E9AA7] text-sm leading-relaxed">
              Read technical articles, interview preparation guides, and enterprise recruiting summaries from our engineering team.
            </p>
          </motion.div>

          {/* Categories Bar */}
          <div className="flex justify-center gap-2 flex-wrap border-b border-white/[0.06] pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-all duration-300 ${
                  selectedCat === cat
                    ? "bg-[#00FF99] text-black shadow-[0_0_20px_rgba(0,255,153,0.4)]"
                    : "bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#8E9AA7] hover:border-[#00FF99]/30 hover:text-[#00FF99]"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Blog Posts List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-6 hover:border-[#00FF99]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Meta Row */}
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-[#00FF99]">
                    <span className="bg-[#00FF99]/10 px-2.5 py-0.5 rounded">{post.category}</span>
                    <div className="flex gap-3 text-[#8E9AA7] font-semibold">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-exo-2 text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF99] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-xs text-[#8E9AA7] leading-relaxed">{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-[#00FF99] hover:underline group"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
