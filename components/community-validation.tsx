import Image from "next/image";

const testimonials = [
  {
    image: "/person.svg",
    quote:
      "“I no longer need my sister to come to the bank with me. I have my independence back.”",
    name: "Alex Carter",
    role: "Graphics Designer, Lagos",
  },
  {
    image: "/person.svg",
    quote:
      "“I no longer need my sister to come to the bank with me. I have my independence back.”",
    name: "Alex Carter",
    role: "Graphics Designer, Lagos",
  },
  {
    image: "/person.svg",
    quote:
      "“I no longer need my sister to come to the bank with me. I have my independence back.”",
    name: "Alex Carter",
    role: "Graphics Designer, Lagos",
  },
];

export const CommunityValidation = () => {
  return (
    <section className="w-full md:pt-[68px] p-5 md:p-[112px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-black tracking-[-1.5px]">
            Built for and Loved by millions,
            <br className="hidden md:block" />
            Validated by the community.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[591px] rounded-[32px] overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

             
              <div
                className="absolute bottom-0 left-0 w-full p-6 bg-[#0000000A]"
                style={{
                  backdropFilter: "blur(6.922px)",
                  WebkitBackdropFilter: "blur(6.922px)",
                }}
              >
                <p className="text-white text-sm font-medium leading-relaxed mb-6 tracking-[-0.4px]">
                  {item.quote}
                </p>

                <div>
                  <p className="text-white text-lg font-semibold tracking-[-0.4px]">
                    {item.name}
                  </p>
                  <p className="text-white/80 text-sm tracking-[-0.27px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
