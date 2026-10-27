import Link from "next/link";

export function WhoStandsBehindIt() {
  return (
    <section className="w-full bg-[#F7FAFF] pt-12 sm:pt-16 lg:pt-28 pb-6 sm:pb-10 lg:pb-28">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[46px] lg:leading-[52px] font-normal text-dark-blue tracking-tight mb-[50px]">
          Who stands behind it
        </h2>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image / Placeholder Box */}
          <div className="relative w-full aspect-[4/3] bg-[#3C3C3C] overflow-hidden flex items-center justify-center">
            {/* Top-left Green Bar */}
            <div className="absolute top-0 left-0 w-[109px] h-[13px] bg-green z-10" />

            {/* Wireframe Placeholder Diagonal Cross */}
            <svg
              className="w-full h-full stroke-white/20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="0" y1="0" x2="100" y2="100" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Right Column: Bio Content */}
          <div className="flex flex-col items-start">
            {/* Name */}
            <h3 className="text-[28px] leading-[36px] font-semibold text-dark-blue">
              Saeed AlFahim
            </h3>

            {/* Title / Role */}
            <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[31px] font-medium text-dark-blue mt-1 mb-6">
              CEO, Cyberfort
            </p>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-[16px] lg:text-[18px] leading-[26px] lg:leading-[30px] text-dark-blue font-normal max-w-[780px] mb-[50px]">
              <p>
                With nearly a decade of hands-on cybersecurity experience, Saeed AlFahim has worked across security operations, incident response, vulnerability management, and enterprise security technology.
              </p>
              <p>
                Having managed cybersecurity within complex organisations, Saeed understands what it takes to turn security technology into practical protection for real businesses.
              </p>
            </div>

            {/* Learn More Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-green bg-transparent hover:bg-green hover:text-white active:scale-[0.98] text-dark-blue font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoStandsBehindIt;
