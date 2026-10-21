import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | CyberFort",
  description:
    "Get in touch with CyberFort's cybersecurity experts to evaluate threat posture, discuss technology implementations, or schedule an enterprise consultation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] flex flex-col justify-between">
      <div>
        {/* Contact Hero Section (Same style as About and Solutions pages) */}
        <ContactHero />

        {/* Contact Form & Information Section */}
        <ContactFormSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
