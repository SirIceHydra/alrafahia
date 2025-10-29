import Image from "next/image";
import { forwardRef, memo, useCallback, useState } from "react";
import { searchIcon, closeIcon } from "@/public/img";
// FETCH DATA
import GetSearchProduct from "@/services/reactQuery/searchProduct";
import useDebounce from "@/hook/useDebounce";
// COMPONENT
import SearchResultItem from "./SearchResultItem";
import { PulseLoader } from "react-spinners";

const SearchInput = (): JSX.Element => {
   const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
   const [searchInputValue, setSearchInputValue] = useState<string>("");

   const debouncedSearch = useDebounce(searchInputValue, 500, 1) as string;
   const { data, isLoading, isError } = GetSearchProduct(debouncedSearch);

   // onChange
   const searchInputChangeHandler = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
      setIsOpenSearch(true);
      setSearchInputValue(ev.target.value);
   }, []);

   // onBlur
   const searchBlurHandler = () => {
      setTimeout(() => {
         setIsOpenSearch(false);
      }, 99);
   };

   // onClick
   const searchClickHandler = () => {
      setIsOpenSearch(true);
   };

   // onClick
   const searchCloseHandler = () => {
      setIsOpenSearch(false);
      setSearchInputValue("");
   };

   return (
      <label
         htmlFor="searchInput"
         onClick={searchClickHandler}
         onBlur={searchBlurHandler}
         className={"relative flex w-full items-center rounded-none bg-transparent px-0 py-2 transition-colors max-xl:shadow-none border-b border-tertiary/60 focus-within:border-tertiary"}
      >
         <input
            id="searchInput"
            type="search"
            value={searchInputValue}
            onChange={searchInputChangeHandler}
            className="w-full bg-transparent pr-2 text-tertiary outline-none placeholder:text-tertiary/60"
            maxLength={40}
            placeholder="Search for products..."
         />

         {/* Clear button */}
         <Image
            onClick={searchCloseHandler}
            src={closeIcon}
            alt="clear"
            width={20}
            height={20}
            className={`${searchInputValue ? "block" : "hidden"} my-auto ml-2 size-3 cursor-pointer opacity-70 invert`}
         />

         {/* Search Result */}
         <div
            className={`${isOpenSearch ? "scale-y-100" : "scale-y-0"} ${data ? "border p-3 pr-0" : "border-0 p-0"} absolute left-0 top-10 m-0 flex max-h-96 w-full origin-top flex-col items-center justify-center overflow-hidden rounded-20 bg-grey-100 shadow-md transition-all`}
         >
            {isLoading ? (
               <div className="py-9">
                  <PulseLoader size={9} margin={2} color="#656565" />
               </div>
            ) : isError || data?.length === 0 ? (
               <span className="py-9 font-semibold">Result Not Found!</span>
            ) : (
               <div className="w-full overflow-y-auto *:border-b *:border-b-gray-300 last:*:border-b-0">
                  {data?.map((item) => (
                     <SearchResultItem
                        key={item.id}
                        title={item.title}
                        slug={item.slug}
                        img={item.imgs[0]}
                        category={item.category}
                     />
                  ))}
               </div>
            )}
         </div>
      </label>
   );
};

export default memo(SearchInput);
