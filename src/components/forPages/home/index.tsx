import { FC } from "react";
import { HeroSection, Vitrine, Gallery, CustomersComment, VideoSection } from "@/components";
import ShippingCallout from "./ShippingCallout";
import CustomDevelopment from "./CustomDevelopment";

const HomeComponents: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <CustomDevelopment />
         <Gallery />
         <ShippingCallout />
         <hr className="container opacity-70" />
         <Vitrine
            id="featured-products"
            title="Featured Products"
            productShowCount={4}
            sortBy="createdAt"
            order="descending"
            buttonHref="/products"
         />
         <VideoSection />
         <CustomersComment />
      </>
   );
};

export default HomeComponents;
