import { FC, memo } from "react";
import { filter } from "@/public/img";
import Image from "next/image";
import HorizontalLine from "@/components/layout/HorizontalLine";
// Filter items
import CategoriesFilter from "./CategoriesFilter";
import BrandsFilter from "./BrandsFilter";
import PriceFilter from "./PriceFilter";
import Title from "./Title";
// import ColorsFilter from "./ColorsFilter";
import ResetFilters from "./ResetFilters";
import { CloseButton } from "@/components";

type TProps = {
   onSelectCategory: (label: string) => void;
   selectedCategory: string;
   onSelectColor: (color: string) => void;
   selectedColor: string;
   onPriceChange: (_: Event, prices: number | number[]) => void;
   prices: number | number[];
   resetFilterOnClick: () => void;
   onFilterClose: () => void;
   isCloseFilter: boolean;
   sliderBound: [number, number];
};

const Filters: FC<TProps> = ({
   onSelectCategory,
   selectedCategory,
   resetFilterOnClick,
   onFilterClose,
   onPriceChange,
   prices,
   sliderBound,
   isCloseFilter,
   onSelectColor,
   selectedColor,
}): JSX.Element => {
   return (
      <section
         className={`${isCloseFilter ? "top-0" : "top-full"} duration-400 fixed left-0 h-full w-full overflow-y-auto no-scrollbar bg-light p-5 transition-[top] max-xl:z-50 max-xl:shadow-none xl:sticky xl:top-32 xl:max-h-[calc(100vh-8rem)] xl:w-1/4`}
      >
         {/* Title */}
         <div className="flex items-center justify-between">
            <Title title="Filters" />
            <Image src={filter} alt="filter" width={20} height={20} className="size-5 max-xl:hidden" />
            <CloseButton onClick={onFilterClose} />
         </div>

         <HorizontalLine className="my-5" />
         <div>
            <CategoriesFilter onClick={onSelectCategory} selectedCategory={selectedCategory} />
         </div>

         <HorizontalLine className="my-5" />
         {/* Brands */}
         <BrandsFilter />

         <HorizontalLine className="my-5" />
         {/* Price slider */}
         <PriceFilter onPriceChange={onPriceChange} prices={prices} sliderBound={sliderBound} />

         <HorizontalLine className="my-5" />
         {/* Sort by */}
         <div className="flex flex-col gap-3">
            <Title title="Sort by" />
            <div className="flex flex-col gap-2">
               <label className="flex items-center gap-2">
                  <input type="radio" name="sort" className="size-4" />
                  <span>Price</span>
               </label>
               <label className="flex items-center gap-2">
                  <input type="radio" name="sort" className="size-4" />
                  <span>Name</span>
               </label>
               <label className="flex items-center gap-2">
                  <input type="radio" name="sort" className="size-4" />
                  <span>Date listed</span>
               </label>
            </div>
         </div>

         <HorizontalLine className="my-5" />
         {/* On sale */}
         <label className="mt-2 flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="size-4" />
            <span>On sale</span>
         </label>

         <HorizontalLine className="my-5" />
         <ResetFilters resetFilterOnClick={resetFilterOnClick} />
      </section>
   );
};

export default memo(Filters);
