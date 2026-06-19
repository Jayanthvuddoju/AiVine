import type { Metadata } from "next";
import "@fontsource/fraunces";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import "@fontsource/syncopate";
import "@fontsource/syncopate/700.css";
import "@fontsource/space-grotesk";
import "@fontsource/exo-2";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/ui/footer-section";
import localFont from "next/font/local";

const gunkenFont = localFont({
  src: "../../public/fonts/Gunken.otf",
  variable: "--font-gunken",
});

export const metadata: Metadata = {
  title: "AI VINE | Enterprise AI Staffing, Training & IT Solutions",
  description: "AI VINE connects top companies with pre-vetted AI, ML, Data, and NLP talent. Scaling teams, shaping intelligence.",
  keywords: ["AI staffing", "machine learning staffing", "AI developers", "hire ML engineers", "AI training", "US AI recruitment"],
  openGraph: {
    title: "AI VINE | AI Staffing & IT Services",
    description: "Pre-vetted AI talent and elite IT services. Accelerating growth and scale for forward-thinking enterprises.",
    url: "https://aivine.ai",
    siteName: "AI VINE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body 
        className={`min-h-full flex flex-col bg-background text-foreground ${gunkenFont.variable}`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
