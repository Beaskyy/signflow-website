 "use client";

 import { usePathname } from "next/navigation";
 import { AnimatePresence, motion } from "framer-motion";
 import React from "react";

 const variants = {
   initial: {
     opacity: 0,
     y: 16,
   },
   animate: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.4,
       ease: [0.16, 1, 0.3, 1],
     },
   },
   exit: {
     opacity: 0,
     y: -12,
     transition: {
       duration: 0.25,
       ease: [0.16, 1, 0.3, 1],
     },
   },
 };

 export function PageTransition({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();

   return (
     <AnimatePresence mode="wait">
       <motion.div
         key={pathname}
         variants={variants}
         initial="initial"
         animate="animate"
         exit="exit"
         className="min-h-screen"
       >
         {children}
       </motion.div>
     </AnimatePresence>
   );
 }

