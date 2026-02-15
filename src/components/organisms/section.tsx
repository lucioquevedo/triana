"use client";
import { motion } from "motion/react";
import classNames from "classnames";
import SectionTitle from "../atoms/section_title";
import SectionBody from "../atoms/section_body";
import ImageFullScreenModal from "../molecules/image_full_screen_modal";
import { useState } from "react";

const Section = ({
  title,
  body,
  imageSrc,
  imageAlt,
  imagePosition,
  ...props
}: SectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full my-24 grid grid-cols-1 lg:grid-cols-6 lg:my-56"
      {...props}
    >
      <div
        className={classNames("relative w-full bg-gray-700 lg:col-span-4", {
          "lg:col-start-3": imagePosition === "right",
        })}
      >
        {imageSrc && (
          <motion.img
            onClick={() => setOpen(true)}
            layoutId={imageSrc + imageAlt}
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover lg:hover:cursor-zoom-in"
          />
        )}
      </div>
      <div
        className={classNames(
          "p-5 sticky h-fit lg:col-span-2 lg:px-12 lg:py-0",
          {
            "lg:col-start-1 lg:row-start-1": imagePosition === "right",
          },
        )}
      >
        {title && <SectionTitle>{title}</SectionTitle>}
        {body && <SectionBody>{body}</SectionBody>}
      </div>
      <ImageFullScreenModal isOpen={open} onClose={() => setOpen(false)}>
        <motion.img
          layoutId={imageSrc! + imageAlt!}
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </ImageFullScreenModal>
    </section>
  );
};

export default Section;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  title?: string;
  body?: string;
}
