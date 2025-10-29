import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchLimitProducts } from "@/services/axios/requests/products";
import { fetchLimitProductsType } from "@/services/axios/requests/products/type";
import { mockProducts, getFeaturedProducts } from "@/data/mockProducts";

const GetVitrineProducts = ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<IProductsProps[], AxiosError>(sortBy, async () => {
      try {
         // Use mock data for alrafahia.co.za products
         let products = [...mockProducts];
         
         // Sort products based on sortBy and order
         if (sortBy === "createdAt") {
            products.sort((a, b) => {
               const dateA = new Date(a.createdAt).getTime();
               const dateB = new Date(b.createdAt).getTime();
               return order === "descending" ? dateB - dateA : dateA - dateB;
            });
         } else if (sortBy === "saleCount") {
            products.sort((a, b) => {
               return order === "descending" ? b.saleCount - a.saleCount : a.saleCount - b.saleCount;
            });
         }
         
         // Limit the results
         return products.slice(0, limit);
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetVitrineProducts;
