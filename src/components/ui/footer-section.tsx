'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sprout } from 'lucide-react';
import Link from 'next/link';

const LinkedinIcon = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 7.1C2.3 8.6 2 10.3 2 12s.3 3.4.5 4.9c.3 2.5 2.3 4.4 4.8 4.6C9.3 21.8 11.3 22 12 22s2.7-.2 4.7-.5c2.5-.2 4.5-2.1 4.8-4.6.2-1.5.5-3.2.5-4.9s-.3-3.4-.5-4.9c-.3-2.5-2.3-4.4-4.8-4.6C14.7 2.2 12.7 2 12 2s-2.7.2-4.7.5c-2.5.2-4.5 2.1-4.8 4.6z" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Services',
    links: [
      { title: 'AI Staffing', href: '/hire' },
      { title: 'AI Services', href: '/services' },
      { title: 'AI Training', href: '/training' },
      { title: 'Talent Pool', href: '/talent' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'Join Talent Network', href: '/join' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
      { title: 'Twitter', href: '#', icon: TwitterIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'YouTube', href: '#', icon: YoutubeIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-white/[0.05] bg-[radial-gradient(35%_128px_at_50%_0%,rgba(0,255,153,0.08),transparent)] px-6 py-12 lg:py-16 mt-24">
      <div className="bg-[#00FF99]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-6">
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#00FF99] flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-12">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-[#00FF99]">
                AI VINE
              </span>
            </div>
          </div>
          <p className="text-white/50 text-sm md:max-w-xs leading-relaxed">
            Connecting exceptional AI professionals with ambitious organizations to cultivate growth and innovation.
          </p>
          <p className="text-white/30 text-xs mt-8 md:mt-auto">
            © {new Date().getFullYear()} AI VINE. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-mono tracking-wider font-semibold text-white/90">{section.label}</h3>
                <ul className="text-white/50 mt-4 space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="hover:text-[#00FF99] inline-flex items-center transition-all duration-300 group"
                      >
                        {link.icon && <link.icon className="me-2 size-4 group-hover:scale-110 transition-transform" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className as string}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className as string}
    >
      {children}
    </motion.div>
  );
}
