import { FC } from "react";
import { company, faq, help, resources, social } from "./items";

// COMPONENT
import { HorizontalLine, Logo, Section, Social } from "@/components";
import BelowFooter from "./BelowFooter";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="relative mt-24 bg-secondary text-tertiary">
         <Section parentClassName="bg-secondary pt-16">
            <section className="flex max-xl:flex-col text-tertiary">
               {/* Info */}
               <div className="xl:w-1/3">
                  <div className="flex flex-col gap-5 xl:w-2/3">
                     <Logo />
                     <p className="cursor-default text-base text-tertiary/80 transition-[color] hover:text-tertiary">
                        Premium laser-cut wall art featuring automotive, Islamic, and African-inspired designs. Handcrafted with precision and premium materials.
                     </p>

                     <Social />
                  </div>
               </div>

               {/* Links */}
               <div className="grid grid-cols-2 gap-y-9 *:flex *:flex-col *:gap-6 max-xl:mt-9 max-xl:*:gap-4 xl:w-2/3 xl:grid-cols-4 xl:gap-20">
                  <div>
                     <span className="font-bold uppercase tracking-widest">company</span>
                     <ul className="flex flex-col gap-4 text-tertiary/80 *:w-fit *:transition-[color] hover:*:text-tertiary">
                        {company.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">help</span>
                     <ul className="flex flex-col gap-4 text-tertiary/80 *:w-fit *:transition-[color] hover:*:text-tertiary">
                        {help.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">faq</span>
                     <ul className="flex flex-col gap-4 text-tertiary/80 *:w-fit *:transition-[color] hover:*:text-tertiary">
                        {faq.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">resources</span>
                     <ul className="flex flex-col gap-4 text-tertiary/80 *:w-fit *:transition-[color] hover:*:text-tertiary">
                        {resources.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            <HorizontalLine />

            <BelowFooter />
         </Section>
      </footer>
   );
};

export default Footer;
