"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "Our Solutions", href: "/solutions", active: pathname === "/solutions" || pathname?.startsWith("/solutions") },
    { label: "About", href: "/about", active: pathname === "/about" || pathname?.startsWith("/about") },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full pt-6 pb-0 sm:pt-8 sm:pb-6">
        <div className="container flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-95">
            <Image
              src="/logo.svg"
              alt="CyberFort Logo"
              width={224}
              height={58}
              priority
              className="w-[170px] sm:w-[195px] md:w-[214px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation (Visible on lg 1024px and up) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-[60px]">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative py-1 text-[18px] xl:text-[20px] leading-[32px] font-normal whitespace-nowrap transition-colors duration-300 ${
                  item.active
                    ? "text-white hover:text-green"
                    : "text-zinc-200 hover:text-green"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2.5px] bg-green transition-all duration-300 ease-in-out ${
                    item.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Contact Us CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-green hover:bg-[#00d84e] active:scale-[0.98] text-white font-normal text-[18px] xl:text-[20px] leading-[32px] whitespace-nowrap text-center px-[24px] xl:px-[30px] py-[10px] transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile & Tablet Hamburger Toggle (Visible below lg: 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-end gap-[7px] w-9 h-9 p-1 focus:outline-none"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="block h-[2px] w-8 bg-white transition-all duration-300" />
            <span className="block h-[2px] w-8 bg-white transition-all duration-300" />
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Menu Dropdown rendered via React Portal directly onto document.body */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="lg:hidden">
            {/* Backdrop to close menu on outside click */}
            <div
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-xs transition-opacity duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Top Bar above backdrop at z-[9999] */}
            <div className="fixed top-0 left-0 right-0 z-[9999] pt-6 pb-0 sm:pt-8 sm:pb-6 pointer-events-none">
              <div className="container flex items-center justify-between">
                {/* Brand Logo */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center pointer-events-auto transition-opacity hover:opacity-95"
                >
                  <Image
                    src="/logo.svg"
                    alt="CyberFort Logo"
                    width={224}
                    height={58}
                    priority
                    className="w-[170px] sm:w-[195px] md:w-[214px] h-auto object-contain"
                  />
                </Link>

                {/* Explicit Cross Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pointer-events-auto flex items-center justify-center w-9 h-9 p-1 focus:outline-none text-white hover:text-green transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <svg
                    className="w-8 h-8 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Floating Dropdown Card */}
            <div className="fixed top-[74px] sm:top-[85px] left-4 right-4 sm:left-auto sm:right-6 sm:w-[320px] z-[9999] p-5 rounded-xl bg-[#00103A] border border-white/15 shadow-2xl flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[18px] sm:text-[20px] leading-[32px] font-normal py-2 transition-colors flex items-center justify-between ${
                    item.active ? "text-green font-medium" : "text-zinc-100 hover:text-green"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.active && (
                    <span className="w-2.5 h-2.5 rounded-full bg-green shadow-[0_0_8px_rgba(0,192,69,0.8)]" />
                  )}
                </Link>
              ))}

              {/* Contact Us CTA Button */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-green hover:bg-[#00d84e] active:scale-[0.98] text-white font-normal text-[18px] sm:text-[20px] leading-[32px] px-[30px] py-[10px] transition-all duration-200 mt-2"
              >
                Contact Us
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
