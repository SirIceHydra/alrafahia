"use client";

import { FC } from "react";
import { Section, Breadcrumb, BigHeading, CartItem, OrderSummery, CartIsEmpty } from "@/components";
import CrossSells from "./CrossSells";
import { useSelector } from "react-redux";
import { TRootState } from "@/services/redux/store";

const CartComponents: FC = (): JSX.Element => {
   const cart = useSelector((state: TRootState) => state.cart);

   return (
      <Section>
         <div>
            <Breadcrumb />
            <BigHeading tag="h3" title="Your cart" className="text-left" />
         </div>

         {cart.length > 0 ? (
            <div className="mt-9 flex flex-col gap-8 xl:flex-row">
               {/* Cart Items */}
               <main className="flex h-fit flex-col gap-4 *:border-b *:border-grey-100 *:pb-4 last:*:border-b-0 last:*:pb-0 xl:w-2/3">
                  {cart?.map((item: any) => <CartItem key={item.id} {...item} />)}
               </main>

               {/* Summery */}
               <OrderSummery {...cart} />
            </div>
         ) : (
            <CartIsEmpty />
         )}

         {cart.length > 0 && (
            <section className="mt-12">
               <h3 className="mb-6 text-h3-sm xl:text-h3 font-heading">You may also like</h3>
               {/* Cross sells */}
               <CrossSells />
            </section>
         )}
      </Section>
   );
};

export default CartComponents;
