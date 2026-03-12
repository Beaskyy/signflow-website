import Image from "next/image";

const FEATURES_DATA = [
  {
    icon: "/fan.svg",
    alt: "fan",
    title: "Uneven language support",
    description:
      "Many existing sign-language tools prioritise a small number of well-documented sign languages, leaving regional and less-resourced sign languages underrepresented in digital systems and research.",
  },
  {
    icon: "/support.svg",
    alt: "support",
    title: "Everyday accessibility gaps",
    description:
      "There are few lightweight tools designed for informal, day-to-day communication outside of formal interpreting contexts.",
  },
  {
    icon: "/leaf.svg",
    alt: "leaf",
    title: "Collaborative design",
    description:
      "SignFlow is designed to explore these gaps carefully, transparently, and in collaboration with users.",
  },
];

export const Features = () => {
  return (
    <div id="features" className="md:p-[112px] pt-16 p-5 flex flex-col gap-[89px]">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <h3 className="md:text-lg text-base text-[#D4AF37] font-semibold tracking-wide uppercase">
          Sub-headline
        </h3>
        <h2 className="md:text-5xl font-medium text-4xl text-black tracking-[-0.3px] max-w-[974px]">
          Technology-assisted sign-language translation, designed with
          linguistic care.
        </h2>
        <p className="md:text-base text-sm text-[#7C7C7C] tracking-[-0.3px] max-w-[750px]">
          a web-based communication tool designed to support sign-language interaction in
everyday contexts
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="md:text-4xl text-3xl font-medium text-black tracking-[-1px] mb-4">
            The Accessibility Context
          </h2>
          <p className="text-[#7C7C7C] md:text-lg text-base max-w-2xl mx-auto">
            Despite growing interest in AI and Accessibility technology, important gaps remain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          {FEATURES_DATA.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="md:text-xl text-lg font-semibold text-black tracking-[-0.5px]">
                  {feature.title}
                </h4>
                <p className="md:text-base text-sm text-[#7C7C7C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};