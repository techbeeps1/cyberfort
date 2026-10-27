import Link from "next/link";

export function MeetTheCeo() {
  const highlights = [
    "~70% reduction in organisational vulnerabilities through structured vulnerability scanning and patch management",
    "Master of Public Administration, concentration in Cybersecurity, California State University, San Bernardino",
    "Bachelor of Science in Cybersecurity, California State University, San Bernardino",
    "Languages: Arabic and English",
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24">
      {/* Section Background Color */}
      <div className="absolute inset-0 bg-dark-blue -z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 container">
        {/* Section Heading */}
        <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[46px] lg:leading-[52px] font-normal tracking-tight mb-[30px] sm:mb-[40px] lg:mb-[50px]">
          Meet the CEO
        </h2>

        {/* 2-Column Content (30% picture, 70% text) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Box + LinkedIn Button (30%) */}
          <div className="lg:col-span-3 flex flex-col items-start w-full">
            {/* CEO Placeholder Image Box */}
            <div className="relative w-full aspect-[4/3] bg-[#3C3C3C] overflow-hidden flex items-center justify-center">
              {/* Top-left Green Bar */}
              <div className="absolute top-0 left-0 w-[80px] sm:w-[109px] h-[10px] sm:h-[13px] bg-green z-10" />

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

            {/* Connect on LinkedIn Button */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-green bg-transparent hover:bg-green active:scale-[0.98] text-white font-normal text-[15px] sm:text-[16px] leading-[30px] sm:leading-[32px] text-center px-6 sm:px-[30px] py-3.5 sm:py-[15px] transition-all duration-200 mt-6 sm:mt-8 rounded-none"
            >
              <span>Connect on LinkedIn</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Right Column: Bio Content & Key Highlights (70%) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* CEO Name */}
            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[34px] lg:leading-[36px] font-semibold text-white">
              Saeed AlFahim
            </h3>

            {/* Title / Role */}
            <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[31px] font-medium text-white/80 mt-1 mb-4 sm:mb-6">
              CEO, Cyberfort
            </p>

            {/* Bio Paragraph */}
            <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-white/90 font-normal mb-6 sm:mb-8">
              He has nearly a decade of hands-on cybersecurity experience across security operations, incident response, vulnerability management, digital forensics, and enterprise security technology. His work includes evaluating and implementing NDR, EDR, SIEM, email security, user monitoring, and cloud security solutions, as well as leading security programmes and vulnerability management initiatives.
            </p>

            {/* Key Highlights Section */}
            <div className="w-full">
              <h4 className="text-[17px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-semibold text-white mb-3 sm:mb-4">
                Key highlights
              </h4>

              <ul className="space-y-2.5 sm:space-y-3 text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-white/90 font-normal">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-white select-none leading-[24px] sm:leading-[28px]">•</span>
                    <span>{item.startsWith("• ") ? item.slice(2) : item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheCeo;
