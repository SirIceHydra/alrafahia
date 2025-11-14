"use client";

// COMPONENT
import { Section, Button } from "@/components";
import Link from "next/link";
import { useEffect, useRef } from "react";
// CAROUSEL
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
   const heroRef = useRef<HTMLDivElement>(null);
   const leftContentRef = useRef<HTMLDivElement>(null);
   const rightContentRef = useRef<HTMLDivElement>(null);

   const heroImages = [
      "/img/banner/hero5.png",
      "/braai.webp",
      "/img/banner/hero3.png",
      "/fireplace.jpg",
   ];

   useEffect(() => {
      const run = async () => {
         if (!heroRef.current || !leftContentRef.current || !rightContentRef.current) return;

         const { gsap } = await import("gsap");
         const { ScrollTrigger } = await import("gsap/ScrollTrigger");
         gsap.registerPlugin(ScrollTrigger);

         const timeline = gsap.timeline();

         timeline.fromTo(
            leftContentRef.current.children,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
         );

         timeline.fromTo(
            rightContentRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
            "-=0.8"
         );
      };

      run();
   }, []);

   return (
      <Section
         parentClassName="relative bg-cover"
         sectionClassName="relative min-h-[60vh] xl:min-h-[80vh] flex items-center justify-end"
         fluid
      >
         {/* BACKGROUND CAROUSEL */}
         <div className="absolute inset-0">
            <Swiper
               modules={[Autoplay, Pagination]}
               slidesPerView={1}
               loop
               autoplay={{ delay: 5000, disableOnInteraction: false }}
               pagination={{ clickable: false }}
               className="h-full w-full"
            >
               {heroImages.map((src, index) => (
                  <SwiperSlide key={src}>
                     <div
                        className="h-full w-full bg-cover"
                        style={{ 
                           backgroundImage: `url(${src})`, 
                           backgroundPosition: "center 70%",
                           transform: index === 3 ? "scaleX(-1)" : "none"
                        }}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         {/* TEXT OVER BACKGROUND */}
         <div className="container relative z-10">
            <div ref={leftContentRef} className="mt-9 ml-auto flex max-w-3xl flex-col items-end gap-6 text-right relative rounded-2xl overflow-hidden pr-8 xl:pr-12 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:backdrop-blur-md before:pointer-events-none before:-z-20 after:content-[''] after:absolute after:inset-2 after:rounded-2xl after:ring-1 after:ring-white/40 after:pointer-events-none after:-z-10">
               <h2 className="text-right text-h1-sm xl:text-h1 font-heading">
                  <span className="text-secondary">WELCOME TO</span>
                  <span className="text-support"> AL RAFAHIA</span>
               </h2>

               <p className="text-p xl:w-11/12 text-secondary">
               From custom wall art to premium braais and fireplaces — expertly laser-cut, locally made, and crafted to last.
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
         </div>

      </Section>
   );
};

export default HeroSection;
