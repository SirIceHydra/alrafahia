"use client";

import { FC, useEffect, useRef } from "react";
// IMAGE
import { brands } from "@/public/img";
// COMPONENT
import Image from "next/image";
import { Section, ScrollById } from "@/components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const Brands: FC = (): JSX.Element => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const brandsRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sectionRef.current && brandsRef.current) {
         // Infinite scroll animation for brands
         gsap.to(brandsRef.current, {
            x: -brandsRef.current.scrollWidth / 2,
            duration: 20,
            repeat: -1,
            ease: "none",
         });

         // Fade in animation on scroll
         gsap.fromTo(
            sectionRef.current,
            {
               opacity: 0,
               y: 50,
            },
            {
               opacity: 1,
               y: 0,
               duration: 1,
               scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
               },
            }
         );
      }
   }, []);

   return (
      <Section
         ref={sectionRef}
         parentClassName="h-20 xl:h-32 w-full overflow-hidden"
         style={{ backgroundColor: '#2f303c' }}
         sectionClassName="flex w-full h-full items-center justify-center relative"
      >
         <ScrollById id="brands" className="-mt-96" />

         <div ref={brandsRef} className="flex items-center gap-8 whitespace-nowrap">
            {/* Duplicate brands for infinite scroll */}
            {[...brands, ...brands].map((item, index) => (
               <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
               >
                  <Image
                     src={item.src}
                     width={150}
                     height={150}
                     alt={item.title}
                     title={item.title}
                     className="h-4 w-14 object-scale-down opacity-95 xl:h-9 xl:w-36 filter brightness-0 invert hover:opacity-100 transition-opacity"
                  />
               </motion.div>
            ))}
         </div>
      </Section>
   );
};

export default Brands;
