import Image from "next/image";
import Link from "next/link";

const bulletPoints = [
  "Direct access to top-tier security expertise.",
  "One accountable, dedicated partner.",
  "Technology chosen for proven impact, not sales quotas.",
];

export function CtaSection({ className = "" }) {
  return (
    <section className={`w-full pt-10 sm:pt-14 lg:pt-20 pb-0 ${className}`}>
      <div className="container">
        <div className="relative w-full overflow-hidden isolate py-9 sm:py-11 lg:py-12 px-6 sm:px-10 lg:px-14 bg-white text-white">
          {/* Background Pattern Graphic - Desktop (Right side shield pattern underneath gradient) */}
          <div className="absolute right-0 top-0 bottom-0 w-[53%] pointer-events-none select-none overflow-hidden hidden md:block">
            <Image
              src="/cta-pettern.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 764px"
              priority
              className="object-cover object-left"
            />
          </div>

          {/* Background Pattern Graphic - Mobile only (underneath gradient) */}
          <div className="absolute right-0 bottom-0 w-[70%] h-[75%] pointer-events-none select-none md:hidden overflow-hidden">
            <Image
              src="/cta-pettern.png"
              alt=""
              fill
              sizes="70vw"
              className="object-cover object-left-bottom"
            />
          </div>

          {/* Background Gradient Layer (Mobile: 28.87deg) with Multiply blend mode */}
          <div
            className="absolute inset-0 md:hidden pointer-events-none mix-blend-multiply"
            style={{
              background:
                "linear-gradient(28.87deg, #00C045 1.4%, #5C9589 15.55%, #625DC9 39.22%, #6547E2 50.44%, #1F3AC1 86.74%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Background Gradient Layer (Desktop: 84.3deg) with Multiply blend mode */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none mix-blend-multiply"
            style={{
              background:
                "linear-gradient(84.3deg, #00C045 -0.95%, #5C9589 13.72%, #625DC9 38.27%, #6547E2 49.91%, #1F3AC1 87.56%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Inner Content */}
          <div className="relative z-10 flex flex-col items-start max-w-[880px]">
            {/* Main Headline */}
            <h2 className="text-[35px] lg:text-[36px] leading-[40px] font-normal text-white mb-3 sm:mb-4">
              Let’s talk about<br className="sm:hidden" /> your security.
            </h2>

            {/* Subtitle Description */}
            <p className="text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-white font-normal mb-5 sm:mb-6 max-w-none">
              Stop managing fragmented tools. Partner with experts who build comprehensive defenses.
            </p>

            {/* Bullet Points with Checkmarks */}
            <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-white font-normal">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="text-white text-base select-none leading-none">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Contact Us Today Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#153BC9] hover:bg-dark-blue active:scale-[0.98] text-white font-normal text-[16px] leading-[32px] text-center px-[30px] py-[15px] transition-all duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
