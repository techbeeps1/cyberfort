import Image from "next/image";
import Link from "next/link";

const solutionCards = [
  {
    id: "dtex",
    logo: "/Dtex-logo 1.png",
    logoAlt: "DTEX",
    title: "Human, data and AI risk management",
    paragraph1:
      "DTEX provides a risk-adaptive security platform designed to identify and manage risks across human activity, data, and AI. Its capabilities include insider risk management, data loss prevention, user activity monitoring, behavioural analytics, and AI risk management.",
    paragraph2:
      "Cyberfort can help organisations evaluate and implement DTEX solutions as part of their broader security environment.",
    buttonText: "Visit DTEX →",
    buttonHref: "https://www.dtexsystems.com",
    image: "/dtex.jpg",
    imageAlt: "DTEX Shadow AI Access security platform dashboard",
  },
  {
    id: "paranoidlab",
    logo: "/paranoid-logo.png",
    logoAlt: "ParanoidLab",
    title: "Dark web and compromised credential monitoring",
    paragraph1:
      "ParanoidLab provides real-time dark web monitoring and compromised credential detection. The platform monitors sources including dark web marketplaces, forums, Telegram channels, combo-lists, and infostealer data to help organisations identify exposed credentials and other risks.",
    paragraph2:
      "Cyberfort can help organisations use this intelligence to identify exposure and strengthen their security posture.",
    buttonText: "Visit ParanoidLab →",
    buttonHref: "https://paranoidlab.com",
    image: "/paranoidLab.jpg",
    imageAlt: "ParanoidLab dark web intelligence reports interface",
  },
  {
    id: "elula",
    logo: "/elula-logo.png",
    logoAlt: "elula",
    title: "AI-powered business solutions",
    paragraph1:
      "Elula provides AI software designed to solve specific business challenges. Its solutions include customer relationship intelligence, personalised customer interactions, pricing optimisation, and data quality and compliance.",
    paragraph2:
      "Cyberfort can help organisations evaluate where AI-powered solutions such as these may provide practical value within their business environment.",
    buttonText: "Visit Elula →",
    buttonHref: "https://www.elula.ai",
    image: "/elula.jpg",
    imageAlt: "Elula AI-powered customer journey solutions",
  },
];

export function SolutionPartnerCards() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container">
        <div className="space-y-[33px]">
          {solutionCards.map((card) => (
            <div
              key={card.id}
              className="bg-dark-blue w-full p-[40px] lg:p-[60px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 xl:gap-16 items-center">
                {/* Left Column: Partner Info */}
                <div className="flex flex-col items-start justify-center">
                  {/* Partner Brand Logo (50px gap to title, 210x29) */}
                  <div className="mb-[50px] flex items-center">
                    <Image
                      src={card.logo}
                      alt={card.logoAlt}
                      width={210}
                      height={29}
                      className="w-[210px] h-[29px] object-contain object-left"
                    />
                  </div>

                  {/* Solution Headline (font-medium, 28px, 35px gap to content) */}
                  <h3 className="text-white text-[24px] sm:text-[28px] font-medium leading-[34px] sm:leading-[38px] tracking-tight mb-[35px] max-w-[580px]">
                    {card.title}
                  </h3>

                  {/* Paragraph 1 (font-normal, 18px, leading 28px) */}
                  <p className="text-white text-[16px] sm:text-[18px] leading-[28px] font-normal mb-4 max-w-[580px]">
                    {card.paragraph1}
                  </p>

                  {/* Paragraph 2 (font-normal, 18px, leading 28px, 40px gap to button) */}
                  <p className="text-white text-[16px] sm:text-[18px] leading-[28px] font-normal mb-[40px] max-w-[580px]">
                    {card.paragraph2}
                  </p>

                  {/* Action Link Button (Same as Home Page Design) */}
                  <Link
                    href={card.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-green bg-transparent hover:bg-green hover:text-white active:scale-[0.98] text-white font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
                  >
                    <span>{card.buttonText}</span>
                  </Link>
                </div>

                {/* Right Column: Platform Screenshot / Graphic */}
                <div className="flex justify-center lg:justify-end w-full">
                  <div className="relative w-full max-w-[560px] overflow-hidden shadow-2xl">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={560}
                      height={420}
                      className="w-full h-auto object-cover select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionPartnerCards;
