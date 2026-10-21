import Image from "next/image";
import { AboutHero } from "@/components/about/AboutHero";
import { CybersecurityGrounded } from "@/components/about/CybersecurityGrounded";
import { OurApproach } from "@/components/about/OurApproach";
import { MissionVision } from "@/components/about/MissionVision";
import { MeetTheCeo } from "@/components/about/MeetTheCeo";
import { WhatThisMeans } from "@/components/about/WhatThisMeans";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "About Cyberfort",
  description:
    "Learn about Cyberfort — our mission, elite cybersecurity technologies, and our commitment to enterprise-grade threat resolution.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        {/* About Hero Section */}
        <AboutHero />

        {/* Cybersecurity Grounded in Experience Section */}
        <CybersecurityGrounded />

        {/* Our Approach Section */}
        <OurApproach />

        {/* Mission and Vision Section */}
        <MissionVision />

        {/* CEO and Client Meaning Sections with Continuous Shared Pattern across the boundary */}
        <div className="relative isolate overflow-hidden">
          <MeetTheCeo />

          {/* Continuous Watermark Pattern anchored right on the boundary line */}
          <div className="relative w-full h-0 z-0 pointer-events-none select-none">
            <div className="absolute left-0 -translate-y-1/2 w-[380px] sm:w-[500px] lg:w-[613px] h-[700px] sm:h-[900px] lg:h-[1043px] pointer-events-none select-none">
              <Image
                src="/meet-ceo-bg-left.png"
                alt="CyberFort Pattern"
                width={613}
                height={1043}
                priority
                className="w-full h-full object-contain object-left pointer-events-none select-none"
              />
            </div>
          </div>

          <WhatThisMeans />
        </div>

        {/* CTA Section */}
        <CtaSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
