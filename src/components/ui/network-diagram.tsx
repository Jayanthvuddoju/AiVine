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
            <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00FF99" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#065f46" stopOpacity="0.8" />
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
                  style={{ filter: "drop-shadow(0 0 8px rgba(0,255,153,0.6))" }}
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
              <circle cx={startX} cy={y} r="3" fill="#00FF99" filter="url(#glow)" />
              <circle cx={startX} cy={y} r="2" fill="#fff" />

              {/* Left Role Container (using foreignObject for styling) */}
              <foreignObject x="0" y={y - 20} width={startX - 15} height="40">
                <div className="w-full h-full flex justify-end items-center pointer-events-auto">
                  <div className="w-44 flex items-center justify-center px-4 py-2 bg-[#0a0f12]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl text-[#D2D5DC] text-xs sm:text-sm font-medium whitespace-nowrap shadow-[0_0_15px_rgba(0,255,153,0.15)] hover:border-[#00FF99]/30 transition-colors cursor-default">
                    {role.text}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* Right Hub Dot */}
        <circle cx="700" cy="250" r="4" fill="#00FF99" filter="url(#glow)" />
        <circle cx="700" cy="250" r="2" fill="#fff" />

        {/* Right Hub Title */}
        <foreignObject x="720" y="210" width="280" height="80">
          <div className="w-full h-full flex flex-col justify-center pointer-events-auto">
            <div className="flex items-start gap-2">
              <h2 className="font-syncopate uppercase text-3xl sm:text-4xl font-bold text-white tracking-wide drop-shadow-lg">
                AI VINE
              </h2>
            </div>
            <div className="h-1 w-[140px] sm:w-[160px] bg-gradient-to-r from-[#bbf7d0] via-[#00FF99] to-[#065f46] rounded-full mt-2 shadow-[0_0_15px_rgba(0,255,153,0.6)]" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
