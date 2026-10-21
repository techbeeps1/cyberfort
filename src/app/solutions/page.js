import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SecuritySolutionsSelected } from "@/components/solutions/SecuritySolutionsSelected";
import { SolutionPartnerCards } from "@/components/solutions/SolutionPartnerCards";
import { Faq } from "@/components/home/Faq";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Our Solutions | CyberFort",
  description:
    "Explore CyberFort's comprehensive cybersecurity solutions — elite threat intelligence, dark web monitoring, insider risk management, and proactive defense.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] flex flex-col justify-between">
      <div>
        {/* Solutions Hero Section */}
        <SolutionsHero />

        {/* Security Solutions Selected Section (Left content, Right image) */}
        <SecuritySolutionsSelected />

        {/* 3 Partner Solution Cards (DTEX, ParanoidLab, Elula) */}
        <SolutionPartnerCards />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <CtaSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
