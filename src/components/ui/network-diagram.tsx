"use client";
import React from "react";

export default function NetworkDiagram() {
  const roles = [
    { text: "AI/ML Engineers" },
    { text: "Data Scientists" },
    { text: "GenAI Architects" },
    { text: "Prompt Engineers" },
    { text: "MLOps Engineers" },
  ];

  return (
    <div className="w-full relative pointer-events-none">
      <svg viewBox="0 0 1000 500" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="line-gradient" x1="350" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {roles.map((role, i) => {
          // Calculate Y positions. 5 items -> Y from 100 to 400.
          const y = 100 + i * 75;
          const startX = 350;
          const endX = 700;
          const endY = 250;

          return (
            <g key={role.text}>
              <g>
                {/* Base Faint Line */}
                <path
                  d={`M ${startX} ${y} C ${startX + 150} ${y}, ${endX - 150} ${endY}, ${endX} ${endY}`}
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  className="opacity-30"
                />
                
                {/* Glowing Pulse Line */}
                <path
                  d={`M ${startX} ${y} C ${startX + 150} ${y}, ${endX - 150} ${endY}, ${endX} ${endY}`}
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="3"
                  strokeDasharray="40 160"
                  className="opacity-90"
                  style={{ filter: "drop-shadow(0 0 8px rgba(59,130,246,0.8))" }}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="200"
                    to="0"
                    dur="1.2s"
                    repeatCount="indefinite"
                    begin="0s"
                  />
                </path>
              </g>
              
              {/* Left Node Dot */}
              <circle cx={startX} cy={y} r="3" fill="#10b981" filter="url(#glow)" />
              <circle cx={startX} cy={y} r="2" fill="#fff" />

              {/* Left Role Container (using foreignObject for styling) */}
              <foreignObject x="0" y={y - 20} width={startX - 15} height="40">
                <div className="w-full h-full flex justify-end items-center pointer-events-auto">
                  <div className="px-4 py-2 bg-[rgba(16,16,24,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl text-[#D2D5DC] text-xs sm:text-sm font-medium whitespace-nowrap shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {role.text}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* Right Hub Dot */}
        <circle cx="700" cy="250" r="4" fill="#8b5cf6" filter="url(#glow)" />
        <circle cx="700" cy="250" r="2" fill="#fff" />

        {/* Right Hub Title */}
        <foreignObject x="720" y="210" width="280" height="80">
          <div className="w-full h-full flex flex-col justify-center pointer-events-auto">
            <div className="flex items-start gap-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                AI VINE
              </h2>
            </div>
            <div className="h-1 w-[140px] sm:w-[160px] bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6] rounded-full mt-1 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
