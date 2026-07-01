"use client";

import React from "react";
import { Candidate, WorkAuth } from "@/types/candidate";
import { MapPin, Calendar, Clock, Award, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
  candidate: Candidate;
  onRequestProfile: (candidateId: string) => void;
}

const getWorkAuthBadgeClass = (auth: WorkAuth) => {
  switch (auth) {
    case "US Citizen":
    case "Green Card":
      return "bg-[#00FF99] text-black";
    case "H1B":
    case "H1B Transfer":
    case "TN Visa":
    case "EAD":
      return "bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/30";
    case "OPT":
    case "CPT":
      return "bg-[#00FF99]/20 text-[#00FF99] border border-[#00FF99]/30";
    default:
      return "bg-white/10 text-white/70";
  }
};

export default function CandidateCard({ candidate, onRequestProfile }: CandidateCardProps) {
  return (
    <div
      className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-6 flex flex-col justify-between hover:border-[#00FF99]/30 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Upper Section */}
      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            {/* Candidate ID badge */}
            <span className="inline-block bg-white/5 border border-[rgba(255,255,255,0.08)] text-[#00FF99] text-xs font-mono font-bold px-2.5 py-1 rounded-md mb-2">
              {candidate.id}
            </span>
            <h3 className="font-exo-2 text-lg font-bold text-white leading-snug">
              {candidate.role}
            </h3>
          </div>
          
          {/* Work Auth */}
          <span className={cn("text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full shrink-0", getWorkAuthBadgeClass(candidate.workAuth))}>
            {candidate.workAuth}
          </span>
        </div>

        {/* Anonymous Summary bio */}
        <p className="text-xs text-[#8E9AA7] leading-relaxed italic mb-6">
          &ldquo;{candidate.summary}&rdquo;
        </p>

        {/* Experience details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-[#D8DEE5]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00FF99] shrink-0" />
            <span>
              <strong>Exp:</strong> {candidate.experienceYears} Years ({candidate.experienceLevel.split(" ")[0]})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00FF99] shrink-0" />
            <span>
              <strong>Availability:</strong> {candidate.availability}
            </span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-4 h-4 text-[#00FF99] shrink-0" />
            <span>
              <strong>Location:</strong> {candidate.locationCity} 
              {candidate.remoteOk && <span className="text-[#00FF99] font-semibold"> &bull; Remote OK</span>}
            </span>
          </div>
        </div>

        <hr className="border-white/[0.06] my-4" />

        {/* Education & Certs */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-xs">
            <GraduationCap className="w-4 h-4 text-[#8E9AA7] shrink-0 mt-0.5" />
            <span className="text-[#8E9AA7] font-medium">
              <strong className="text-white font-semibold">Education:</strong> {candidate.education}
            </span>
          </div>
          {candidate.certifications.length > 0 && (
            <div className="flex items-start gap-2 text-xs">
              <Award className="w-4 h-4 text-[#8E9AA7] shrink-0 mt-0.5" />
              <span className="text-[#8E9AA7] font-medium">
                <strong className="text-white font-semibold">Certs:</strong> {candidate.certifications.join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lower Section: Skills Pill Tags & Action Button */}
      <div className="space-y-6">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[#8E9AA7] mb-2">Skills</span>
          <div className="flex flex-wrap gap-1.5">
            {candidate.skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono bg-[#00FF99]/10 text-[#00FF99] border border-[#00FF99]/20 px-2 py-0.5 rounded"
              >
              {skill}
              </span>
            ))}
            {candidate.skills.length > 6 && (
              <span className="text-[10px] font-mono text-[#8E9AA7] px-1.5 py-0.5">
                +{candidate.skills.length - 6} more
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onRequestProfile(candidate.id)}
          className="w-full py-2.5 px-4 bg-[#00FF99] text-black font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-[1px] shadow-[0_0_20px_rgba(0,255,153,0.4)] hover:shadow-[0_0_30px_rgba(0,255,153,0.6)] glossy-btn"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Request Full Profile <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
}
