export type WorkAuth =
  | "US Citizen"
  | "Green Card"
  | "H1B"
  | "H1B Transfer"
  | "OPT"
  | "CPT"
  | "TN Visa"
  | "EAD";

export type Availability =
  | "Immediate"
  | "2 Weeks"
  | "30 Days"
  | "60 Days";

export type EngagementType =
  | "Contract"
  | "Full-Time"
  | "Contract-to-Hire"
  | "C2C";

export type ExperienceLevel =
  | "Entry (0–2 yrs)"
  | "Mid (2–5 yrs)"
  | "Senior (5–10 yrs)"
  | "Lead (10+ yrs)";

export interface Candidate {
  id: string;                    // e.g. "AV-2047"
  role: string;                  // "Senior ML Engineer"
  experienceYears: number;
  experienceLevel: ExperienceLevel;
  skills: string[];              // ["Python", "PyTorch", "AWS SageMaker"]
  certifications: string[];      // ["AWS ML Specialty"]
  education: string;             // "M.S. Computer Science"
  workAuth: WorkAuth;
  availability: Availability;
  engagementTypes: EngagementType[];
  locationCity: string;          // "New Jersey, NJ"
  remoteOk: boolean;
  relocationOpen: boolean;
  summary: string;               // 1–2 line anonymous bio
}
