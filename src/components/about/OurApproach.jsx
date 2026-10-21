export function OurApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "Every organisation has its own infrastructure, risks, and operational priorities. We start by understanding yours.",
    },
    {
      number: "02",
      title: "Evaluate",
      description:
        "We evaluate security technologies against your specific requirements, rather than simply how well they perform in a presentation.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "We focus on solutions that help organisations make informed decisions and deliver value in a live business environment.",
    },
  ];

  return (
    <section className="w-full pb-12 sm:pb-16 lg:pb-[100px]">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-dark-blue text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-[30px] sm:mb-[40px] lg:mb-[50px]">
          Our approach
        </h2>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-[55px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#153bc9] p-6 sm:p-[30px] flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Step Number */}
              <span className="text-green text-[36px] sm:text-[42px] lg:text-[50px] font-medium leading-[42px] sm:leading-[48px] lg:leading-[52px] mb-4 sm:mb-[30px]">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-white text-[24px] sm:text-[26px] lg:text-[30px] font-medium leading-tight mb-4 sm:mb-8 lg:mb-[50px]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
