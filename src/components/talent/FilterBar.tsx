"use client";

import React, { useState } from "react";
import { WorkAuth, Availability, EngagementType, ExperienceLevel } from "@/types/candidate";
import { Search, SlidersHorizontal, RotateCcw, Check } from "lucide-react";

export interface FilterState {
  searchQuery: string;
  experienceLevel: string;
  workAuth: string;
  availability: string;
  engagementType: string;
  remoteOnly: boolean;
  relocationOpen: boolean;
}

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
}

const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  "Entry (0–2 yrs)",
  "Mid (2–5 yrs)",
  "Senior (5–10 yrs)",
  "Lead (10+ yrs)",
];

const WORK_AUTHS: WorkAuth[] = [
  "US Citizen",
  "Green Card",
  "H1B",
  "H1B Transfer",
  "OPT",
  "CPT",
  "TN Visa",
  "EAD",
];

const AVAILABILITIES: Availability[] = [
  "Immediate",
  "2 Weeks",
  "30 Days",
  "60 Days",
];

const ENGAGEMENT_TYPES: EngagementType[] = [
  "Contract",
  "Full-Time",
  "Contract-to-Hire",
  "C2C",
];

export default function FilterBar({ filters, onFilterChange, onReset }: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleSelectChange = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleCheckboxChange = (key: "remoteOnly" | "relocationOpen") => {
    onFilterChange({ ...filters, [key]: !filters[key] });
  };

  return (
    <div className="bg-card rounded-card border border-vine-green/15 shadow-sm p-5 space-y-4">
      {/* Search & Sliders */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Field */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input
            id="search-talent"
            type="text"
            placeholder="Search skills (e.g. PyTorch, NLP, AWS, Scala)..."
            value={filters.searchQuery}
            onChange={handleTextChange}
            className="w-full pl-10 pr-4 py-2.5 bg-root-mist/50 border border-border rounded-vine text-sm focus:outline-none focus:border-vine-green focus:ring-1 focus:ring-vine-green text-vine-forest placeholder-muted-foreground/75"
          />
        </div>

        {/* Action Controls */}
        <div className="flex gap-2 shrink-0 justify-end">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="px-4 py-2.5 border border-border rounded-vine text-xs font-semibold text-vine-forest bg-root-mist/30 hover:bg-root-mist/70 transition-colors flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {showAdvanced ? "(Hide)" : "(Show)"}
          </button>
          
          <button
            onClick={onReset}
            className="px-4 py-2.5 border border-transparent rounded-vine text-xs font-semibold text-muted-foreground hover:text-vine-green hover:bg-vine-green/5 transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Advanced Filters Expandable Grid */}
      {showAdvanced && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/80">
          {/* Experience level */}
          <div>
            <label htmlFor="filter-experience" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Experience Level
            </label>
            <select
              id="filter-experience"
              value={filters.experienceLevel}
              onChange={(e) => handleSelectChange("experienceLevel", e.target.value)}
              className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs text-vine-forest focus:outline-none focus:border-vine-green"
            >
              <option value="">All Levels</option>
              {EXPERIENCE_LEVELS.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Work Auth */}
          <div>
            <label htmlFor="filter-work-auth" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Work Authorization
            </label>
            <select
              id="filter-work-auth"
              value={filters.workAuth}
              onChange={(e) => handleSelectChange("workAuth", e.target.value)}
              className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs text-vine-forest focus:outline-none focus:border-vine-green"
            >
              <option value="">All Authorizations</option>
              {WORK_AUTHS.map((auth) => (
                <option key={auth} value={auth}>{auth}</option>
              ))}
            </select>
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="filter-availability" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Availability
            </label>
            <select
              id="filter-availability"
              value={filters.availability}
              onChange={(e) => handleSelectChange("availability", e.target.value)}
              className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs text-vine-forest focus:outline-none focus:border-vine-green"
            >
              <option value="">All Availabilities</option>
              {AVAILABILITIES.map((avail) => (
                <option key={avail} value={avail}>{avail}</option>
              ))}
            </select>
          </div>

          {/* Engagement Type */}
          <div>
            <label htmlFor="filter-engagement" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Engagement Type
            </label>
            <select
              id="filter-engagement"
              value={filters.engagementType}
              onChange={(e) => handleSelectChange("engagementType", e.target.value)}
              className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs text-vine-forest focus:outline-none focus:border-vine-green"
            >
              <option value="">All Types</option>
              {ENGAGEMENT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Checkboxes */}
          <div className="sm:col-span-2 md:col-span-4 flex flex-wrap gap-6 pt-2">
            {/* Remote only */}
            <label htmlFor="filter-remote" className="flex items-center gap-2 cursor-pointer select-none">
              <div className="relative">
                <input
                  id="filter-remote"
                  type="checkbox"
                  checked={filters.remoteOnly}
                  onChange={() => handleCheckboxChange("remoteOnly")}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${filters.remoteOnly ? 'bg-vine-green border-vine-green' : 'border-border bg-root-mist'}`}>
                  {filters.remoteOnly && <Check className="w-3.5 h-3.5 text-root-cream" />}
                </div>
              </div>
              <span className="text-xs font-medium text-vine-forest">Remote Only</span>
            </label>

            {/* Relocation Open */}
            <label htmlFor="filter-relocation" className="flex items-center gap-2 cursor-pointer select-none">
              <div className="relative">
                <input
                  id="filter-relocation"
                  type="checkbox"
                  checked={filters.relocationOpen}
                  onChange={() => handleCheckboxChange("relocationOpen")}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${filters.relocationOpen ? 'bg-vine-green border-vine-green' : 'border-border bg-root-mist'}`}>
                  {filters.relocationOpen && <Check className="w-3.5 h-3.5 text-root-cream" />}
                </div>
              </div>
              <span className="text-xs font-medium text-vine-forest">Open to Relocation</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
