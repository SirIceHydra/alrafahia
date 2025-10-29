"use client";

import { FC, useEffect, useRef } from "react";
// IMAGE
import { gallery1, gallery2, gallery3, gallery4 } from "@/public/img";
// COMPONENT
import { Section, BigHeading } from "@/components";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

export type GalleryItemsType = {
   alt: string;
   href: string;
   title: string;
   src: StaticImageData;
   parentClassName: string;
};

const galleryItems: GalleryItemsType[] = [
   { src: gallery1, title: "Automotive", parentClassName: "col-span-1", alt: "Automotive", href: "/products?category=automotive" },
   { src: gallery2, title: "Islamic Art", parentClassName: "col-span-1", alt: "Islamic Art", href: "/products?category=islamic" },
   { src: gallery3, title: "African Art", parentClassName: "col-span-1", alt: "African Art", href: "/products?category=african" },
   { src: gallery4, title: "Custom", parentClassName: "col-span-1", alt: "Custom", href: "/products?category=custom" },
];

const Gallery: FC = (): JSX.Element => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLDivElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sectionRef.current && titleRef.current && gridRef.current) {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         });

         // Animate title
         tl.fromTo(
            titleRef.current,
            {
               opacity: 0,
               y: 50,
            },
            {
               opacity: 1,
               y: 0,
               duration: 0.8,
               ease: "power3.out",
            }
         );

         // Animate gallery items
         tl.fromTo(
            gridRef.current.children,
            {
               opacity: 0,
               y: 30,
               scale: 0.9,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.6,
               stagger: 0.15,
               ease: "power3.out",
            },
            "-=0.4"
         );
      }
   }, []);

   return (
      <Section ref={sectionRef} fluid>
         <div className="flex flex-col items-center gap-9 bg-grey-100 px-0 py-6 xl:gap-12 xl:px-0 xl:py-12">
            <div ref={titleRef}>
            <h2 className="text-center text-h2-sm xl:text-h2 font-heading">
               <span>BROWSE BY</span> <span className="text-support">CATEGORY</span>
            </h2>
            </div>
            {/* Horizontal marquee */}
            <div className="relative w-screen overflow-hidden">
               {/* Duplicate the track 2x so translateX(-50%) loops seamlessly */}
               <div className="inline-flex w-max animate-marquee hover:[animation-play-state:paused]" ref={gridRef}>
                  {[...galleryItems, ...galleryItems].map((item: GalleryItemsType, index) => (
                     <Link
                        key={`${item.title}-${index}`}
                        href={item.href}
                        className="relative group mx-3 w-[70vw] max-w-[360px] aspect-[4/5] overflow-hidden rounded-none xl:w-[380px] shrink-0"
                     >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10"></div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-secondary opacity-0 hover:opacity-40 transition-opacity z-20"></div>
                        <h3 className="absolute left-4 bottom-4 z-30 text-h5-sm xl:text-h5 font-bold capitalize text-white drop-shadow-lg transition-colors">
                           {item.title}
                        </h3>
                        <Image
                           src={item.src}
                           width={600}
                           height={400}
                           alt={item.alt}
                           draggable={false}
                           className="size-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-none"
                        />
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </Section>
   );
};

export default Gallery;
