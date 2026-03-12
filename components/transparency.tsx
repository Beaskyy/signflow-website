"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const IS_LIST = [
  "An assistive communication tool",
  "Designed for informal, everyday use",
  "Continuously evolving through user feedback",
];

const IS_NOT_LIST = [
  "A replacement for certified interpreters",
  "A guarantee of perfect translation",
  "A one-size-fits-all solution",
];

export const Transparency = () => {
  return (
    <section className="w-full md:py-24 p-5 md:px-[112px] bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="md:text-5xl text-4xl font-medium text-black tracking-[-1.5px]">
            What SignFlow Is and Is Not
          </h2>
          <p className="text-[#7C7C7C] md:text-lg text-base max-w-2xl mx-auto tracking-[-0.2px]">
            We believe in being clear about what our technology can and cannot do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {/* SignFlow is: */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] border border-[#EAEAEA] shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="text-green-600 size-5" />
              </span>
              SignFlow is:
            </h3>
            <ul className="flex flex-col gap-6">
              {IS_LIST.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[#333333] md:text-lg text-base leading-relaxed">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SignFlow is not: */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] border border-[#EAEAEA] shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="text-red-600 size-5" />
              </span>
              SignFlow is not:
            </h3>
            <ul className="flex flex-col gap-6">
              {IS_NOT_LIST.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[#333333] md:text-lg text-base leading-relaxed">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-black font-semibold md:text-2xl text-xl tracking-[-0.5px]">
            Transparency matters.
          </p>
        </div>
      </div>
    </section>
  );
};
