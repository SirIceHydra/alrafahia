import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";
import { TFilterState } from "@/components/forPages/products";
import { mockProducts } from "@/data/mockProducts";

const GetAllProducts = (query: TFilterState) => {
   return useQuery<{ products: IProductsProps[]; allProductsCount: number }, AxiosError>(
      ["AllProducts", query],
      async () => {
         try {
            // Use mock data for alrafahia.co.za products
            let filteredProducts = [...mockProducts];
            
            // Apply category filter
            if (query.category) {
               filteredProducts = filteredProducts.filter(product => 
                  product.category.toLowerCase() === query.category.toLowerCase()
               );
            }
            
            // Apply color filter
            if (query.color) {
               filteredProducts = filteredProducts.filter(product => 
                  product.colors.some(color => color.toLowerCase().includes(query.color.toLowerCase()))
               );
            }
            
            // Apply price filter
            if (query.prices && query.prices.length === 2) {
               filteredProducts = filteredProducts.filter(product => 
                  product.price >= query.prices[0] && product.price <= query.prices[1]
               );
            }
            
            // Apply sorting
            if (query.sort.sortBy && query.sort.orderBy) {
               filteredProducts.sort((a, b) => {
                  let aValue: any, bValue: any;
                  
                  if (query.sort.sortBy === "createdAt") {
                     aValue = new Date(a.createdAt).getTime();
                     bValue = new Date(b.createdAt).getTime();
                  } else if (query.sort.sortBy === "price") {
                     aValue = a.price;
                     bValue = b.price;
                  } else if (query.sort.sortBy === "saleCount") {
                     aValue = a.saleCount;
                     bValue = b.saleCount;
                  } else {
                     aValue = a.title;
                     bValue = b.title;
                  }
                  
                  if (query.sort.orderBy === "asc") {
                     return aValue > bValue ? 1 : -1;
                  } else {
                     return aValue < bValue ? 1 : -1;
                  }
               });
            }
            
            // Apply pagination
            const startIndex = (query.pageNumber - 1) * query.limitPerPage;
            const endIndex = startIndex + query.limitPerPage;
            const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
            
            return { 
               products: paginatedProducts, 
               allProductsCount: filteredProducts.length 
            };
         } catch (error: any) {
            throw new Error(error.message);
         }
      },
      {
         keepPreviousData: true,
      },
   );
};

export default GetAllProducts;
