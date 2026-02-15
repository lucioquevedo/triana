"use client";
import SectionTitle from "../atoms/section_title";
import SectionBody from "../atoms/section_body";
import CatalogueImageHolder from "../molecules/catalogue_image_holder";
import CatalogueList, { Product } from "../molecules/catalogue_list";
import { useState } from "react";

const Catalogue = () => {
  const [activeProduct, setActiveProduct] = useState<number>(0);

  return (
    <section
      id="catalogo"
      className="relative w-full my-16 grid grid-cols-1 lg:grid-cols-6 lg:my-52"
    >
      <div className="p-5 lg:col-span-2 lg:px-12 lg:py-0">
        <SectionTitle>Nuestro catálogo</SectionTitle>
        <SectionBody>
          Este es el catálogo de productos. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </SectionBody>
        <CatalogueList
          products={products}
          activeProductId={activeProduct}
          setActiveProductId={setActiveProduct}
        />
      </div>
      <CatalogueImageHolder product={products[activeProduct]} />
    </section>
  );
};

export default Catalogue;

const products: Product[] = [
  {
    title: "Asis",
    render: "/catalogue/asis/asis_render.jpeg",
    plan: "/catalogue/asis/asis_plan.png",
  },
  {
    title: "Genova",
    render: "/catalogue/genova/genova_render.jpeg",
    plan: "/catalogue/genova/genova_plan.png",
  },
  {
    title: "Padua",
    render: "/catalogue/padua/padua_render.jpg",
    plan: "/catalogue/padua/padua_plan.png",
  },
  {
    title: "Pompeya",
    render: "/catalogue/pompeya/pompeya_render.png",
    plan: "/catalogue/pompeya/pompeya_plan.png",
  },
  {
    title: "Turin",
    render: "/catalogue/turin/turin_render.jpeg",
    plan: "/catalogue/turin/turin_plan.png",
  },
  {
    title: "Verona",
    render: "/catalogue/verona/verona_render.jpeg",
    plan: "/catalogue/verona/verona_plan.png",
  },
];
