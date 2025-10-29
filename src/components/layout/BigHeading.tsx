import { FC, CSSProperties } from "react";
import cn from "@/utils/cn";

type TProps = {
   title: string;
   className?: string;
   tag: "h1" | "h2" | "h3" | "h4";
   style?: CSSProperties;
};

const BigHeading: FC<TProps> = ({ title, className, tag: TagType, style }): JSX.Element => {
   return (
      <TagType className={cn("text-center font-heading text-3xl max-xl:leading-8 xl:text-5xl", className)} style={style}>{title}</TagType>
   );
};

export default BigHeading;
