"use client";
import classNames from "classnames";

const CatalogueItem = ({
  isActive,
  children,
  ...props
}: CatalogueItemProps) => {
  return (
    <li
      {...props}
      className={classNames(
        {
          "border-[#37536C] text-[#37536C] font-bold": isActive,
          "border-transparent": !isActive,
        },
        "lg:text-xl border-b font-medium cursor-pointer pb-2 hover:border-[#37536C] hover:text-[#37536C] transition-colors duration-300"
      )}
    >
      {children}
    </li>
  );
};

export default CatalogueItem;

interface CatalogueItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
}
