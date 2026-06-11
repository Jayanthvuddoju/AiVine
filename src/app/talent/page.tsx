"use client";

import React, { useState, useMemo } from "react";
import FilterBar, { FilterState } from "@/components/talent/FilterBar";
import CandidateCard from "@/components/talent/CandidateCard";
import RequestProfileModal from "@/components/talent/RequestProfileModal";
import { mockCandidates } from "@/data/candidates";
import { AnimatePresence } from "framer-motion";
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

  const handleReset = () => {
    setFilters(initialFilters);
  };

  // Memoized real-time filtering using Fuse.js and standard filters
  const filteredCandidates = useMemo(() => {
    let result = [...mockCandidates];

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
  }, [filters]);

  return (
    <div className="min-h-screen  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
            <Sparkles className="w-3 h-3" /> Anonymous Talent Pool
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight">
            Explore Our AI Talent Pool
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Browse pre-vetted AI professionals by role, skill set, and availability. Request a full profile to connect.
          </p>
          <p className="text-xs text-vine-green font-mono bg-vine-green/5 inline-block px-3 py-1.5 rounded border border-vine-green/10">
            All profiles are anonymized. Candidate details shared only upon mutual interest.
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleReset}
        />

        {/* Candidates Grid Header */}
        <div className="flex justify-between items-center border-b border-vine-green/10 pb-2">
          <p className="text-xs font-mono font-semibold text-muted-foreground">
            SHOWING {filteredCandidates.length} CANDIDATE{filteredCandidates.length !== 1 ? "S" : ""}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-vine-green font-semibold">
            <Sprout className="w-4 h-4" /> Ready to Scale
          </div>
        </div>

        {/* Candidates Grid */}
        {filteredCandidates.length > 0 ? (
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
          <div className="bg-card rounded-card border border-vine-green/15 p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-muted-foreground mx-auto">
              <SearchX className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-vine-forest">No Candidates Found</h3>
              <p className="text-xs text-muted-foreground">
                {"We couldn't find any anonymous profiles matching your selected filters. Try broadening your keywords or resetting filters."}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-vine-green text-root-cream font-semibold text-xs rounded-vine hover:bg-vine-green/90 transition-colors"
            >
              Reset Filters
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
  );
}
