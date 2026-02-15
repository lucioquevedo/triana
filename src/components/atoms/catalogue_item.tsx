"use client";
import classNames from "classnames";
import { motion } from "framer-motion";

const CatalogueItem = ({
  isActive,
  children,
  ...props
}: CatalogueItemProps) => {
  return (
    <motion.li
      {...props}
      className={classNames(
        {
          "border-[#37536C] text-[#37536C] font-bold": isActive,
          "border-transparent": !isActive,
        },
        "relative lg:text-xl border-b font-medium cursor-pointer pb-2 hover:border-[#37536C] transition-colors duration-100",
      )}
      whileHover={{ color: "#37536C" }}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="active"
          id="active"
          className="absolute top-1/2 -translate-y-1/2 right-2.5 max-w-2 w-2 h-2 rounded-full bg-[#37536C]"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.li>
  );
};

export default CatalogueItem;

interface CatalogueItemProps extends React.ComponentPropsWithoutRef<
  typeof motion.li
> {
  isActive?: boolean;
  children: React.ReactNode;
}
