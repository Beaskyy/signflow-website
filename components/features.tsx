import Image from "next/image";

const FEATURES_DATA = [
  {
    icon: "/fan.svg",
    alt: "fan",
    title: "The Accessibility Context",
    description:
      "Despite growing interest in AI and Accessibility technology, important gaps remain.",
  },
  {
    icon: "/support.svg",
    alt: "support",
    title: "Uneven language support",
    description:
      "Most existing sign-language tools focus on a few well-documented languages, neglecting regional and less-resourced sign languages in digital systems and research.",
  },
  {
    icon: "/leaf.svg",
    alt: "leaf",
    title: "Everyday accessibility gaps",
    description:
      "There are few lightweight tools designed for informal, day-to-day communication outside of formal interpreting contexts.",
  },
];

export const Features = () => {
  return (
    <div id="features" className="md:p-[112px] pt-16 p-5 flex flex-col gap-[89px]">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <h2 className="md:text-5xl font-medium text-4xl text-black tracking-[-0.3px] max-w-[974px]">
          Technology-assisted sign-language translation, designed with
          linguistic care
        </h2>
        <p className="md:text-base text-sm text-[#7C7C7C] tracking-[-0.3px] max-w-[750px]">
          SignFlow combines machine-learning techniques with rule-based language
          processing to support sign-language communication while acknowledging
          the complexity and nuance of signed languages.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {FEATURES_DATA.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center text-center"
          >
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={36}
              height={36}
            />
            <div className="flex flex-col gap-1">
              <h4 className="md:text-lg text-base text-black tracking-[-0.5px]">
                {feature.title}
              </h4>
              <p className="md:text-base text-sm text-[#7C7C7C] tracking-[-0.3px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};