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
      return "bg-vine-green text-root-cream";
    case "H1B":
    case "H1B Transfer":
    case "TN Visa":
    case "EAD":
      return "bg-grape-indigo text-white";
    case "OPT":
    case "CPT":
      return "bg-harvest-gold text-vine-forest font-semibold";
    default:
      return "bg-slate-200 text-slate-700";
  }
};

export default function CandidateCard({ candidate, onRequestProfile }: CandidateCardProps) {
  return (
    <div
      className="bg-root-cream rounded-card shadow-sm border-l-4 border-l-vine-green border-y border-r border-vine-green/10 p-6 flex flex-col justify-between hover:shadow-md hover:border-vine-green/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Upper Section */}
      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            {/* Candidate ID badge */}
            <span className="inline-block bg-grape-indigo text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md mb-2">
              {candidate.id}
            </span>
            <h3 className="font-display text-lg font-bold text-vine-forest leading-snug">
              {candidate.role}
            </h3>
          </div>
          
          {/* Work Auth */}
          <span className={cn("text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full shrink-0", getWorkAuthBadgeClass(candidate.workAuth))}>
            {candidate.workAuth}
          </span>
        </div>

        {/* Anonymous Summary bio */}
        <p className="text-xs text-muted-foreground leading-relaxed italic mb-6">
          &ldquo;{candidate.summary}&rdquo;
        </p>

        {/* Experience details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-vine-forest">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-vine-green shrink-0" />
            <span>
              <strong>Exp:</strong> {candidate.experienceYears} Years ({candidate.experienceLevel.split(" ")[0]})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-vine-green shrink-0" />
            <span>
              <strong>Availability:</strong> {candidate.availability}
            </span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-4 h-4 text-vine-green shrink-0" />
            <span>
              <strong>Location:</strong> {candidate.locationCity} 
              {candidate.remoteOk && <span className="text-grape-indigo font-semibold"> &bull; Remote OK</span>}
            </span>
          </div>
        </div>

        <hr className="border-vine-green/10 my-4" />

        {/* Education & Certs */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-xs">
            <GraduationCap className="w-4 h-4 text-grape-indigo shrink-0 mt-0.5" />
            <span className="text-muted-foreground font-medium">
              <strong className="text-vine-forest font-semibold">Education:</strong> {candidate.education}
            </span>
          </div>
          {candidate.certifications.length > 0 && (
            <div className="flex items-start gap-2 text-xs">
              <Award className="w-4 h-4 text-grape-indigo shrink-0 mt-0.5" />
              <span className="text-muted-foreground font-medium">
                <strong className="text-vine-forest font-semibold">Certs:</strong> {candidate.certifications.join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lower Section: Skills Pill Tags & Action Button */}
      <div className="space-y-6">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Skills</span>
          <div className="flex flex-wrap gap-1.5">
            {candidate.skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono bg-vine-sage/15 text-vine-green border border-vine-sage/20 px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
            {candidate.skills.length > 6 && (
              <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5">
                +{candidate.skills.length - 6} more
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onRequestProfile(candidate.id)}
          className="w-full py-2.5 px-4 bg-vine-green hover:bg-vine-green/90 text-root-cream hover:shadow text-xs font-semibold rounded-vine flex items-center justify-center gap-1.5 transition-all duration-300"
        >
          Request Full Profile <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
