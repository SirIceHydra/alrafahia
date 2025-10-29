import { CSSProperties, forwardRef } from "react";

type TProps = {
   children: React.ReactNode;
   parentClassName?: string;
   sectionClassName?: string;
   style?: CSSProperties;
   fluid?: boolean;
};

const Section = forwardRef<HTMLDivElement, TProps>(({ children, parentClassName, sectionClassName, style, fluid = false }, ref) => {
   return (
      <div ref={ref} className={parentClassName} style={style}>
         <section className={`${sectionClassName}${fluid ? "" : " container"}`}>{children}</section>
      </div>
   );
});

export default Section;
