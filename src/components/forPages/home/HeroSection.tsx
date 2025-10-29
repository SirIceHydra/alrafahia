"use client";

// IMAGE
// Removed decorative star icons
// COMPONENT
import Image from "next/image";
import { Section, Button, BigHeading } from "@/components";
import { downArrowIcon } from "@/public/img";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
   const heroRef = useRef<HTMLDivElement>(null);
   const leftContentRef = useRef<HTMLDivElement>(null);
   const rightContentRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (heroRef.current && leftContentRef.current && rightContentRef.current) {
         const tl = gsap.timeline();

         // Animate left content
         tl.fromTo(
            leftContentRef.current.children,
            {
               opacity: 0,
               y: 50,
            },
            {
               opacity: 1,
               y: 0,
               duration: 1,
               stagger: 0.2,
               ease: "power3.out",
            }
         );

         // Animate right content
         tl.fromTo(
            rightContentRef.current,
            {
               opacity: 0,
               scale: 0.8,
            },
            {
               opacity: 1,
               scale: 1,
               duration: 1.2,
               ease: "power3.out",
            },
            "-=0.8"
         );

         // Removed floating animation for decorative icons
      }
   }, []);

   return (
      <Section
         parentClassName="relative bg-cover"
         sectionClassName="min-h-[60vh] xl:min-h-[80vh] flex items-center justify-end"
         style={{ backgroundImage: "url(/img/banner/hero5.png)", backgroundPosition: "center 70%" }}
      >
         {/* TEXT OVER BACKGROUND */}
         <div ref={leftContentRef} className="mt-9 ml-auto flex max-w-3xl flex-col items-end gap-6 text-right">
            <h2 className="text-right text-h1-sm xl:text-h1 font-heading">
               <span className="text-secondary">WELCOME TO</span>
               <span className="text-support"> AL RAFAHIA</span>
            </h2>

            <p className="text-p xl:w-11/12 text-secondary">
               Discover our exclusive collection of laser-cut wall art, featuring elegant designs from BMW, Ferrari, Islamic art, and African-inspired pieces. Each piece is meticulously crafted with premium materials.
            </p>
            <Link href="products" className="max-xl:w-full">
               <Button className="w-full bg-secondary text-tertiary hover:bg-primary hover:text-secondary">
                  Explore
               </Button>
            </Link>

            <div className="mb-16 mt-9 grid grid-cols-2 gap-3 *:grid *:gap-1 max-xl:mx-auto max-xl:text-center xl:flex xl:grid-cols-3 xl:gap-5 xl:*:px-6">
               <div className="max-xl:border-r max-xl:pr-5 xl:!pl-0">
                  <span className="text-h4-sm xl:text-h4 font-heading font-bold">50+</span>
                  <span className="text-small">Unique Designs</span>
               </div>
               <div className="xl:border-x">
                  <span className="text-h4-sm xl:text-h4 font-heading font-bold">100%</span>
                  <span className="text-small">Handcrafted Quality</span>
               </div>
               <div className="max-xl:col-span-2 max-xl:justify-center">
                  <span className="text-h4-sm xl:text-h4 font-heading font-bold">500+</span>
                  <span className="text-small">Happy Customers</span>
               </div>
            </div>
         </div>

         {/* SCROLL DOWN ARROW */}
         <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2">
            <Link href="#products" aria-label="Scroll down">
               <Image src={downArrowIcon} alt="Scroll down" width={28} height={28} className="animate-bounce opacity-90" />
            </Link>
         </div>
      </Section>
   );
};

export default HeroSection;
