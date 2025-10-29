"use client";

import { FC, useEffect, useRef } from "react";
import { Section, BigHeading, Button } from "@/components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const CustomDevelopment: FC = (): JSX.Element => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sectionRef.current && contentRef.current) {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         });

         // Animate content
         tl.fromTo(
            contentRef.current.children,
            {
               opacity: 0,
               y: 30,
            },
            {
               opacity: 1,
               y: 0,
               duration: 0.8,
               stagger: 0.2,
               ease: "power3.out",
            }
         );
      }
   }, []);

   return (
      <Section ref={sectionRef} parentClassName="py-12" style={{ backgroundColor: '#2f303c' }}>
         <div ref={contentRef} className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:items-center">
            <div className="text-center xl:text-left">
               <h2 className="text-h2-sm xl:text-h2 font-heading text-primary mb-4">
                  Custom Development Services
               </h2>
               <p className="text-p-lg text-white/80 max-w-2xl">
                  Transform your ideas into stunning laser-cut masterpieces with our precision engineering and premium materials.
               </p>
            </div>
            
            <Link href="/contact" className="xl:ml-8">
               <Button bgColor="white" className="px-8 py-3 text-dark">
                  Get Custom Quote
               </Button>
            </Link>
         </div>
      </Section>
   );
};

export default CustomDevelopment;
