import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = (): JSX.Element => {
   return (
      <Link href="/" className="-mt-2" title="Al Rafahia">
         <Image
            src="/logo.png"
            alt="Al Rafahia Logo"
            width={240}
            height={80}
            className="h-16 w-auto xl:h-20"
         />
      </Link>
   );
};

export default Logo;
