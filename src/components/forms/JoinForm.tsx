"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";


const joinSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid corporate or personal email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  experienceLevel: z.enum([
    "Entry (0–2 yrs)",
    "Mid (2–5 yrs)",
    "Senior (5–10 yrs)",
    "Lead (10+ yrs)",
  ]),
  primarySkills: z.string().min(3, "Please enter at least a few skills (e.g. Python, PyTorch)"),
  portfolioLink: z.string().url("Please enter a valid URL").or(z.literal("")),
  message: z.string().optional(),
});

type FormData = z.infer<typeof joinSchema>;

export default function JoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      portfolioLink: "",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: "join",
          message: `Candidate Experience: ${data.experienceLevel}\nPrimary Skills: ${data.primarySkills}\nPortfolio URL: ${data.portfolioLink || "None"}\nBio/Details: ${data.message || "None"}`,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMsg(resData.error || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting candidate form:", error);
      setErrorMsg("Connection failure. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-card border border-vine-green/20 p-8 text-center space-y-5 shadow-sm">
        <div className="w-12 h-12 bg-vine-green/10 text-vine-green rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-bold text-vine-forest">
            Application Submitted Successfully
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Our placement counselors will review your skills and credentials. We will send you an email within 2-3 business days to set up your technical screening interview.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-5 py-2 border border-vine-green rounded-vine text-xs font-semibold text-vine-green hover:bg-vine-green/5 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-card border border-vine-green/15 p-6 sm:p-8 space-y-5 shadow-sm">
      <div className="space-y-1">
        <h3 className="font-display text-lg sm:text-xl font-bold text-vine-forest">
          Join the AI VINE Talent Pool
        </h3>
        <p className="text-xs text-muted-foreground">
          Submit your profile details and complete our technical screening to gain access to premium USA and Indian client placements.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3 rounded-vine flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="join-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="join-name"
            type="text"
            {...register("name")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-[10px] text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="join-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="join-email"
            type="email"
            {...register("email")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="johndoe@gmail.com"
          />
          {errors.email && (
            <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="join-phone" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="join-phone"
            type="tel"
            {...register("phone")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p className="text-[10px] text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Experience Level */}
        <div>
          <label htmlFor="join-experience" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Experience Level <span className="text-red-500">*</span>
          </label>
          <select
            id="join-experience"
            {...register("experienceLevel")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2.5 text-xs text-vine-forest focus:outline-none focus:border-vine-green"
          >
            <option value="">Select Level</option>
            <option value="Entry (0–2 yrs)">Entry (0–2 yrs)</option>
            <option value="Mid (2–5 yrs)">Mid (2–5 yrs)</option>
            <option value="Senior (5–10 yrs)">Senior (5–10 yrs)</option>
            <option value="Lead (10+ yrs)">Lead (10+ yrs)</option>
          </select>
          {errors.experienceLevel && (
            <p className="text-[10px] text-red-500 mt-1">{errors.experienceLevel.message}</p>
          )}
        </div>
      </div>

      {/* Primary Skills */}
      <div>
        <label htmlFor="join-skills" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Primary Skills / Frameworks <span className="text-red-500">*</span>
        </label>
        <input
          id="join-skills"
          type="text"
          {...register("primarySkills")}
          className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
          placeholder="e.g. Python, PyTorch, LangChain, Kubernetes, AWS"
        />
        {errors.primarySkills && (
          <p className="text-[10px] text-red-500 mt-1">{errors.primarySkills.message}</p>
        )}
      </div>

      {/* Portfolio Link */}
      <div>
        <label htmlFor="join-portfolio" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Portfolio URL / LinkedIn / GitHub
        </label>
        <input
          id="join-portfolio"
          type="text"
          {...register("portfolioLink")}
          className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
          placeholder="e.g. https://github.com/username"
        />
        {errors.portfolioLink && (
          <p className="text-[10px] text-red-500 mt-1">{errors.portfolioLink.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="join-message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Professional Bio / Career Goals
        </label>
        <textarea
          id="join-message"
          rows={3}
          {...register("message")}
          className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest resize-none"
          placeholder="Summarize your main achievements or describe the target AI engineering roles you are looking to secure..."
        />
      </div>

      {/* Submit */}
      <button
        id="join-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-vine-green hover:bg-vine-green/90 text-root-cream font-semibold rounded-vine text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
          </>
        ) : (
          "Apply for Evaluation"
        )}
      </button>
    </form>
  );
}
