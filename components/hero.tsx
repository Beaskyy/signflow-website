 "use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="md:px-16 md:pt-16 md:pb-[71px] p-5 pt-16  bg-linear-to-b from-[#F2F4F6] to-[#AFA189]"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
        <motion.div
          variants={item}
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="flex flex-col gap-6">
            <motion.div variants={item} className="flex flex-col gap-4">
              <h1 className="text-black md:text-5xl text-4xl font-semibold tracking-[-1.5px]">
                Supporting communication across sign, speech, and text.
              </h1>
              <p className="md:text-base text-sm text-[#333333] tracking-[-0.3px]">
                Technology-assisted sign-language translation designed with
                linguistic care for everyday contexts
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-2"
            >
              <div className="w-full max-w-[183px] h-11 rounded-full border-b border-[#D4AF37] py-2.5 pl-5 pr-4 flex justify-center items-center gap-1 bg-[#D4AF37] text-white cursor-pointer">
                <p className="md:text-base text-sm font-medium tracking-[-0.3px] whitespace-nowrap">
                  Try Signflow free
                </p>
                <MoveRight className="size-5" />
              </div>
              <div className="w-full max-w-[203px] h-11 rounded-full border-b border-[#EAEAEA] py-2.5 pl-5 pr-4 flex justify-center items-center gap-1 bg-[#EAEAEA] text-[#222222] cursor-pointer">
                <p className="md:text-base text-sm font-medium tracking-[-0.3px] whitespace-nowrap">
                  Watch Demo (1:30)
                </p>
                <Image src="/play.svg" alt="play" width={20} height={20} />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="flex justify-center items-center w-full max-w-[605px] md:h-[630px] h-80 bg-[#E5E5E5] rounded-[24px]"
        >
          <Image src="/play.png" alt="play" width={175.92} height={52} />
        </motion.div>
      </div>
    </motion.div>
  );
};
