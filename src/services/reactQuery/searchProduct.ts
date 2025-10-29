import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchSearchProduct } from "@/services/axios/requests/products";
import { mockProducts } from "@/data/mockProducts";

const GetSearchProduct = (query: string) => {
   return useQuery<IProductsProps[], AxiosError>(["SearchProduct", query], async () => {
      try {
         if (!query) return [];
         
         // Use mock data for search
         const searchResults = mockProducts.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
         );

         return searchResults;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetSearchProduct;
