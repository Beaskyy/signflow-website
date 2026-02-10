 "use client";

 import { motion } from "framer-motion";
 import React from "react";

 const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.5,
       ease: [0.16, 1, 0.3, 1],
     },
   },
 };

 type MotionSectionProps = React.HTMLAttributes<HTMLElement> & {
   as?: keyof JSX.IntrinsicElements;
   delay?: number;
 };

 export function MotionSection({
   as: Tag = "section",
   delay = 0,
   children,
   className = "",
   ...rest
 }: MotionSectionProps) {
   return (
     <motion.section
       as={Tag as any}
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
       {...rest}
     >
       {children}
     </motion.section>
   );
 }

