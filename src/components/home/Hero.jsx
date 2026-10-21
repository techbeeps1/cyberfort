import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-between lg:min-h-[900px]">
      {/* Layer 1: Base Rock Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-img.jpg"
          alt="CyberFort Hero Background"
          width={1728}
          height={957}
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none w-full h-full"
        />
      </div>

      {/* Layer 2: Pattern Overlay (Concentric Shield Arcs Watermark on Right) */}
      <div className="absolute right-0 top-0 z-1 h-full pointer-events-none select-none hidden lg:block">
        <Image
          src="/right-pettern.png"
          alt="CyberFort Pattern"
          width={937}
          height={944}
          priority
          className="w-full h-full"
        />
      </div>

      {/* Layer 3: Foreground Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-1 justify-between">
        {/* Hero Content Section */}
        <div className="container flex flex-col justify-start lg:justify-between pt-[120px] sm:pt-[145px] lg:pt-[178px] pb-[50px] lg:pb-16 lg:flex-1">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6 lg:gap-8 max-w-[780px] md:max-w-[850px] lg:max-w-[780px] mx-auto lg:mx-0">
            {/* Eyebrow Tag */}
            <span className="text-[#6945EB] text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-normal lg:leading-[32px] tracking-[0.11em] text-center lg:text-left uppercase">
              ENTERPRISE-GRADE SECURITY
            </span>

            {/* Main Hero Headline */}
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-normal text-white leading-[1.2] md:leading-[1.22] lg:leading-[73px] tracking-tight text-center lg:text-left">
              {/* Desktop (lg: 1024px+) */}
              <span className="hidden lg:inline">
                Cybersecurity
                <br />
                expertise, backed by
                <br />
                elite technology
              </span>
              {/* Tablet (md: 768px to 1023px: 2 lines spanning container width) */}
              <span className="hidden md:inline lg:hidden">
                Cybersecurity expertise,
                <br />
                backed by elite technology
              </span>
              {/* Mobile (< 768px: 4 lines) */}
              <span className="block md:hidden">
                Cybersecurity
                <br />
                expertise,
                <br />
                backed by elite
                <br />
                technology
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] md:leading-[30px] lg:leading-[32px] font-normal text-white text-center lg:text-left max-w-[370px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[700px]">
              We combine industry-leading tools with bespoke strategies to detect, manage, and neutralize threats before they impact your business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-2 w-full sm:w-auto">
              {/* Primary Solid Green Button */}
              <Link
                href="/contact"
                className="w-full sm:w-auto max-w-[290px] xs:max-w-[310px] sm:max-w-none inline-flex items-center justify-center bg-green hover:bg-[#00d84e] active:scale-[0.98] text-white font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
              >
                Contact Us
              </Link>

              {/* Outlined Green Border Button */}
              <Link
                href="/solutions"
                className="w-full sm:w-auto max-w-[290px] xs:max-w-[310px] sm:max-w-none inline-flex items-center justify-center border border-green bg-transparent hover:bg-green active:scale-[0.98] text-white font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
              >
                Explore our solutions
              </Link>
            </div>
          </div>

          {/* Three Column Features Bar */}
          <div className="w-full mt-[60px] lg:mt-24">
            <div className="grid grid-cols-3 divide-x divide-[#3D477D]/70 max-w-[1100px] mx-auto">
              {/* Item 1: Direct relationships */}
              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-6 py-2 sm:py-4 gap-2 sm:gap-3">
                <Image
                  src="/icon-1.svg"
                  alt="Direct relationships"
                  width={45}
                  height={45}
                  className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px] object-contain"
                />
                <span className="text-white text-[12px] sm:text-[15px] lg:text-[18px] font-medium leading-[1.3] lg:leading-[32px] text-center">
                  Direct<br className="sm:hidden" /> relationships
                </span>
              </div>

              {/* Item 2: Expert-led */}
              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-6 py-2 sm:py-4 gap-2 sm:gap-3">
                <Image
                  src="/icon-2.svg"
                  alt="Expert-led"
                  width={45}
                  height={45}
                  className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px] object-contain"
                />
                <span className="text-white text-[12px] sm:text-[15px] lg:text-[18px] font-medium leading-[1.3] lg:leading-[32px] text-center">
                  Expert-led
                </span>
              </div>

              {/* Item 3: Focused solutions */}
              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-6 py-2 sm:py-4 gap-2 sm:gap-3">
                <Image
                  src="/icon-3.svg"
                  alt="Focused solutions"
                  width={45}
                  height={45}
                  className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px] object-contain"
                />
                <span className="text-white text-[12px] sm:text-[15px] lg:text-[18px] font-medium leading-[1.3] lg:leading-[32px] text-center">
                  Focused<br className="sm:hidden" /> solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 11px Bottom Gradient Border */}
      <div
        className="w-full h-[11px] relative z-20 shrink-0"
        style={{
          background:
            "linear-gradient(77.1deg, #00C045 16.31%, #5C9589 27.83%, #6945EB 47.11%, #6547E2 56.25%, #153BC9 85.81%)",
        }}
      />
    </section>
  );
}

export default Hero;
