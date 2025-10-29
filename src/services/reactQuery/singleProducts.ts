import { useQuery } from "react-query";
import { fetchSingleProduct } from "@/services/axios/requests/products";
import { IProductsProps } from "@/components/common/product/type";
import { AxiosError } from "axios";
import { mockProducts } from "@/data/mockProducts";

const GetSingleProducts = (slug: string) => {
   return useQuery<IProductsProps[], AxiosError>(["SingleProduct", slug], async () => {
      try {
         // Use mock data for single product
         const product = mockProducts.find(p => p.slug === slug);
         
         if (!product) {
            throw new Error("Product not found");
         }

         return [product];
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetSingleProducts;
