import { FC } from "react";

type TProps = {
   resetFilterOnClick: () => void;
};

const ResetFilters: FC<TProps> = ({ resetFilterOnClick }): JSX.Element => {
   return (
      <button
         onClick={resetFilterOnClick}
         className="w-full rounded-none bg-secondary px-4 py-3 text-tertiary transition-colors hover:bg-tertiary hover:text-secondary"
      >
         Reset Filter
      </button>
   );
};

export default ResetFilters;
