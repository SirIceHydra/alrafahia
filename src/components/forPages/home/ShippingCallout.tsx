"use client";

import { FC, memo } from "react";

const ShippingCallout: FC = (): JSX.Element => {
   return (
      <section className="w-full bg-secondary py-8">
         <div className="container flex items-center justify-between gap-6 max-xl:flex-col max-xl:text-center">
            <h3 className="text-h3-sm xl:text-h3 font-heading text-tertiary">
               FREE SHIPPING ON ORDERS OVER <span className="text-support">R 500</span>
            </h3>
            <p className="text-p lg:w-1/2 text-tertiary">
               Enjoy fast, reliable shipping. The discount is applied automatically at checkout when your basket exceeds the threshold.
            </p>
         </div>
      </section>
   );
};

export default memo(ShippingCallout);


