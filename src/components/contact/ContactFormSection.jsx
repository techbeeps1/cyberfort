"use client";

import { useState } from "react";
import Image from "next/image";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Image & Company Details */}
          <div className="flex flex-col justify-start">
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-sm">
              <Image
                src="/contact-left.jpg"
                alt="Cyberfort security operations and secure technology"
                width={1080}
                height={720}
                priority
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Location & Support Details */}
            <div className="mt-8 bg-white p-6 sm:p-8 border border-[#E5E9F2]">
              <h3 className="text-dark-blue text-[20px] font-medium mb-3">
                Cyberfort Headquarters
              </h3>
              <p className="text-[#4B4D50] text-[15px] leading-[24px] mb-5">
                Unit 430, Khalifa Bin Shakbut Street, Abu Dhabi, United Arab Emirates
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5E9F2] text-[14px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  <span className="text-dark-blue font-medium">Enterprise Security Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  <span className="text-dark-blue font-medium">Direct Access to Senior Security Architects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border border-[#E5E9F2]">
            <div className="mb-8">
              <h2 className="text-dark-blue text-[28px] sm:text-[34px] font-medium leading-[36px] sm:leading-[42px] tracking-tight mb-3">
                Get in touch
              </h2>
              <p className="text-[#4B4D50] text-[15px] sm:text-[16px] leading-[26px]">
                Speak directly with our team to discuss your security posture and evaluate technology solutions.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#F0FDF4] border border-[#BBF7D0] text-center">
                <div className="w-12 h-12 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-dark-blue text-[20px] font-medium mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-[#4B4D50] text-[15px] leading-[24px]">
                  Thank you for reaching out. A Cyberfort security specialist will review your inquiry and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      phone: "",
                      company: "",
                      message: "",
                    });
                  }}
                  className="mt-6 text-dark-blue text-[14px] font-semibold underline hover:text-green cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. First Name & 2. Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-[14px] font-medium text-[#1A1A1A] mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah"
                      className="w-full bg-[#FAFBFD] border border-[#D5DAE7] focus:bg-white focus:border-dark-blue focus:ring-1 focus:ring-dark-blue px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-[14px] font-medium text-[#1A1A1A] mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Jenkins"
                      className="w-full bg-[#FAFBFD] border border-[#D5DAE7] focus:bg-white focus:border-dark-blue focus:ring-1 focus:ring-dark-blue px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 3. Phone Number & 4. Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[14px] font-medium text-[#1A1A1A] mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +971 50 123 4567"
                      className="w-full bg-[#FAFBFD] border border-[#D5DAE7] focus:bg-white focus:border-dark-blue focus:ring-1 focus:ring-dark-blue px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[14px] font-medium text-[#1A1A1A] mb-2"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corporation"
                      className="w-full bg-[#FAFBFD] border border-[#D5DAE7] focus:bg-white focus:border-dark-blue focus:ring-1 focus:ring-dark-blue px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 5. Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium text-[#1A1A1A] mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security goals, environment, or technology requirements..."
                    className="w-full bg-[#FAFBFD] border border-[#D5DAE7] focus:bg-white focus:border-dark-blue focus:ring-1 focus:ring-dark-blue px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center bg-green hover:bg-[#00d84e] active:scale-[0.98] disabled:opacity-70 text-white font-normal text-[16px] leading-[32px] text-center px-[36px] py-[14px] transition-all duration-200 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
