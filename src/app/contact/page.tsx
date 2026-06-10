"use client";

import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Globe, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-root-mist pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Office coordinates column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vine-green/10 border border-vine-green/20 text-vine-green rounded-full text-xs font-semibold font-mono tracking-wider uppercase">
                <Building className="w-3.5 h-3.5" /> Get In Touch
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-vine-forest tracking-tight leading-tight">
                Connect With AI VINE
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with our local representatives across our dual offices. We are active during both US Pacific and Indian Standard Time zones.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              
              {/* USA Office */}
              <div className="bg-white rounded-card p-6 border border-vine-green/10 space-y-3 shadow-sm">
                <h3 className="font-display text-lg font-bold text-vine-green flex items-center gap-2">
                  <span className="text-xs font-mono bg-vine-green text-root-cream px-2 py-0.5 rounded">US</span>
                  San Francisco Headquarters
                </h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-vine-green shrink-0 mt-0.5" />
                    <span>100 Pine St, Suite 1250, San Francisco, CA 94111</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-vine-green shrink-0" />
                    <span>+1 (415) 555-0199</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-vine-green shrink-0" />
                    <span className="font-mono">sf@aivine.ai</span>
                  </p>
                </div>
              </div>

              {/* Hyderabad Office */}
              <div className="bg-white rounded-card p-6 border border-vine-green/10 space-y-3 shadow-sm">
                <h3 className="font-display text-lg font-bold text-grape-indigo flex items-center gap-2">
                  <span className="text-xs font-mono bg-grape-indigo text-white px-2 py-0.5 rounded">IN</span>
                  Hyderabad Delivery Center
                </h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-grape-indigo shrink-0 mt-0.5" />
                    <span>HITEC City, Phase 2, Madhapur, Hyderabad, TS 500081</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-grape-indigo shrink-0" />
                    <span>+91 40 5550 9199</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-grape-indigo shrink-0" />
                    <span className="font-mono">hyd@aivine.ai</span>
                  </p>
                </div>
              </div>
            </div>

            {/* General details */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-root-cream/50 p-4 rounded-vine border border-vine-green/5">
              <Globe className="w-4 h-4 text-vine-green" />
              <span>For corporate billing or vendor agreements: <strong className="text-vine-forest font-semibold font-mono">legal@aivine.ai</strong></span>
            </div>
          </div>

          {/* Contact form column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
