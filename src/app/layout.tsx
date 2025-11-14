// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// SEO
import { staticPageMetadata } from "@/SEO";
// FONT and STYLE
import { integralCFFont, satoshiFont, lexendZettaFont } from "@/public/font";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
// Provider
import Providers from "@/providers";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar, ToastContainer } from "@/components";
import DevSWUnregister from "@/components/DevSWUnregister";

export const metadata: Metadata = {
   manifest: "/manifest.json",
   icons: { icon: "/favicon.ico" },

   title: staticPageMetadata.home.title,
   description: staticPageMetadata.home.desc,
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} ${lexendZettaFont.variable} relative overflow-x-hidden font-satoshi`}>
            <DevSWUnregister />
            <PageLoadingProgressBar />

            <Providers>
               <Header />
               <ToastContainer />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
};

export default RootLayout;
