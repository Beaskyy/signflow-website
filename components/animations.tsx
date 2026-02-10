 "use client";

 import { motion, type Transition } from "framer-motion";
 import React from "react";

 const fadeEase: Transition["ease"] = [0.16, 1, 0.3, 1];

 const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.5,
       ease: fadeEase,
     },
   },
 };

 type MotionSectionProps = {
   className?: string;
   delay?: number;
   children?: React.ReactNode;
 };

 export function MotionSection({
   delay = 0,
   children,
   className = "",
 }: MotionSectionProps) {
   return (
     <motion.section
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.2 }}
       variants={{
         hidden: fadeUp.hidden,
         visible: {
           ...fadeUp.visible,
           transition: {
             ...fadeUp.visible.transition,
             delay,
           },
         },
       }}
       className={className}
     >
       {children}
     </motion.section>
   );
 }

