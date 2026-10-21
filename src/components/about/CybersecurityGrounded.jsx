import Image from "next/image";

export function CybersecurityGrounded() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-dark-blue text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-[30px] sm:mb-[40px] lg:mb-[50px]">
              Cybersecurity grounded
              <br className="hidden sm:inline" />{" "}
              in experience
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium mb-4 sm:mb-6">
              Cyberfort helps organisations address their cybersecurity needs through hands-on experience in security operations, incident response, vulnerability management, and enterprise security technology.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium">
              Led by cybersecurity professional Saeed AlFahim, Cyberfort takes a practical approach to understanding each organisation&apos;s security environment and identifying technology suited to its requirements.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[570px] overflow-hidden shadow-sm">
              <Image
                src="/about-img-1.jpg"
                alt="Cyberfort team working in modern cybersecurity operations office"
                width={553}
                height={434}
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

export default CybersecurityGrounded;
