import { FC } from "react";

type TProps = {
   title: string;
};

const Title: FC<TProps> = ({ title }): JSX.Element => {
   return <h4 className="text-h6 font-heading">{title}</h4>;
};

export default Title;
