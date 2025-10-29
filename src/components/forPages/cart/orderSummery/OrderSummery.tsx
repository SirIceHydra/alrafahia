import { FC } from "react";
import { HorizontalLine } from "@/components";
import { TCartItem } from "@/types/cart";
import calculateCartSummary from "@/utils/calculateCartSummary";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCartAction } from "@/services/redux/slice/cart";

const OrderSummery: FC<TCartItem[]> = (prop): JSX.Element => {
   const { subtotal, totalDiscount, totalQuantity, total } = calculateCartSummary(prop);
   const dispatch = useDispatch();

   return (
      <section className="top-32 flex h-fit flex-col gap-5 p-0 text-2xl xl:sticky xl:w-1/3 xl:border-l xl:pl-8">
         <div className="flex items-end justify-between">
            <h3 className="font-heading text-h6">Order Summary</h3>
            <span className="text-xl text-dark/70">
               {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}
            </span>
         </div>
         <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Subtotal</span>
               <span className="font-bold">R {subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Discount</span>
               <span className="font-bold text-discount">-R {totalDiscount}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Delivery Fee</span>
               <span className="font-bold">R 15</span>
            </div>
         </div>

         <HorizontalLine className="my-3" />

         <div className="flex items-center justify-between">
            <span className="text-dark">Total</span>
            <span className="font-bold">R {total}</span>
         </div>

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-3">
         <Link
            href="/checkout"
            className="w-full rounded-none bg-secondary px-4 py-3 text-center text-tertiary transition-colors hover:bg-tertiary hover:text-secondary"
         >
            Checkout
         </Link>

         <div className="flex items-center justify-between text-sm">
            <Link href="/products" className="text-support hover:opacity-80">
               Continue shopping
            </Link>
            <button onClick={() => dispatch(clearCartAction())} className="text-dark/60 transition-colors hover:text-dark">
               Clear cart
            </button>
         </div>
      </div>
      </section>
   );
};

export default OrderSummery;
