"use client";

import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const DATA = [
  {
    id: 1,
    title: "Type text",
    description:
      "Simply type your message and let our AI handle the translation instantly.",
    videoColor: "bg-yellow-100", // Placeholder for actual video source
  },
  {
    id: 2,
    title: "Speak naturally",
    description:
      "Use voice input to communicate freely without typing a single word.",
    videoColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Upload short video input",
    description: "Record yourself signing and get text output in seconds.",
    videoColor: "bg-green-100",
  },
  {
    id: 4,
    title: "Receive sign-language output",
    description: "Get visual sign language representation for any text input.",
    videoColor: "bg-purple-100",
  },
];

export const FeaturShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Optional: Auto-rotate through the features every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % DATA.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="md:p-[112px] pt-[68px] flex flex-col items-center gap-20">
      <h2 className="md:text-5xl text-4xl font-medium text-[#D4AF37] tracking-[-0.3px] text-center">
        <span className="text-black">One tool,</span> <br /> Multiple ways to
        communicate
      </h2>

      <section className="py-20 px-5 max-w-7xl mx-auto flex flex-col gap-[89px]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xl md:text-[28px] text-black tracking-[-1.8px]">
                SignFlow is for practical, everyday use, not high-risk or
                specialist interpreting.
              </p>
            </div>

            <div
              className="flex flex-col gap-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {DATA.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className="flex flex-row items-center gap-6 cursor-pointer group"
                  >
                    {/* CUSTOM ROUNDED BAR */}
                    <div
                      className={`
                      w-1 h-[43px] rounded-full transition-colors duration-300 ease-in-out shrink-0
                      ${isActive ? "bg-[#D4AF37]" : "bg-[#EAEAEA] group-hover:bg-gray-300"}
                    `}
                    />

                    {/* Text */}
                    <h3
                      className={`
                      md:text-lg text-base tracking-[-0.5px] font-medium transition-colors duration-300
                      ${isActive ? "text-black" : "text-[#00000066] group-hover:text-gray-600"}
                    `}
                    >
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Video/Image Display */}
          <div className="relative w-full max-w-[696px] md:h-[504px] aspect-video rounded-2xl overflow-hidden bg-gray-[#F5F5F5] shadow-lg">
            <div
              className={`w-full h-full flex items-center justify-center transition-colors duration-500 ${DATA[activeIndex].videoColor}`}
            >
              {/* Replace this with your actual Video component */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
                  <Play
                    className="ml-1 w-6 h-6 text-[#D2D2D2]"
                    fill="currentColor"
                  />
                </div>
                <span className="font-semibold text-gray-700">
                  {DATA[activeIndex].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
