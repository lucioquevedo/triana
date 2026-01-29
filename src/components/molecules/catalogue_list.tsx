"use client";
import CatalogueItem from "../atoms/catalogue_item";

const CatalogueList = ({
  products,
  activeProductId,
  setActiveProductId,
}: CatalogueListProps) => {
  return (
    <ul className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-1">
      {products.map((product, idx) => (
        <CatalogueItem
          key={idx}
          isActive={activeProductId === idx}
          onClick={() => setActiveProductId(idx)}
        >
          {product.title}
        </CatalogueItem>
      ))}
    </ul>
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
};
