export function CoreCapabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Cyber Threat Intelligence",
      points: [
        "Map your external attack surface.",
        "Anticipate and track emerging threats.",
        "Neutralize risks proactively.",
      ],
    },
    {
      number: "02",
      title: "Dark Web Monitoring",
      points: [
        "Scan continuously for compromised credentials.",
        "Detect leaked proprietary data immediately.",
        "Prevent targeted account takeovers.",
      ],
    },
    {
      number: "03",
      title: "Insider Risk Management",
      points: [
        "Monitor behavioral anomalies in real-time.",
        "Secure sensitive internal data and IP.",
        "Enforce strict regulatory compliance automatically.",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] leading-[42px] sm:leading-[46px] lg:leading-[52px] font-normal text-dark-blue tracking-tight mb-[30px] sm:mb-12 lg:mb-16">
          Core Capabilities
        </h2>

        {/* Modular Staggered Checkerboard Grid */}
        <div className="w-full flex flex-col gap-[30px] md:gap-0">
          {/* Row 1: Card Left, Number Right */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Big Green Number 01 (above card on mobile, right on desktop) */}
            <div className="flex items-start justify-start md:justify-end pb-3 md:pb-0 pt-0 md:pt-10 lg:pt-12 pr-0 order-1 md:order-2">
              <span className="text-green text-[68px] sm:text-[75px] lg:text-[90px] font-light leading-none select-none">
                01
              </span>
            </div>

            {/* Blue Card 01 */}
            <div className="bg-[#003CD1] text-white p-[20px] sm:p-10 lg:p-14 flex flex-col justify-center min-h-[240px] sm:min-h-[260px] lg:min-h-[290px] order-2 md:order-1">
              <h3 className="text-[25px] sm:text-[26px] lg:text-[30px] font-normal leading-[32px] sm:leading-[40px] mb-[30px] sm:mb-6">
                {capabilities[0].title}
              </h3>
              <ul className="space-y-1.5 text-[#9DBEFF] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[32px] font-normal">
                {capabilities[0].points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="text-[#9DBEFF] leading-[24px] sm:leading-[32px] select-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Number Left, Card Right */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Big Green Number 02 */}
            <div className="flex items-start justify-start pb-3 md:pb-0 pt-0 md:pt-10 lg:pt-12 pl-0 order-1">
              <span className="text-green text-[68px] sm:text-[75px] lg:text-[90px] font-light leading-none select-none">
                02
              </span>
            </div>

            {/* Blue Card 02 */}
            <div className="bg-[#003CD1] text-white p-[20px] sm:p-10 lg:p-14 flex flex-col justify-center min-h-[240px] sm:min-h-[260px] lg:min-h-[290px] order-2">
              <h3 className="text-[25px] sm:text-[26px] lg:text-[30px] font-normal leading-[32px] sm:leading-[40px] mb-[30px] sm:mb-6">
                {capabilities[1].title}
              </h3>
              <ul className="space-y-1.5 text-[#9DBEFF] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[32px] font-normal">
                {capabilities[1].points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="text-[#9DBEFF] leading-[24px] sm:leading-[32px] select-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3: Card Left, Number Right */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Big Green Number 03 (above card on mobile, right on desktop) */}
            <div className="flex items-start justify-start md:justify-end pb-3 md:pb-0 pt-0 md:pt-10 lg:pt-12 pr-0 order-1 md:order-2">
              <span className="text-green text-[68px] sm:text-[75px] lg:text-[90px] font-light leading-none select-none">
                03
              </span>
            </div>

            {/* Blue Card 03 */}
            <div className="bg-[#003CD1] text-white p-[20px] sm:p-10 lg:p-14 flex flex-col justify-center min-h-[240px] sm:min-h-[260px] lg:min-h-[290px] order-2 md:order-1">
              <h3 className="text-[25px] sm:text-[26px] lg:text-[30px] font-normal leading-[32px] sm:leading-[40px] mb-[30px] sm:mb-6">
                {capabilities[2].title}
              </h3>
              <ul className="space-y-1.5 text-[#9DBEFF] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[32px] font-normal">
                {capabilities[2].points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="text-[#9DBEFF] leading-[24px] sm:leading-[32px] select-none">•</span>
                    <span>{point}</span>
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

export default CoreCapabilities;
