"use client";

import { FC } from "react";
import { IProductCard } from "./type";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCartAction } from "@/services/redux/slice/cart";

const ProductCard: FC<IProductCard> = ({ id, slug, price, title, imgs, discount }): JSX.Element => {
   const dispatch = useDispatch();

   const addToCart = () => {
      dispatch(
         addToCartAction({
            id,
            title,
            price,
            discount,
            mainImage: imgs[0],
            slug,
            selectedColor: "",
            selectedSize: "",
         })
      );
   };

   return (
      <motion.div
         className="productCard group/productCard overflow-hidden"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         whileHover={{ y: -5 }}
      >
         {/* IMAGE */}
         <Link href={slug} title={title}>
            <div className="productImgWrapper relative overflow-hidden rounded-none">
               <Image
                  src={imgs[0]}
                  width={1000}
                  height={1000}
                  draggable="false"
                  alt={title}
                  className="size-full transition-transform group-hover/productCard:scale-110 rounded-none"
               />

               {/* no overlay */}
            </div>
         </Link>

         <Link href={slug} title={title} className="mt-2 block w-full overflow-hidden">
            <h2 className="line-clamp-1 w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium capitalize transition-colors">
               {title}
            </h2>
         </Link>

         <div className="w-full overflow-hidden">
            <Price price={price} discount={discount} />
         </div>

         {/* Hover Add to Cart under price with sharp edges */}
         <div className="pointer-events-none mt-3 opacity-0 transition-opacity group-hover/productCard:opacity-100 group-hover/productCard:pointer-events-auto">
            <button
               onClick={(e) => { e.preventDefault(); addToCart(); }}
               className="w-full rounded-none bg-secondary px-4 py-2 text-tertiary transition-colors hover:bg-gray-900"
            >
               Add to Cart
            </button>
         </div>
      </motion.div>
   );
};

export default ProductCard;
