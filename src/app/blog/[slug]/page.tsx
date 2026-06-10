"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { mockBlogPosts } from "../page";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export default function BlogPostDetailPage() {
  const { slug } = useParams();
  
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-root-mist pt-32 pb-16 flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-display text-2xl font-bold text-vine-forest">Article Not Found</h2>
        <p className="text-xs text-muted-foreground mt-2 mb-6">The article slug requested does not exist or has been moved.</p>
        <Link href="/blog" className="px-4 py-2 bg-vine-green text-root-cream text-xs font-semibold rounded-vine">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-6">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-vine-green transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
        </Link>

        {/* Article Meta */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-grape-indigo/10 text-grape-indigo px-2.5 py-0.5 rounded uppercase">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-vine-forest tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Authorship & Metrics */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border py-4">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-vine-green text-white flex items-center justify-center font-bold text-[10px]">
                AV
              </div>
              <span className="font-semibold text-vine-forest">AI VINE Editorial</span>
            </div>
            
            <div className="flex gap-3 font-semibold font-mono text-[10px] uppercase">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        <p className="text-base text-vine-forest/90 font-medium leading-relaxed border-l-2 border-l-vine-sage pl-4 italic">
          {post.excerpt}
        </p>

        {/* Article Body */}
        <div className="prose prose-vine max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6">
          <p>{post.content}</p>
          <p>
            Deploying AI workloads at scale is not merely a software problem—it requires tight coordination between infrastructure configurations, data ingestion pipes, and mathematical model evaluations. Many projects fall into the trap of treating AI systems like standard REST services, ignoring the unique profiling demands of GPU allocations, vector space latency, and caching strategies.
          </p>
          <p>
            At AI VINE, our teams work across our offices in San Francisco and Hyderabad to build, optimize, and scale these pipelines. By establishing pre-vetted assessments and direct technical screening, we ensure our clients skip recruitment friction and work immediately with developers who understand production environments.
          </p>
          <p>
            In future posts, we will dive deeper into fine-tuning parameters, comparative analysis of vector index designs, and custom Kubernetes configurations for large-scale embeddings. Subscribe to our newsletter to receive technical breakdowns directly in your inbox.
          </p>
        </div>

        {/* Share Section */}
        <div className="border-t border-border pt-6 flex justify-between items-center text-xs text-muted-foreground">
          <span>Published by AI VINE Editorial. All rights reserved.</span>
          <button className="flex items-center gap-1 hover:text-vine-green transition-colors">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>

      </div>
    </article>
  );
}
