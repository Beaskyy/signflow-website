import { Plus, Mic, Volume2, Send, X, MoreHorizontal } from "lucide-react";
import Image from "next/image";

// 1. Define static heights so the server and client render the exact same UI
const WAVEFORM_HEIGHTS = [
  8, 14, 10, 18, 20, 12, 6, 16, 14, 10, 8, 18, 12, 6, 14, 10, 8, 16, 10, 12,
];

export const HowItWorks = () => {
  return (
    <section className="w-full md:py-[68px] md:px-[112px] p-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-1.5px] text-center text-[#333333] mb-12">
          How it works
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-auto lg:h-[500px]">
          {/* ----- Column 1: Input ----- */}
          <div className="bg-[#FBF7EBE5] rounded-xl p-6 flex flex-col h-full relative overflow-hidden group">
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px]">
              <Image
                src="/how-it-works.png"
                alt="how-it-works"
                width={397.33}
                height={373}
                className="absolute top-0"
              />
            </div>

            <div className="mt-3">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-2">Input</h3>
              <p className="text-[#7C7C7C] text-sm tracking-[-0.2px]">
                Users communicate via text, speech, or video.
              </p>
            </div>
          </div>

          {/* ----- Column 2: Processing & Iteration ----- */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1 bg-[#FBF7EBE5] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-3">
                Processing
              </h3>
              <p className="text-[#7C7C7C] text-sm tracking-[-0.2px]">
                Language input is analysed using a combination of
                machine-learning models and linguistic rules.
              </p>
            </div>

            <div className="flex-1 bg-[#FBF7EBE5] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-3">
                Iteration
              </h3>
              <p className="text-gray-500 text-sm tracking-[-0.2px]">
                Accuracy improves through testing, feedback, and
                human-in-the-loop review.
              </p>
            </div>
          </div>

          {/* ----- Column 3: Output ----- */}
          <div className="bg-[#FBF7EBE5] rounded-xl p-6 pt-2 flex flex-col h-full">
            <div className="bg-transparent rounded-xl flex items-center justify-center relative min-h-[300px] ml-6">
            <Image src="/hello.png" alt="hello" width={303} height={362} />
            </div>

            <div className="mt-4">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-2">Output</h3>
              <p className="text-[#7C7C7C] text-sm tracking-[-0.2px]">
                Messages are delivered as sign-language animation or text,
                prioritizing meaning over literal word order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
