export function ThreatResolution() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center py-[100px] lg:py-[150px]"
      style={{
        backgroundImage: "url('/resolution-bg.jpg')",
      }}
    >
      {/* Center Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center">
        {/* Main Headline */}
        <h2 className="text-[40px] sm:text-[42px] lg:text-[50px] leading-[1.2] lg:leading-[60px] font-normal text-white text-center mb-[30px] sm:mb-[40px] tracking-tight max-w-[320px] sm:max-w-none">
          80% Faster<br className="sm:hidden" /> Threat<br className="sm:hidden" /> Resolution
        </h2>

        {/* Subtitle Description */}
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[32px] font-normal text-white text-center max-w-[360px] sm:max-w-[820px]">
          Our direct technology partnerships eliminate the middleman, ensuring rapid deployment and decisive action when every second counts.
        </p>
      </div>
    </section>
  );
}

export default ThreatResolution;
