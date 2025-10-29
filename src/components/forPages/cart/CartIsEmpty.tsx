import { FC } from "react";
import Link from "next/link";

const CartIsEmpty: FC = (): JSX.Element => {
   return (
      <div className="my-16 flex w-full flex-col items-center justify-center gap-6 py-24 text-center">
         <h3 className="text-h3-sm xl:text-h3 font-heading">Your cart is empty</h3>
         <p className="text-p text-dark/60">Browse our catalog and add items to your cart.</p>
         <Link
            href="/products"
            className="mt-2 rounded-none bg-secondary px-6 py-3 text-tertiary transition-colors hover:bg-tertiary hover:text-secondary"
         >
            Shop now
         </Link>
      </div>
   );
};

export default CartIsEmpty;
