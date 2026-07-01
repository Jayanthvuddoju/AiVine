"use client";

import React, { useState, useMemo, useEffect } from "react";
import FilterBar, { FilterState } from "@/components/talent/FilterBar";
import CandidateCard from "@/components/talent/CandidateCard";
import RequestProfileModal from "@/components/talent/RequestProfileModal";
import { Candidate } from "@/types/candidate";
import { AnimatePresence, motion } from "framer-motion";
import { SearchX, Sparkles, Sprout } from "lucide-react";
import Fuse from "fuse.js";
import { EngagementType } from "@/types/candidate";

const initialFilters: FilterState = {
  searchQuery: "",
  experienceLevel: "",
  workAuth: "",
  availability: "",
  engagementType: "",
  remoteOnly: false,
  relocationOpen: false,
};

export default function TalentPoolPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/candidates")
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch candidates", err);
        setLoading(false);
      });
  }, []);

  const handleReset = () => {
    setFilters(initialFilters);
  };

  // Memoized real-time filtering using Fuse.js and standard filters
  const filteredCandidates = useMemo(() => {
    let result = [...candidates];

    // Fuzzy search using Fuse.js
    if (filters.searchQuery.trim()) {
      const fuse = new Fuse(result, {
        keys: ["skills", "role", "summary", "certifications", "education"],
        threshold: 0.35,
      });
      result = fuse.search(filters.searchQuery).map((r) => r.item);
    }

    // Filter by Experience Level
    if (filters.experienceLevel) {
      result = result.filter((c) => c.experienceLevel === filters.experienceLevel);
    }

    // Filter by Work Auth
    if (filters.workAuth) {
      result = result.filter((c) => c.workAuth === filters.workAuth);
    }

    // Filter by Availability
    if (filters.availability) {
      result = result.filter((c) => c.availability === filters.availability);
    }

    // Filter by Engagement Type
    if (filters.engagementType) {
      result = result.filter((c) =>
        c.engagementTypes.includes(filters.engagementType as EngagementType)
      );
    }

    // Filter by Remote OK
    if (filters.remoteOnly) {
      result = result.filter((c) => c.remoteOk);
    }

    // Filter by Relocation Open
    if (filters.relocationOpen) {
      result = result.filter((c) => c.relocationOpen);
    }

    return result;
  }, [filters, candidates]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99]/20 text-[#00FF99] rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
              <Sparkles className="w-3 h-3" /> Anonymous Talent Pool
            </div>
            <h1 className="font-nevera uppercase text-3xl sm:text-5xl font-bold text-white tracking-wide drop-shadow-md">
              Explore Our AI Talent Pool
            </h1>
            <p className="text-[#8E9AA7] text-sm leading-relaxed">
              Browse pre-vetted AI professionals by role, skill set, and availability. Request a full profile to connect.
            </p>
            <p className="text-xs text-[#00FF99] font-mono bg-[#00FF99]/5 inline-block px-3 py-1.5 rounded border border-[#00FF99]/10">
              All profiles are anonymized. Candidate details shared only upon mutual interest.
            </p>
          </motion.div>

          {/* Filters */}
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            onReset={handleReset}
          />

          {/* Candidates Grid Header */}
          <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
            <p className="text-xs font-mono font-semibold text-[#8E9AA7]">
              SHOWING {filteredCandidates.length} CANDIDATE{filteredCandidates.length !== 1 ? "S" : ""}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#00FF99] font-semibold">
              <Sprout className="w-4 h-4" /> Ready to Scale
            </div>
          </div>

          {/* Candidates Grid */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-[#00FF99] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredCandidates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onRequestProfile={setSelectedCandidateId}
                />
              ))}
            </div>
          ) : (
            /* Empty Search State */
            <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] p-12 text-center max-w-md mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-[#8E9AA7] mx-auto">
                <SearchX className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-syncopate uppercase text-lg font-bold text-white tracking-wide">No Candidates Found</h3>
                <p className="text-xs text-[#8E9AA7]">
                  {"We couldn't find any anonymous profiles matching your selected filters. Try broadening your keywords or resetting filters."}
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#00FF99] text-black font-bold text-xs rounded-full shadow-[0_0_20px_rgba(0,255,153,0.4)] hover:shadow-[0_0_30px_rgba(0,255,153,0.6)] transition-all glossy-btn"
              >
                <span className="relative z-10">Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Request Profile Lead Capture Modal */}
        <AnimatePresence>
          {selectedCandidateId && (
            <RequestProfileModal
              candidateId={selectedCandidateId}
              onClose={() => setSelectedCandidateId(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
