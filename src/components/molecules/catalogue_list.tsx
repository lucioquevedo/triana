"use client";
import CatalogueItem from "../atoms/catalogue_item";
import { motion, stagger } from "motion/react";

const CatalogueList = ({
  products,
  activeProductId,
  setActiveProductId,
}: CatalogueListProps) => {
  return (
    <motion.ul
      className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-1"
      transition={{ delayChildren: stagger(1, { startDelay: 0.5 }) }}
    >
      {products.map((product, idx) => (
        <CatalogueItem
          key={idx}
          isActive={activeProductId === idx}
          onClick={() => setActiveProductId(idx)}
        >
          {product.title}
        </CatalogueItem>
      ))}
    </motion.ul>
  );
};

export default CatalogueList;

interface CatalogueListProps {
  products: Product[];
  activeProductId: number;
  setActiveProductId: React.Dispatch<React.SetStateAction<number>>;
}

export type Product = {
  title: string;
  render: string;
  plan: string;
};
