"use client";

import { FC, memo, useEffect, useRef } from "react";
import { toast } from "react-toastify";
// TYPE
import { TVitrineProps } from "./type";
import { IProducts } from "@/components/common/product/type";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton, ScrollById, BigHeading } from "@/components";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// GET DATA FROM SERVER
import GetVitrineProducts from "@/services/reactQuery/vitrineProducts";
// ANIMATIONS
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const Vitrine: FC<TVitrineProps> = ({ title, sortBy, order, buttonHref, productShowCount, id }): JSX.Element => {
   const {
      data: products,
      isLoading,
      isError,
      error,
   } = GetVitrineProducts({ limit: productShowCount, sortBy: sortBy === "createdAt" ? "createdAt" : "saleCount", order });

   const sectionRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLDivElement>(null);
   const productsRef = useRef<HTMLDivElement>(null);
   const buttonRef = useRef<HTMLDivElement>(null);

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   useEffect(() => {
      if (sectionRef.current && titleRef.current && productsRef.current && buttonRef.current) {
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

         // Animate products
         tl.fromTo(
            productsRef.current.children,
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
               stagger: 0.1,
               ease: "power3.out",
            },
            "-=0.4"
         );

         // Animate button
         tl.fromTo(
            buttonRef.current,
            {
               opacity: 0,
               y: 20,
            },
            {
               opacity: 1,
               y: 0,
               duration: 0.5,
               ease: "power3.out",
            },
            "-=0.2"
         );
      }
   }, [products, isLoading]);

   return (
      <Section ref={sectionRef} parentClassName="my-16" sectionClassName="flex flex-col items-center gap-14">
         <ScrollById id={id} />

         <div ref={titleRef}>
            <h2 className="text-center text-h2-sm xl:text-h2 font-heading">
               <span className="text-support">FEATURED</span> PRODUCTS
            </h2>
         </div>

         {isLoading || isError ? (
            //  Skeleton loading
            <div ref={productsRef} className="vitrineProductsSkeleton">
               {Array(productShowCount)
                  .fill(0)
                  .map((_, index) => (
                     <ProductCardSkeleton key={index} />
                  ))}
            </div>
         ) : (
            <div ref={productsRef} className="w-full">
               <Swiper spaceBetween={15} slidesPerView={"auto"} className="w-full">
                  {products?.map((item: IProducts) => (
                     <SwiperSlide key={item.id} className="w-fit">
                        <ProductCard {...item} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         )}

         <div ref={buttonRef}>
            <Link href={buttonHref} className="inline-block max-xl:w-full">
               <button className="group relative inline-flex items-center gap-2 px-2 py-2 text-lg font-semibold text-support transition-colors hover:text-support/90">
                  <span>View All</span>
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-0 bg-support transition-[width] duration-300 ease-out group-hover:w-full" />
               </button>
            </Link>
         </div>
      </Section>
   );
};

export default memo(Vitrine);
