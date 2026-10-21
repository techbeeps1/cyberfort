import Image from "next/image";

export function WhatThisMeans() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24">
      {/* Foreground Content */}
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading and Paragraphs */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-dark-blue text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-[30px] sm:mb-[40px] lg:mb-[50px]">
              What this means for our
              <br className="hidden sm:inline" />{" "}
              clients
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium mb-4 sm:mb-6">
              Having managed cybersecurity from within complex organisations, we understand the difference between a solution that performs well in a presentation and one that delivers value in a live business environment.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium">
              This experience informs Cyberfort&apos;s approach to every engagement: understand the environment, identify the risks, and establish which technology is suitable for the organisation&apos;s requirements.
            </p>
          </div>

          {/* Right Column: Colorful Data Stream Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[570px] overflow-hidden shadow-sm">
              <Image
                src="/about-img-2.jpg"
                alt="Cyberfort data streams connecting into enterprise security"
                width={600}
                height={480}
                priority
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatThisMeans;
