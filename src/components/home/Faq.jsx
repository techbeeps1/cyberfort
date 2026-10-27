"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What size companies do you work with?",
    answer:
      "We work with organisations of all sizes, from growing mid-market enterprises to established corporations, tailoring our cybersecurity architecture to fit your specific risk profile and infrastructure scale.",
  },
  {
    question: "Which cybersecurity solutions do you provide?",
    answer:
      "Our comprehensive services span advanced threat detection, 24/7 security operations (SOC), behavioral analytics with DTEX, dark web monitoring via ParanoidLab, vulnerability management, and incident response.",
  },
  {
    question: "Do you help with implementation and setup?",
    answer:
      "Yes, we manage the entire lifecycle from initial architectural planning and procurement through to deployment, fine-tuning, and ongoing active monitoring.",
  },
  {
    question: "Can you work with our existing IT provider?",
    answer:
      "Absolutely. We seamlessly collaborate with your internal IT department or external MSP, adding an elite layer of specialized cybersecurity expertise without disrupting existing workflows.",
  },
  {
    question: "What happens if we have a security incident?",
    answer:
      "Our rapid-response threat mitigation team takes decisive, immediate action to contain the threat, neutralize the attack vector, minimize business disruption, and conduct comprehensive forensic post-mortems.",
  },
];

export function Faq({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full bg-[#F7FAFF] pt-[60px] sm:pt-4 lg:pt-6 pb-4 sm:pb-6 lg:pb-8 ${className}`}>
      <div className="w-full max-w-[1190px] mx-auto px-5">
        {/* Section Heading */}
        <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] leading-[44px] sm:leading-[52px] lg:leading-[60px] font-normal text-black text-center mb-6 sm:mb-8 lg:mb-10">
          FAQ
        </h2>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-[#F2F4FF] transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-black font-medium pr-4">
                    {item.question}
                  </span>

                  <svg
                    className={`w-5 h-5 text-black shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Animated Accordion Content using CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#4B4D50] text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] border-t border-black/5 pt-3">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
