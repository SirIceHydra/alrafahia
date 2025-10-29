"use client";

import { FC } from "react";
// chevrons via text glyphs for a minimal look

type TProps = {
   currentPageNumber: number;
   endPageNumber: number;
   nextPage: () => void;
   prevPage: () => void;
};

const ProductsPagination: FC<TProps> = ({ currentPageNumber, nextPage, prevPage, endPageNumber }): JSX.Element => {
   return (
      <nav>
         <ul className="flex items-center justify-between font-semibold">
            <li
               onClick={prevPage}
               className={`${currentPageNumber === 1 ? "cursor-default opacity-40" : "cursor-pointer hover:text-support"} flex select-none items-center gap-2 px-2 py-2 transition-colors`}
            >
               <span className="text-2xl leading-none">‹</span>
               Previous
            </li>

            <div className="flex items-center gap-2 *:cursor-default *:select-none">
               <li className="px-2 py-2">{currentPageNumber}</li>
            </div>

            <li
               onClick={nextPage}
               className={`${currentPageNumber === endPageNumber ? "cursor-default opacity-40" : "cursor-pointer hover:text-support"} flex select-none items-center gap-2 px-2 py-2 transition-colors`}
            >
               Next
               <span className="text-2xl leading-none">›</span>
            </li>
         </ul>
      </nav>
   );
};

export default ProductsPagination;
