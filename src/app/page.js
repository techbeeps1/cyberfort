import { Hero } from "@/components/home/Hero";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { ThreatResolution } from "@/components/home/ThreatResolution";
import { TheEngine } from "@/components/home/TheEngine";
import { TheProcess } from "@/components/home/TheProcess";
import { ZeroSecurityBlindSpots } from "@/components/home/ZeroSecurityBlindSpots";
import { WhoStandsBehindIt } from "@/components/home/WhoStandsBehindIt";
import { Faq } from "@/components/home/Faq";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FAFF]">
      {/* Hero Section */}
      <Hero />

      {/* Core Capabilities Section */}
      <CoreCapabilities />

      {/* 80% Faster Threat Resolution Section */}
      <ThreatResolution />

      {/* The Engine Section */}
      <TheEngine />

      {/* The Process Section */}
      <TheProcess />

      {/* Zero Security Blind Spots Section */}
      <ZeroSecurityBlindSpots />

      {/* Who Stands Behind It Section */}
      <WhoStandsBehindIt />

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
