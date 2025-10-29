"use client";

import { FC, useCallback, useState, useEffect, useRef } from "react";
import { email } from "@/utils/yup/email";
import { toast } from "react-toastify";
// COMPONENT
import { Section, Button, Input } from "@/components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

type TProps = {
   className?: string;
};

const Subscribe: FC<TProps> = ({ className }): JSX.Element => {
   const [inputValue, setInputValue] = useState<string>("");
   const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);
   const sectionRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLDivElement>(null);
   const formRef = useRef<HTMLFormElement>(null);

   useEffect(() => {
      if (sectionRef.current && titleRef.current && formRef.current) {
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

         // Animate form
         tl.fromTo(
            formRef.current,
            {
               opacity: 0,
               y: 30,
               scale: 0.95,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.6,
               ease: "power3.out",
            },
            "-=0.4"
         );
      }
   }, []);

   // onClick for button
   const buttonClickHandler = (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();

      setInputValue("");
      setIsButtonDisable(true);
      toast.success("Subscribe Successfully");
   };

   // onChange for input
   const inputOnChangeHandler = useCallback(
      async (ev: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(ev.target.value);

         let isValid: { email: string } | null = null;

         try {
            isValid = await email.validate(
               {
                  email: inputValue,
               },
               { abortEarly: false },
            );
         } catch (err: any) {
            setIsButtonDisable(true);
         }

         isValid && setIsButtonDisable(false);
      },
      [inputValue],
   );

   return (
      <Section parentClassName={className}>
         <motion.div 
            ref={sectionRef}
            className="flex items-center justify-between rounded-20 px-6 py-9 max-xl:flex-col max-xl:gap-8 xl:p-16"
            style={{ backgroundColor: '#2f303c' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <div ref={titleRef} className="items-left flex w-full flex-col justify-center xl:w-2/3">
               <p className="text-left font-heading text-3xl leading-tight text-light xl:-mt-6 xl:w-5/6 xl:text-5xl">
                  Subscribe to our emails
               </p>
            </div>

            <motion.form 
               ref={formRef}
               className="flex flex-col justify-center gap-3 xl:w-1/3"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
               <Input
                  type="email"
                  placeholder="Email"
                  icon
                  value={inputValue}
                  onChange={inputOnChangeHandler}
                  className="max-xl:px-5 max-xl:py-3"
               />
               <Button
                  type="submit"
                  bgColor="white"
                  className="font-extrabold max-xl:px-0 max-xl:py-3 xl:text-lg"
                  disable={isButtonDisable}
                  onClick={buttonClickHandler}
               >
                  Subscribe
               </Button>
            </motion.form>
         </motion.div>
      </Section>
   );
};

export default Subscribe;
