'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Is SignFlow really free to use?",
    answer: "Yes. We believe accessibility is a human right, not a luxury. The core translation features—including text, voice, and live chat—are free for individual users. We sustain the platform through ethical partnerships and enterprise APIs for large organisations."
  },
  {
    question: "How accurate is SignFlow?",
    answer: "SignFlow utilizes advanced machine learning models trained on diverse datasets to ensure high accuracy. However, like all AI, it is constantly learning and improving through user feedback and community validation."
  },
  {
    question: "Which sign languages are supported?",
    answer: "Currently, we support American Sign Language (ASL) and British Sign Language (BSL), with active development for French Sign Language (LSF) and others based on community demand."
  },
  {
    question: "Is SignFlow “AI-powered”?",
    answer: "Yes, we use a combination of computer vision for recognition and Natural Language Processing (NLP) to understand the grammatical structure of sign languages, ensuring translations are meaningful rather than just word-for-word."
  },
  {
    question: "Why is SignFlow a web app and not a mobile app?",
    answer: "Building for the web first allows us to make the tool accessible on any device with a browser—laptop, tablet, or phone—without requiring downloads or specific operating system versions."
  },
  {
    question: "Does SignFlow replace human interpreters?",
    answer: "No. SignFlow is designed for everyday, casual communication. For medical, legal, or high-stakes situations, we always recommend and advocate for professional human interpreters."
  }
];

export const FAQ = () => {
  // Set 0 to have the first item open by default, or null to have all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full md:py-20 p-5 md:px-[112px] bg-white">
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
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>

                {/* 
                  Smooth Height Animation Wrapper 
                  We use grid-template-rows to animate height from 0 to auto
                */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
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