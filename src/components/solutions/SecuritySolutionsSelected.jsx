import Image from "next/image";

export function SecuritySolutionsSelected() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading and Paragraphs */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-dark-blue text-[32px] sm:text-[40px] lg:text-[50px] font-normal leading-[40px] sm:leading-[46px] lg:leading-[52px] tracking-tight mb-[30px] sm:mb-[40px] lg:mb-[50px]">
              Security solutions selected
              <br className="hidden sm:inline" />{" "}
              for your organisation
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium mb-4 sm:mb-6">
              Security solutions selected for your organisation. Cyberfort works with established security technology providers to help organisations identify and implement solutions suited to their specific requirements.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#1e1e1e] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] font-medium">
              We evaluate technology based on your environment, risks, and operational priorities, helping you find the right tools without adding unnecessary complexity.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[570px] overflow-hidden shadow-sm">
              <Image
                src="/solutions-img-1.jpg"
                alt="Cyberfort security operations team evaluating enterprise security solutions"
                width={570}
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

export default SecuritySolutionsSelected;
