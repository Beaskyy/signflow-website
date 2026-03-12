import Image from "next/image";


export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full md:py-[68px] md:px-[112px] p-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-1.5px] text-center text-[#333333] mb-12">
          How It Works (High-level)
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-auto lg:max-h-[500px]">
          {/* ----- Column 1: Input ----- */}
          <div className="bg-[#FBF7EBE5] rounded-xl p-6 flex flex-col h-full relative overflow-hidden group">
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px]">
              <Image
                src="/how-it-works.png"
                alt="how-it-works"
                width={397.33}
                height={373}
                className="absolute top-0 opacity-80"
              />
            </div>

            <div className="mt-3">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-2">1. Input</h3>
              <p className="text-[#666666] text-sm tracking-[-0.2px] font-medium">
                Users communicate via text, speech, or video.
              </p>
            </div>
          </div>

          {/* ----- Column 2: Processing & Iteration ----- */}
          <div className="flex flex-col gap-3 h-full">
            <div className="flex-1 bg-[#FBF7EBE5] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-3">
                2. Processing
              </h3>
              <p className="text-[#666666] text-sm tracking-[-0.2px]">
                Language input is analysed using a combination of machine-learning models
                and linguistic rules.
              </p>
            </div>

            <div className="flex-1 bg-[#FBF7EBE5] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-3">
                Iteration
              </h3>
              <p className="text-[#666666] text-sm tracking-[-0.2px]">
                Accuracy improves through testing, feedback, and human-in-the-loop review.
              </p>
            </div>
          </div>

          {/* ----- Column 3: Output ----- */}
          <div className="bg-[#FBF7EBE5] rounded-xl p-6 pt-2 flex flex-col h-full">
            <div className="bg-transparent rounded-xl flex items-center justify-center relative min-h-[300px] ml-6">
              <Image src="/hello.png" alt="hello" width={303} height={362} />
            </div>

            <div className="mt-6">
              <h3 className="md:text-2xl text-xl font-medium text-black mb-2">3. Output</h3>
              <p className="text-[#666666] text-sm tracking-[-0.2px]">
                Messages are rendered as sign-language animation or text, designed to
                preserve meaning rather than literal word order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
