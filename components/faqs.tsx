"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Is SignFlow free to use?",
    answer:
      "Yes. Core features are available for free.",
  },
  {
    question: "How accurate is SignFlow?",
    answer:
      "SignFlow prioritises: Meaning over literal translation, Structural awareness of sign languages, Continuous refinement through testing and feedback. We are transparent about limitations and do not claim perfect accuracy.",
  },
  {
    question: "Which sign languages are supported?",
    answer:
      `SignFlow is designed to support multiple sign languages. Current development focuses on: Nigerian Sign Language (NSL) and American Sign Language (ASL). Additional languages including British Sign Language (BSL) will be explored based
on community demand`,
  },
  {
    question: "Is SignFlow “AI-powered”?",
    answer:
      "SignFlow uses elements of artificial intelligence including machine-learning models for gesture and speech processing alongside rule-based linguistic systems. We avoid hype and make no claims of full automation or human-level interpretation. Accuracy, trust, and accountability come first.",
  },
  {
    question: "Why is SignFlow a web app and not a mobile app?",
    answer:
      "A web app allows: Instant access, Cross-device compatibility, Lower barriers in low-resource settings, Faster iteration and updates.",
  },
  {
    question: "Does SignFlow replace human interpreters?",
    answer:
      "No. SignFlow is intended for informal, everyday communication. Professional interpreters remain essential in legal, medical, and other high-risk contexts.",
  },
];

export const FAQ = () => {
  // Set 0 to have the first item open by default, or null to have all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full md:py-20 p-5 md:px-[112px] bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 tracking-[-1px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
            Your Questions. Answered.
          </h2>
          <p className="text-[#5E5E5E] text-sm tracking-[-0.2px]">
            Contact us if you have any other questions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FBF7EB] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-[22px] flex items-center justify-between gap-3 text-left"
                >
                  <span className="text-[#1A1A1A] font-medium text-md md:text-base">
                    {item.question}
                  </span>
                  {/* Chevron Icon with rotation */}
                  <ChevronDown
                    className={`w-6 h-6 text-black transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* 
                  Smooth Height Animation Wrapper 
                  We use grid-template-rows to animate height from 0 to auto
                */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-[#5E5E5E] text-sm tracking-[-0.2px] leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
