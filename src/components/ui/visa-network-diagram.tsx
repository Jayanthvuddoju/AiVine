"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ROLES = [
  "AI/ML Engineers",
  "Data Scientists",
  "GenAI Architects",
  "Prompt Engineers",
  "MLOps Engineers",
  "CV Engineers",
  "NLP Specialists",
  "AI Researchers"
];

export default function VisaNetworkDiagram({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const RADIUS = 160; // Radius for the nodes
  const CENTER = 225; // Center X/Y of the 450x450 container
  const CONTAINER_SIZE = 450;

  return (
    <div className={cn("relative w-full max-w-[450px] aspect-square mx-auto", className)}>
      
      {/* Background Grid Removed */}
      {/* SVG Connecting Lines */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
        className="absolute inset-0 pointer-events-none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF99" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.2" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {ROLES.map((_, i) => {
          const angle = (i * (360 / ROLES.length) * Math.PI) / 180;
          
          // Calculate start point (edge of the chip - assuming 64x64 chip)
          // For a square, we can approximate with a radius or calculate intersection.
          // Using a simple radius approximation for the connection points.
          const orbRadius = 45;
          const startX = CENTER + Math.cos(angle) * orbRadius;
          const startY = CENTER + Math.sin(angle) * orbRadius;

          // Calculate end point (center of the node)
          const endX = CENTER + Math.cos(angle) * RADIUS;
          const endY = CENTER + Math.sin(angle) * RADIUS;

          // Create a curved path using bezier curves
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          
          // Offset control points to create S-curves
          const cp1x = startX + Math.cos(angle - Math.PI/4) * 40;
          const cp1y = startY + Math.sin(angle - Math.PI/4) * 40;
          const cp2x = endX - Math.cos(angle + Math.PI/4) * 40;
          const cp2y = endY - Math.sin(angle + Math.PI/4) * 40;

          return (
            <motion.path
              key={`line-${i}`}
              d={`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          );
        })}
        
        {/* Animated connection dots flowing along lines */}
        {ROLES.map((_, i) => {
          const angle = (i * (360 / ROLES.length) * Math.PI) / 180;
          const orbRadius = 45;
          const startX = CENTER + Math.cos(angle) * orbRadius;
          const startY = CENTER + Math.sin(angle) * orbRadius;
          const endX = CENTER + Math.cos(angle) * RADIUS;
          const endY = CENTER + Math.sin(angle) * RADIUS;
          const cp1x = startX + Math.cos(angle - Math.PI/4) * 40;
          const cp1y = startY + Math.sin(angle - Math.PI/4) * 40;
          const cp2x = endX - Math.cos(angle + Math.PI/4) * 40;
          const cp2y = endY - Math.sin(angle + Math.PI/4) * 40;
          
          return (
            <circle
              key={`dot-${i}`}
              r="3"
              fill="#00FF99"
              filter="url(#glow)"
              opacity="0"
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
                path={`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`}
              />
              <animate 
                attributeName="opacity" 
                values="0;1;0" 
                keyTimes="0;0.5;1"
                dur="2.5s" 
                repeatCount="indefinite" 
                begin={`${i * 0.3}s`} 
              />
            </circle>
          );
        })}
      </svg>

      {/* Central Microchip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20 flex items-center justify-center">
        {/* Base Glow */}
        <div className="absolute inset-0 bg-[#00FF99] blur-xl opacity-30 animate-pulse" />
        
        {/* Chip Body */}
        <div className="relative w-full h-full bg-[#0a0f12] border-2 border-[#00FF99] rounded-xl flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,255,153,0.3),0_0_20px_rgba(0,255,153,0.5)]">
          {/* Circuit details */}
          <div className="absolute top-[-4px] w-4 h-1 bg-[#00FF99] rounded-t-sm" />
          <div className="absolute bottom-[-4px] w-4 h-1 bg-[#00FF99] rounded-b-sm" />
          <div className="absolute left-[-4px] w-1 h-4 bg-[#00FF99] rounded-l-sm" />
          <div className="absolute right-[-4px] w-1 h-4 bg-[#00FF99] rounded-r-sm" />

          {/* AI Text */}
          <span className="font-gunken text-[#00FF99] text-2xl font-bold tracking-wider drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]">
            AI
          </span>
        </div>
      </div>

      {/* Radial Nodes */}
      {ROLES.map((role, i) => {
        const angle = (i * (360 / ROLES.length) * Math.PI) / 180;
        
        // Calculate position in percentage relative to container center
        // Center is 50%, Radius needs to be mapped to % of 500px container
        const radiusPct = (RADIUS / CONTAINER_SIZE) * 100; // 180/500 = 36%
        
        const top = 50 + Math.sin(angle) * radiusPct;
        const left = 50 + Math.cos(angle) * radiusPct;

        return (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.5, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            style={{ 
              top: `${top}%`, 
              left: `${left}%` 
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Node Glow on Hover */}
              <div className="absolute inset-0 bg-[#00D9FF] rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Glassy Box */}
              <div className="relative bg-black/40 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_15px_rgba(0,0,0,0.5)] rounded-xl px-4 py-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00FF99]/50">
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
                  {role}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
