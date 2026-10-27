const steps = [
  {
    number: "01",
    title: "Audit & Identify",
    description:
      "We map your current vulnerabilities and pinpoint critical security gaps across your infrastructure.",
  },
  {
    number: "02",
    title: "Select & Deploy",
    description:
      "We implement targeted, best-in-class technology solutions specific to your unique risk profile.",
  },
  {
    number: "03",
    title: "Monitor & Protect",
    description:
      "Our experts actively manage your defense perimeter and respond to alerts around the clock.",
  },
  {
    number: "04",
    title: "Adapt & Optimize",
    description:
      "We continuously evolve and harden your security posture as new adversarial tactics emerge.",
  },
];

export function TheProcess() {
  return (
    <section className="w-full py-[70px] lg:py-[200px]">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] leading-[42px] sm:leading-[46px] lg:leading-[52px] font-normal text-dark-blue tracking-tight mb-[50px]">
          The Process
        </h2>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-10 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start">
              {/* Green Horizontal Bar */}
              <div className="w-[78px] h-[6px] sm:w-[109px] sm:h-[13px] bg-green mb-[20px] sm:mb-[24px]" />

              {/* Number and Step Title */}
              <div className="text-dark-blue mb-[35px] sm:mb-6">
                <span className="block text-[25px] sm:text-[26px] lg:text-[30px] leading-[30px] sm:leading-[32px] font-medium">
                  {step.number}
                </span>
                <h3 className="text-[25px] sm:text-[26px] lg:text-[30px] leading-[30px] sm:leading-[32px] font-medium mt-1">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="leading-[30px] font-medium text-dark-blue">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TheProcess;
