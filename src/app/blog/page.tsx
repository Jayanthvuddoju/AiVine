"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5" /> AI VINE INSIGHTS
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            AI Staffing & Systems Engineering Blog
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Read technical articles, interview preparation guides, and enterprise recruiting summaries from our engineering team.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center gap-2 flex-wrap border-b border-vine-green/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-colors ${
                selectedCat === cat
                  ? "bg-vine-green text-root-cream"
                  : "bg-card border border-border text-muted-foreground hover:border-vine-green hover:text-vine-green"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-card rounded-card p-6 border border-vine-green/10 shadow-sm hover:shadow-md hover:border-vine-green/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-vine-green">
                  <span className="bg-vine-green/10 px-2.5 py-0.5 rounded">{post.category}</span>
                  <div className="flex gap-3 text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-vine-forest hover:text-vine-green transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-vine-green hover:underline group"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
