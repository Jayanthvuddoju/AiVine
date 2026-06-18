import React, { useState } from "react";
import { Candidate, WorkAuth, Availability, ExperienceLevel, EngagementType } from "@/types/candidate";

interface CandidateFormProps {
  initialData?: Candidate;
  onSubmit: (data: Partial<Candidate>) => void;
  onCancel: () => void;
}

export default function CandidateForm({ initialData, onSubmit, onCancel }: CandidateFormProps) {
  const [formData, setFormData] = useState<Partial<Candidate>>(
    initialData || {
      id: "",
      role: "",
      experienceYears: 0,
      experienceLevel: "Entry (0–2 yrs)",
      skills: [],
      certifications: [],
      education: "",
      workAuth: "US Citizen",
      availability: "Immediate",
      engagementTypes: ["Full-Time"],
      locationCity: "",
      remoteOk: true,
      relocationOpen: false,
      summary: "",
    }
  );

  const [skillsStr, setSkillsStr] = useState(initialData?.skills?.join(", ") || "");
  const [certStr, setCertStr] = useState(initialData?.certifications?.join(", ") || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let finalValue: any = value;
    
    if (type === "checkbox") {
      finalValue = (e.target as HTMLInputElement).checked;
    } else if (name === "experienceYears") {
      finalValue = parseInt(value, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };

  const handleEngagementChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const values: EngagementType[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value as EngagementType);
      }
    }
    setFormData((prev) => ({ ...prev, engagementTypes: values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      skills: skillsStr.split(",").map((v) => v.trim()).filter((v) => v.length > 0),
      certifications: certStr.split(",").map((v) => v.trim()).filter((v) => v.length > 0),
    };
    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">ID (e.g. AV-2000)</label>
          <input required type="text" name="id" value={formData.id} onChange={handleChange} disabled={!!initialData} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white disabled:opacity-50" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Role</label>
          <input required type="text" name="role" value={formData.role} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Summary (1-2 lines)</label>
          <textarea required name="summary" value={formData.summary} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" rows={2}></textarea>
        </div>
        
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Experience Years</label>
          <input required type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Experience Level</label>
          <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white">
            <option className="text-black">Entry (0–2 yrs)</option>
            <option className="text-black">Mid (2–5 yrs)</option>
            <option className="text-black">Senior (5–10 yrs)</option>
            <option className="text-black">Lead (10+ yrs)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Skills (comma separated)</label>
          <input type="text" value={skillsStr} onChange={(e) => setSkillsStr(e.target.value)} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Certifications (comma separated)</label>
          <input type="text" value={certStr} onChange={(e) => setCertStr(e.target.value)} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Education</label>
          <input type="text" name="education" value={formData.education} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Location City</label>
          <input type="text" name="locationCity" value={formData.locationCity} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Work Auth</label>
          <select name="workAuth" value={formData.workAuth} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white">
            <option className="text-black">US Citizen</option>
            <option className="text-black">Green Card</option>
            <option className="text-black">H1B</option>
            <option className="text-black">H1B Transfer</option>
            <option className="text-black">OPT</option>
            <option className="text-black">CPT</option>
            <option className="text-black">TN Visa</option>
            <option className="text-black">EAD</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Availability</label>
          <select name="availability" value={formData.availability} onChange={handleChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white">
            <option className="text-black">Immediate</option>
            <option className="text-black">2 Weeks</option>
            <option className="text-black">30 Days</option>
            <option className="text-black">60 Days</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-semibold mb-1 text-vine-forest dark:text-white">Engagement Types (ctrl+click multiple)</label>
          <select multiple name="engagementTypes" value={formData.engagementTypes} onChange={handleEngagementChange} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-black dark:text-white" size={4}>
            <option className="text-black" value="Contract">Contract</option>
            <option className="text-black" value="Full-Time">Full-Time</option>
            <option className="text-black" value="Contract-to-Hire">Contract-to-Hire</option>
            <option className="text-black" value="C2C">C2C</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2 justify-center">
          <label className="flex items-center gap-2 text-sm text-black dark:text-white">
            <input type="checkbox" name="remoteOk" checked={formData.remoteOk} onChange={handleChange} />
            Remote OK
          </label>
          <label className="flex items-center gap-2 text-sm text-black dark:text-white">
            <input type="checkbox" name="relocationOpen" checked={formData.relocationOpen} onChange={handleChange} />
            Relocation Open
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-300 dark:border-white/10">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-semibold rounded-vine text-black dark:text-white border border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 text-sm font-semibold rounded-vine bg-vine-green text-white hover:bg-vine-green/90">
          Save Candidate
        </button>
      </div>
    </form>
  );
}
