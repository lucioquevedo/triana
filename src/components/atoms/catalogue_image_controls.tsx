import React from "react";
import { ArrowRight, ArrowLeft } from "@deemlol/next-icons";

const CatalogueImageControls = ({
  imageIndex,
  paginate,
}: CatalogueImageControlsProps) => {
  const text = ["plano", "renderizado"];

  return (
    <div
      className="absolute top-5 left-5 bg-background p-3 z-20 hover:cursor-pointer backdrop-opacity-70"
      onClick={() => paginate(imageIndex === 0 ? 1 : -1)}
    >
      <div className="flex items-center gap-2">
        Ver {text[imageIndex]}{" "}
        {imageIndex === 0 ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
      </div>
    </div>
  );
};

export default CatalogueImageControls;

interface CatalogueImageControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  imageIndex: number;
  paginate: (newDirection: number) => void;
}
