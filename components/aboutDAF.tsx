 "use client";

import React from 'react';
import { motion } from "framer-motion";

export const AboutDAF = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-20 px-4 md:px-8 bg-white"
    >
      <div className="max-w-[1048px] mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-10 tracking-tight">
          About Deaf Access Foundation (DAF)
        </h2>

        <div className="text-[#7C7C7C] text-sm md:text-base leading-relaxed space-y-1">
          <p>
            Deaf Access Foundation (DAF) is a Nigeria-based organisation working to advance access, inclusion, and opportunity for Deaf and hard-of-hearing communities. The Foundation delivers its work through education and awareness programmes, advocacy and community engagement, accessibility initiatives and empowerment opportunities.
          </p>
          <p>
            SignFlow reflects the Foundation’s commitment to: community-informed design, responsible use of technology, long-term accessibility impact
          </p>
        </div>

      </div>
    </motion.section>
  );
};