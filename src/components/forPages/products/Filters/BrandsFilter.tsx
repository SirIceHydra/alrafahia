"use client";

import { FC, memo, useState } from "react";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";

const brands = ["BMW", "Ferrari", "Porsche", "Custom"] as const;

const BrandsFilter: FC = (): JSX.Element => {
   const [open, setOpen] = useState<boolean>(true);
   const [selected, setSelected] = useState<Record<string, boolean>>({});

   const toggle = (label: string) =>
      setSelected((prev) => ({ ...prev, [label]: !prev[label] }));

   return (
      <div className="flex flex-col gap-3">
         <button onClick={() => setOpen((v) => !v)} className="flex items-center justify-between py-2">
            <span className="text-h6 font-heading">Brands</span>
            <Image src={downArrowIcon} alt="toggle" width={12} height={12} className={`size-3 transition-transform ${open ? "rotate-0" : "-rotate-90"}`} />
         </button>

         {open && (
            <div className="flex flex-col gap-2 pl-1">
               {brands.map((label) => (
                  <label key={label} className="flex cursor-pointer items-center gap-2">
                     <input
                        type="checkbox"
                        checked={!!selected[label]}
                        onChange={() => toggle(label)}
                        className="size-4"
                     />
                     <span className="capitalize">{label}</span>
                  </label>
               ))}
            </div>
         )}
      </div>
   );
};

export default memo(BrandsFilter);


