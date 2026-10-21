import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full bg-dark-blue flex flex-col justify-between min-h-[300px] sm:min-h-[360px] lg:min-h-[450px]">
      {/* Background Watermark Pattern (Concentric Shield Arcs on Right) */}
      <div className="absolute right-0 top-0 bottom-0 z-0 h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/cta-pettern.png"
          alt="CyberFort Pattern"
          width={937}
          height={944}
          priority
          className="h-full w-auto object-cover object-left"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full flex flex-col justify-between flex-1">
        {/* Hero Title Container */}
        <div className="container pt-[94px] sm:pt-[135px] lg:pt-[178px] pb-10 sm:pb-14 lg:pb-20">
          <div className="flex flex-col items-start">
            {/* Green Accent Bar */}
            <div className="w-[80px] sm:w-[109px] h-[10px] sm:h-[13px] bg-green mb-4 sm:mb-[26px]" />

            {/* Page Title */}
            <h1 className="text-white text-[32px] sm:text-[45px] lg:text-[55px] font-medium leading-[38px] sm:leading-[52px] lg:leading-[67px] tracking-tight">
              About Cyberfort
            </h1>
          </div>
        </div>
      </div>

      {/* 11px Bottom Multi-color Gradient Border */}
      <div
        className="w-full h-[11px] relative z-10 shrink-0"
        style={{
          background:
            "linear-gradient(77.1deg, #00C045 16.31%, #5C9589 27.83%, #6945EB 47.11%, #6547E2 56.25%, #153BC9 85.81%)",
        }}
      />
    </section>
  );
}

export default AboutHero;
