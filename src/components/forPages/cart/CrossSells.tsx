"use client";

import { FC } from "react";
import GetVitrineProducts from "@/services/reactQuery/vitrineProducts";
import { ProductCard, ProductCardSkeleton } from "@/components";

const CrossSells: FC = (): JSX.Element => {
   const { data: products, isLoading, isError } = GetVitrineProducts({ limit: 4, sortBy: "saleCount", order: "descending" });

   if (isLoading || isError) {
      return (
         <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 xl:scale-90 xl:origin-top-left">
            {Array(4)
               .fill(0)
               .map((_, idx) => (
                  <ProductCardSkeleton key={idx} />
               ))}
         </div>
      );
   }

   return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 xl:scale-90 xl:origin-top-left">
         {products?.map((p) => (
            <ProductCard key={p.id} {...p} />
         ))}
      </div>
   );
};

export default CrossSells;


