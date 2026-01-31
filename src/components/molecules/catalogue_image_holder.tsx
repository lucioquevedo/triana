"use client";
import React, { useState } from "react";
import { Product } from "./catalogue_list";
import classNames from "classnames";
import { AnimatePresence, motion, wrap } from "motion/react";
import CatalogueImageControls from "../atoms/catalogue_image_controls";

const CatalogueImageHolder = ({ product }: CatalogueImageHolderProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = [product.render, product.plan];

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.title}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={classNames(
          "relative col-span-4 overflow-hidden flex justify-center items-center aspect-2339/1653",
        )}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            alt={product.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 35 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          />
        </AnimatePresence>
        <CatalogueImageControls imageIndex={imageIndex} paginate={paginate} />
      </motion.div>
    </AnimatePresence>
  );
};

export default CatalogueImageHolder;

interface CatalogueImageHolderProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

/*
{[product.render, product.plan].map((img, idx) => (
        <div
          key={idx}
          className={classNames("relative transition-all duration-500 w-full", {
            "aspect-5760/4648": idx === 0,
            "aspect-7017/4959": idx === 1,
          })}
          onClick={() => setActiveImageIndex(idx)}
        >
          <Image fill src={img} alt={product.title} />
        </div>
      ))}


className={classNames(
        "grid grid-cols-1 lg:h-full lg:flex-row gap-2.5 col-span-4  max-w-full transition-all duration-500",
        {
          "grid-rows-[5fr_1fr] lg:grid-rows-1 lg:grid-cols-[6fr_1fr]":
            activeImageIndex === 0,
          "grid-rows-[1fr_5fr] lg:grid-rows-1 lg:grid-cols-[1fr_6fr]":
            activeImageIndex === 1,
        },
      )}
    >


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
