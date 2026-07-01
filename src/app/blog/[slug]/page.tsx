"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { mockBlogPosts } from "../page";
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from "lucide-react";

export default function BlogPostDetailPage() {
  const { slug } = useParams();
  
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/GreenBg.png)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.8))' }} />
        </div>
        <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center p-4 relative z-10">
          <h2 className="font-syncopate uppercase text-2xl font-bold text-white tracking-wide">Article Not Found</h2>
          <p className="text-xs text-[#8E9AA7] mt-2 mb-6">The article slug requested does not exist or has been moved.</p>
          <Link href="/blog" className="px-6 py-3 bg-[#00FF99] text-black text-xs font-bold rounded-full shadow-[0_0_20px_rgba(0,255,153,0.4)] glossy-btn">
            <span className="relative z-10">Back to Blog</span>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/GreenBg.png)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.8))' }} />
        <div className="absolute bottom-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,153,0.15),transparent_50%)] pointer-events-none" />
      </div>

      <article className="min-h-screen pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-6">
          
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E9AA7] hover:text-[#00FF99] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
          </Link>

          {/* Article Meta */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-[#00FF99]/10 text-[#00FF99] px-2.5 py-0.5 rounded uppercase">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-syncopate uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide leading-tight">
              {post.title}
            </h1>

            {/* Authorship & Metrics */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8E9AA7] border-y border-white/[0.06] py-4">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-[#00FF99] text-black flex items-center justify-center font-bold text-[10px]">
                  AV
                </div>
                <span className="font-semibold text-white">AI VINE Editorial</span>
              </div>
              
              <div className="flex gap-3 font-semibold font-mono text-[10px] uppercase">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Lead Excerpt */}
          <p className="text-base text-[#D8DEE5] font-medium leading-relaxed border-l-2 border-l-[#00FF99] pl-4 italic">
            {post.excerpt}
          </p>

          {/* Article Body */}
          <div className="max-w-none text-sm sm:text-base text-[#8E9AA7] leading-relaxed space-y-6">
            <p>{post.content}</p>
            <p>
              Deploying AI workloads at scale is not merely a software problem—it requires tight coordination between infrastructure configurations, data ingestion pipes, and mathematical model evaluations. Many projects fall into the trap of treating AI systems like standard REST services, ignoring the unique profiling demands of GPU allocations, vector space latency, and caching strategies.
            </p>
            <p>
              At AI VINE, our teams work to build, optimize, and scale these pipelines. By establishing pre-vetted assessments and direct technical screening, we ensure our clients skip recruitment friction and work immediately with developers who understand production environments.
            </p>
            <p>
              In future posts, we will dive deeper into fine-tuning parameters, comparative analysis of vector index designs, and custom Kubernetes configurations for large-scale embeddings. Subscribe to our newsletter to receive technical breakdowns directly in your inbox.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-white/[0.06] pt-6 flex justify-between items-center text-xs text-[#8E9AA7]">
            <span>Published by AI VINE Editorial. All rights reserved.</span>
            <button className="flex items-center gap-1 hover:text-[#00FF99] transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
