 "use client";

import React from 'react';
import { motion, type Variants } from "framer-motion";

// A simple placeholder graphic matching your mockup's grey boxes with shapes
const PlaceholderGraphic = () => (
  <div className="w-full h-full flex items-center justify-center gap-2 opacity-10">
    <div className="w-12 h-12 rounded-full bg-black"></div>
    <div className="w-0 h-0 border-l-24 border-r-24 border-b-48 border-l-transparent border-r-transparent border-b-black"></div>
    <div className="w-12 h-12 bg-black"></div>
  </div>
);

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const SectionItem = ({ 
  title, 
  description, 
  reverse = false 
}: { 
  title: string; 
  description: string; 
  reverse?: boolean; 
}) => {
  return (
    <motion.div 
      variants={rowVariants}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Image / Graphic Side */}
      <div className="w-full md:w-1/2">
        <div className="bg-[#EAEAEA] rounded-[24px] aspect-4/3 flex items-center justify-center w-full">
            {/* Replace this div with <Image src="..." /> when you have real assets */}
            <PlaceholderGraphic />
        </div>
      </div>

      {/* Text Content Side */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-medium text-black mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[564px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const CorePurpose = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full md:py-20 p5 md:px-8 bg-white">
      <div className="max-w-[1216px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-[40px] font-medium text-black tracking-[-1.5px] mb-3">
            Our Core Purpose,
          </h2>
          <span className="text-3xl md:text-5xl font-medium text-[#D4AF37] tracking-[-1.5px]">
             Mission & Vision
          </span>
        </div>

        {/* Content Rows */}
        <div className="space-y-[120px]">
          
          {/* 1. Our Mission */}
          <SectionItem 
            title="Our Mission"
            description="To advance access, inclusion, and opportunity for the Deaf and hard-of-hearing community through education, advocacy, and practical initiatives."
          />

          {/* 2. Our Vision (Reversed Layout) */}
          <SectionItem 
            title="Our Vision"
            description="To support environments where communication access is actively considered, resourced, and embedded."
            reverse={true}
          />

          {/* 3. The Approach */}
          <SectionItem 
            title="The Approach"
            description="We take a measured, research-informed approach to exploring what digital tools can realistically support."
          />

        </div>
      </div>
    </motion.section>
  );
};