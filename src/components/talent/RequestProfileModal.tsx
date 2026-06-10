"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const requestProfileSchema = z.object({
  vendorName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  roleHiring: z.string().min(2, "Please specify the role you are hiring for"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof requestProfileSchema>;

interface RequestProfileModalProps {
  candidateId: string | null;
  onClose: () => void;
}

export default function RequestProfileModal({ candidateId, onClose }: RequestProfileModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(requestProfileSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/request-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, candidateId }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(resData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Connection error. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!candidateId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-vine-forest/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-white dark:bg-vine-forest w-full max-w-lg rounded-card shadow-2xl border border-vine-green/20 overflow-hidden z-10"
      >
        {/* Modal Close Trigger */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-vine-green/10 text-vine-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-vine-forest">
                Request Submitted
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you for your inquiry. Our staffing team will review your requirements and follow up with the unmasked profile and references for <strong className="text-vine-green">{candidateId}</strong>.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-vine-green hover:bg-vine-green/90 text-root-cream font-semibold rounded-vine text-xs transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-grape-indigo bg-grape-indigo/10 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3" /> Candidate profile: {candidateId}
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-vine-forest">
                Request Full Profile
              </h2>
              <p className="text-xs text-muted-foreground">
                Enter your details below to request unmasked resume references.
              </p>
            </div>

            {errorMsg && (
              <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3 rounded-vine">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="modal-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  {...register("vendorName")}
                  className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
                  placeholder="John Doe"
                />
                {errors.vendorName && (
                  <p className="text-[10px] text-red-500 mt-1">{errors.vendorName.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="modal-company" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-company"
                  type="text"
                  {...register("company")}
                  className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
                  placeholder="Enterprise Inc."
                />
                {errors.company && (
                  <p className="text-[10px] text-red-500 mt-1">{errors.company.message}</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="modal-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  {...register("email")}
                  className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
                  placeholder="johndoe@enterprise.com"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="modal-phone" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-phone"
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

            {/* Hiring Role */}
            <div>
              <label htmlFor="modal-role" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Target Hiring Role / Title <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-role"
                type="text"
                {...register("roleHiring")}
                className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest"
                placeholder="e.g. Senior PyTorch Engineer"
              />
              {errors.roleHiring && (
                <p className="text-[10px] text-red-500 mt-1">{errors.roleHiring.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Additional Comments or Job Description Details
              </label>
              <textarea
                id="modal-message"
                rows={3}
                {...register("message")}
                className="w-full bg-root-mist/50 border border-border rounded-vine px-3 py-2 text-xs focus:outline-none focus:border-vine-green text-vine-forest resize-none"
                placeholder="Share any special criteria or context regarding this placement request..."
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-border rounded-vine text-xs font-semibold text-vine-forest hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 bg-vine-green text-root-cream hover:bg-vine-green/90 text-xs font-semibold rounded-vine flex items-center gap-1.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
