import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    category: "Behavioral Intelligence",
    logo: "/Dtex-logo 1.png",
    alt: "DTEX",
    logoHeightClass: "h-[28px] sm:h-[34px]",
  },
  {
    category: "Dark Web Monitoring",
    logo: "/paranoid-logo.png",
    alt: "ParanoidLab",
    logoHeightClass: "h-[26px] sm:h-[32px]",
  },
  {
    category: "AI Driven Customer Growth",
    logo: "/elula-logo.png",
    alt: "elula",
    logoHeightClass: "h-[34px] sm:h-[42px]",
  },
];

export function TheEngine() {
  return (
    <section className="w-full bg-dark-blue py-20 lg:py-28 text-white">
      <div className="container">
        {/* Eyebrow Tag */}
        <span className="text-[#6945EB] text-[18px] leading-[32px] font-normal tracking-[0.11em] uppercase block mb-3 sm:mb-4">
          THE ENGINE
        </span>

        {/* Section Headline */}
        <h2 className="text-[35px] sm:text-[42px] lg:text-[50px] leading-[42px] sm:leading-[52px] lg:leading-[61px] font-normal text-white max-w-[800px] mb-4 sm:mb-6">
          <span className="hidden sm:inline">
            Powered by industry leaders. <br />
            Not generic toolsets.
          </span>
          <span className="block sm:hidden">
            Powered by
            <br />
            industry leaders.
            <br />
            Not generic
            <br />
            toolsets.
          </span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] text-[#B0BFDD] font-normal max-w-[680px] mb-12 lg:mb-16">
          We work directly with selected technology providers, ensuring faster communication, support, and access to their expertise.
        </p>

        {/* 3 Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-12 lg:mb-16">
          {partners.map((partner) => (
            <div
              key={partner.category}
              className="border border-[#082B9F] bg-dark-blue py-[40px] px-[20px] sm:p-10 lg:p-12 flex flex-col items-center justify-between min-h-[155px] sm:min-h-[250px] transition-all duration-300 hover:border-[#153BC9]"
            >
              <h3 className="text-[21px] leading-[28px] font-normal text-white text-center">
                {partner.category}
              </h3>

              <div className="flex items-center justify-center w-full my-auto pt-6 pb-2">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={240}
                  height={60}
                  className={`${partner.logoHeightClass} w-auto object-contain`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center bg-green hover:bg-[#00d84e] active:scale-[0.98] text-white font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
          >
            Explore our solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TheEngine;
