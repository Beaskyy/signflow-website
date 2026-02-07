import Image from 'next/image';

const features = [
  {
    icon: <Image src="/erase.svg" alt='erase' width={36} height={36} />,
    title: "Web-based and accessible",
    description: "Works directly in the browser - no downloads, app stores, or device restrictions."
  },
  {
    icon: <Image src="/leaf.svg" alt='leaf' width={36} height={36} />,
    title: "Multimodal input",
    description: "Text, speech, or video - users choose what works best for them."
  },
  {
    icon: <Image src="/globe2.svg" alt='globe' width={36} height={36} />,
    title: "Sign-aware processing",
    description: "Sign languages are treated as languages with their own grammar, not direct translations of spoken language."
  },
  {
    icon: <Image src="/erase.svg" alt='erase' width={36} height={36} />,
    title: "Lightweight by design",
    description: "Built for everyday communication rather than formal or high-stakes interpreting."
  },
  {
    icon: <Image src="/leaf.svg" alt='leaf' width={36} height={36} />,
    title: "Privacy-conscious",
    description: "No unnecessary data capture or storage."
  }
];

export const RealWorldUse = () => {
  return (
    <section className="w-full md:pt-[68px] p-5 md:p-[112px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-medium text-center text-black mb-12">
          Designed for Real-World Use
        </h2>

        {/* Video Placeholder */}
        <div className="w-full bg-[#F5F5F5] rounded-[20px] aspect-video md:aspect-2/1 lg:h-[550px] flex items-center justify-center mb-20 relative overflow-hidden group cursor-pointer">
          {/* Play Button Icon */}
          <div className="w-24 h-24 md:w-32 md:h-32 text-[#D1D1D6] transition-transform duration-300 group-hover:scale-110">
             {/* Using SVG directly for a filled triangle look if Lucide's Play isn't filled enough */}
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
               <path d="M8 5v14l11-7z" />
             </svg>
          </div>
        </div>

        {/* Features Grid */}
        {/* We use Flexbox with wrap and center justification to achieve the 3-then-2 layout */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-[45px]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full md:w-[30%] min-w-[280px] max-w-[352px]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base md:text-lg font-medium tracking-[-0.5px] text-center text-[#333333] mb-1">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#7C7C7C] text-sm tracking-[-0.3px] leading-[150%] max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};