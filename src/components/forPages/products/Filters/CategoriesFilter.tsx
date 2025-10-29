"use client";

import { FC, memo, useState } from "react";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";

const categories: {
   label: string;
}[] = [{ label: "T-Shirt" }, { label: "Shoe" }, { label: "Trousers" }];

type TProps = {
   selectedCategory: string;
   onClick: (label: string) => void;
};

const CategoriesFilter: FC<TProps> = ({ onClick, selectedCategory }): JSX.Element => {
   const [open, setOpen] = useState<boolean>(true);

   return (
      <div className="flex flex-col gap-3">
         <button onClick={() => setOpen((v) => !v)} className="flex items-center justify-between py-2">
            <span className="text-h6 font-heading">Categories</span>
            <Image src={downArrowIcon} alt="toggle" width={12} height={12} className={`size-3 transition-transform ${open ? "rotate-0" : "-rotate-90"}`} />
         </button>

         {open && (
            <div className="flex flex-col gap-2 pl-1">
               {categories.map(({ label }) => (
                  <label key={label} className="flex cursor-pointer items-center gap-2">
                     <input type="checkbox" checked={selectedCategory === label} onChange={() => onClick(label)} className="size-4" />
                     <span className="capitalize">{label}</span>
                  </label>
               ))}
            </div>
         )}
      </div>
   );
};

export default memo(CategoriesFilter);
