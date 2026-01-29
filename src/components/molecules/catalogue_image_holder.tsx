"use client";
import React, { act } from "react";
import { Product } from "./catalogue_list";
import classNames from "classnames";

const CatalogueImageHolder = ({ product }: CatalogueImageHolderProps) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  return (
    <div
      className={classNames(
        "grid grid-cols-1 lg:h-full lg:flex-row gap-2.5 col-span-4  max-w-full transition-all duration-500",
        {
          "grid-rows-[5fr_1fr] lg:grid-rows-1 lg:grid-cols-[6fr_1fr]":
            activeImageIndex === 0,
          "grid-rows-[1fr_5fr] lg:grid-rows-1 lg:grid-cols-[1fr_6fr]":
            activeImageIndex === 1,
        }
      )}
    >
      {[0, 1].map((idx) => (
        <div
          key={idx}
          className={classNames(
            `bg-gray-700 transition-all duration-500 lg:cursor-pointer min-h-32`,
            {
              /* "row-span-8 h-56": activeImageIndex === idx, */
              invert: activeImageIndex !== idx,
            }
          )}
          onClick={() => setActiveImageIndex(idx)}
        ></div>
      ))}
    </div>
  );
};

export default CatalogueImageHolder;

interface CatalogueImageHolderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

/* 
<div className="flex flex lg:flex-row gap-2.5 col-span-4 min-h-36 max-w-full">
      {[0, 1].map((idx) => (
        <div
          key={idx}
          className={classNames(
            "bg-gray-700 aspect-square lg:max-w-10/12 lg:min-w-2/12 transition-all duration-500  lg:cursor-pointer",
            {
              "lg:grow": activeImageIndex === idx,
            }
          )}
          onClick={() => setActiveImageIndex(idx)}
        ></div>
      ))}
    </div>
*/
