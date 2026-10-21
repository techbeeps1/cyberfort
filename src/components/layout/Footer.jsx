import Image from "next/image";
import Link from "next/link";

const solutionsLinks = [
  { label: "Cyber Threat Intelligence", href: "#solutions" },
  { label: "Dark Web Monitoring", href: "#solutions" },
  { label: "Insider Risk Management", href: "#solutions" },
  { label: "Technology", href: "#solutions" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Cookie Policy", href: "#cookies" },
  { label: "Terms & Conditions", href: "#terms" },
];

export function Footer() {
  return (
    <footer className="w-full text-dark-blue">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-[60px] pb-8 sm:pb-12 gap-10 lg:gap-16">
          {/* Brand Logo & Address (Order 3 on mobile, Order 1 on desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3.5 order-3 md:order-1 pt-2 md:pt-0">
            <Link href="/" className="inline-block" aria-label="CyberFort Home">
              <Image
                src="/logo-dark.svg"
                alt="CyberFort Logo"
                width={210}
                height={54}
                className="h-[46px] sm:h-[54px] w-auto object-contain"
              />
            </Link>
            <p className="text-[#1A1A1A] text-[13px] sm:text-[14px] leading-[22px] font-normal max-w-[280px] sm:max-w-[320px]">
              Unit 430, Khalifa Bin Shakbut Street, Abu<br className="sm:hidden" /> Dhabi, United Arab Emirates
            </p>
          </div>

          {/* Links Columns (Order 1 on mobile, Order 2 on desktop) */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-9 sm:gap-20 lg:gap-28 order-1 md:order-2 w-full sm:w-auto">
            {/* Solutions Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[180px]">
              <h3 className="text-[#1F3AC1] text-[16px] font-semibold leading-[24px] mb-3 sm:mb-5">
                Solutions
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {solutionsLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-black font-medium text-[14px] leading-[22px] hover:text-[#00C045] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[150px]">
              <h3 className="text-[#1F3AC1] text-[16px] font-semibold leading-[24px] mb-3 sm:mb-5">
                Legal
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-black font-medium text-[14px] leading-[22px] hover:text-[#00C045] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Centered Copyright */}
        <div className="text-center pt-2 pb-8 sm:pb-12 text-[#8E97C5] text-[14px] font-medium leading-[20px]">
          <p>© 2026 CyberFort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
