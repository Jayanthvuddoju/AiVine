"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const hireSchema = z.object({
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid corporate email address"),
  phone: z.string().optional(),
  roleNeeded: z.string().min(2, "Please state the role or expertise needed"),
  message: z.string().min(10, "Please share some details about your team goals (minimum 10 characters)"),
});

type FormData = z.infer<typeof hireSchema>;

export default function HireTalentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(hireSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          phone: data.phone,
          type: "hire",
          message: `Company: ${data.companyName}\nRole Needed: ${data.roleNeeded}\nMessage: ${data.message}`,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMsg(resData.error || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting hire form:", error);
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
            Inquiry Submitted Successfully
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Our enterprise staffing representative will analyze your requirements and reach out within 24 business hours to discuss candidates.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-5 py-2 border border-vine-green rounded-vine text-xs font-semibold text-vine-green hover:bg-vine-green/5 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-card border border-vine-green/15 p-6 sm:p-8 space-y-5 shadow-sm">
      <div className="space-y-1">
        <h3 className="font-display text-lg sm:text-xl font-bold text-vine-forest">
          Describe Your AI Staffing Needs
        </h3>
        <p className="text-xs text-muted-foreground">
          Fill out this form, and our recruitment architects will compile matching candidate profiles.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3 rounded-vine flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact Name */}
        <div>
          <label htmlFor="hire-contact" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            id="hire-contact"
            type="text"
            {...register("contactName")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="John Doe"
          />
          {errors.contactName && (
            <p className="text-[10px] text-red-500 mt-1">{errors.contactName.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="hire-company" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="hire-company"
            type="text"
            {...register("companyName")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="AI Scale LLC"
          />
          {errors.companyName && (
            <p className="text-[10px] text-red-500 mt-1">{errors.companyName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="hire-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Corporate Email <span className="text-red-500">*</span>
          </label>
          <input
            id="hire-email"
            type="email"
            {...register("email")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="johndoe@company.com"
          />
          {errors.email && (
            <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="hire-phone" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Phone Number
          </label>
          <input
            id="hire-phone"
            type="tel"
            {...register("phone")}
            className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p className="text-[10px] text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Role Title */}
      <div>
        <label htmlFor="hire-role" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Hiring Requirements / Role Title <span className="text-red-500">*</span>
        </label>
        <input
          id="hire-role"
          type="text"
          {...register("roleNeeded")}
          className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
          placeholder="e.g. Senior ML Engineer with PyTorch & AWS experience"
        />
        {errors.roleNeeded && (
          <p className="text-[10px] text-red-500 mt-1">{errors.roleNeeded.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="hire-message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Role Details & Scope <span className="text-red-500">*</span>
        </label>
        <textarea
          id="hire-message"
          rows={4}
          {...register("message")}
          className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest resize-none"
          placeholder="Describe the skills, project scope, timeline, and whether you require US-based or Hyderabad-based developers..."
        />
        {errors.message && (
          <p className="text-[10px] text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        id="hire-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-vine-green hover:bg-vine-green/90 text-root-cream font-semibold rounded-vine text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
          </>
        ) : (
          "Submit Staffing Request"
        )}
      </button>
    </form>
  );
}
