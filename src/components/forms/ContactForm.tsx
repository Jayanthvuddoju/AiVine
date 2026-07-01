"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  type: z.enum(["general", "hire", "join"]),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "general",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMsg(resData.error || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMsg("Connection failure. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-8 text-center space-y-5">
        <div className="w-12 h-12 bg-[#00FF99]/10 text-[#00FF99] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-syncopate uppercase text-lg font-bold text-white tracking-wide">
            Inquiry Sent Successfully
          </h3>
          <p className="text-xs text-[#8E9AA7] max-w-sm mx-auto">
            Your message has been delivered. A representative from our team will review and follow up with you shortly.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-5 py-2 border border-[#00FF99] rounded-full text-xs font-semibold text-[#00FF99] hover:bg-[#00FF99]/10 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0a0f12]/65 backdrop-blur-[24px] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,255,153,0.08)] p-6 sm:p-8 space-y-5">
      <div className="space-y-1">
        <h3 className="font-syncopate uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
          Send Us a Message
        </h3>
        <p className="text-xs text-[#8E9AA7]">
          Have questions about our staffing model, consulting services, or training bootcamps? Drop us a line.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-950/30 text-red-200 border border-red-900/50 text-xs p-3 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA7] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            {...register("name")}
            className="w-full bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99] text-white placeholder-[#8E9AA7]/60"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-[10px] text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA7] mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            {...register("email")}
            className="w-full bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99] text-white placeholder-[#8E9AA7]/60"
            placeholder="johndoe@gmail.com"
          />
          {errors.email && (
            <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA7] mb-1">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            className="w-full bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99] text-white placeholder-[#8E9AA7]/60"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="contact-type" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA7] mb-1">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-type"
            {...register("type")}
            className="w-full bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99]"
          >
            <option value="general" className="bg-[#0a0f12]">General Inquiry</option>
            <option value="hire" className="bg-[#0a0f12]">I want to hire AI talent</option>
            <option value="join" className="bg-[#0a0f12]">I want to join the talent pool</option>
          </select>
          {errors.type && (
            <p className="text-[10px] text-red-500 mt-1">{errors.type.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA7] mb-1">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          {...register("message")}
          className="w-full bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#00FF99] focus:ring-1 focus:ring-[#00FF99] text-white resize-none placeholder-[#8E9AA7]/60"
          placeholder="Please write your message here..."
        />
        {errors.message && (
          <p className="text-[10px] text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-[#00FF99] text-black font-bold rounded-full text-xs flex items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-[1px] shadow-[0_0_30px_rgba(0,255,153,0.6)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)] disabled:opacity-70 disabled:cursor-not-allowed glossy-btn"
      >
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
            </>
          ) : (
            <>Send Message <ArrowRight className="w-4 h-4" /></>
          )}
        </span>
      </button>
    </form>
  );
}
