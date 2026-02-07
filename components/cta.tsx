import Link from "next/link";
import Image from "next/image";

export const CTA = () => {
  return (
    <section
      className="relative w-full py-10 md:py-24 md:pt-8 pb-24 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(0deg, rgba(245, 241, 235, 0.264) 3.85%, rgba(207, 220, 214, 0.93) 52.1%, rgba(253, 253, 253, 0.368) 77.83%),
          linear-gradient(0deg, rgba(78, 75, 75, 0.314), rgba(110, 107, 107, 0.117))
        `,
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        {/* Logo / Icon Area */}
        <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto md:mb-16 mb-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
            // Fallback style just to visualize space if image is missing
            style={{ color: "transparent" }}
          />
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-5xl lg:text-[55px] font-semibold text-black tracking-[-1.5] md:tracking-[-2.5px] mb-4">
          Ready to Flow? No App Store Required.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-[22px] text-[#333333] mb-10 max-w-xl mx-auto font-normal tracking-[-0.42px]">
          Access real-time translation instantly on any device.
        </p>

        {/* Button */}
        <Link
          href="/get-started"
          className="inline-block bg-[#222222] text-white text-base md:text-lg font-medium px-10 py-3.5 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-black hover:shadow-lg"
        >
          Get started
        </Link>
      </div>
    </section>
  );
};
