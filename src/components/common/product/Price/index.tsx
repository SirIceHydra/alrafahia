import { FC } from "react";
import calculatePriceAfterDiscount from "@/utils/calculatePriceAfterDiscount";

type TProps = {
   discount: number;
   price: number;
   textSize?: "text-2xl" | "text-3xl";
   smallSize?: boolean;
};

const Price: FC<TProps> = ({ discount, price, textSize = "text-2xl", smallSize = false }): JSX.Element => {
   const { finalPrice } = calculatePriceAfterDiscount(price, discount);

   return (
      <div className="flex flex-wrap items-end gap-x-3">
         {/* Price */}
         {price === 0 ? (
            <span className={`${textSize} font-medium`}>Free</span>
         ) : (
            <>
               <span className={`${textSize} font-medium`}>{`${finalPrice === 0 ? "Free" : `R ${finalPrice}`}`}</span>
               {discount ? (
                  <div className="flex items-center gap-3">
                     {/* Original price (crossed out) */}
                     <del className={`${smallSize ? "text-xl" : textSize} font-medium text-dark/40`}>R {price}</del>
                  </div>
               ) : null}
            </>
         )}
      </div>
   );
};

export default Price;
