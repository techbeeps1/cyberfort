export function MissionVision() {
  const missionTags = [
    "Right solution",
    "Proven fit",
    "Lasting accountability",
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-[100px]"
      style={{ backgroundImage: "url('/mission-bg-img.jpg')" }}
    >
      <div className="container">
        {/* Mission Block (Top Left) */}
        <div className="flex flex-col items-start max-w-[650px]">
          {/* Mission Title */}
          <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-4 sm:mb-[30px]">
            Mission
          </h2>

          {/* 3 Mission Outline Tags */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-5 sm:mb-[30px]">
            {missionTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center border border-white text-white text-[13px] sm:text-[15px] lg:text-[18px] font-medium px-4 py-2.5 sm:px-5 sm:py-3.5 sm:p-[20px] rounded-none whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mission Description */}
          <p className="text-white text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] font-normal">
            Cyberfort helps UAE organisations select, deploy, and support security technologies aligned with their risks and regulatory obligations. Led by practitioners who have defended government and investment institutions from within, we validate every solution before we recommend it, and stay accountable long after deployment.
          </p>
        </div>

        {/* Vision Block (Bottom Right, Staggered) */}
        <div className="mt-10 sm:mt-16 lg:mt-24 lg:ml-auto max-w-[500px] flex flex-col items-start">
          {/* Vision Title */}
          <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-3 sm:mb-6">
            Vision
          </h2>

          {/* Vision Description */}
          <p className="text-white text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] font-normal">
            To be the UAE&apos;s most trusted partner for turning cybersecurity investment into measurable protection.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
