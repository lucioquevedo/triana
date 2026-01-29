"use client";
import { motion } from "motion/react";
import classNames from "classnames";
import SectionTitle from "../../atoms/section_title";
import SectionBody from "../../atoms/section_body";

const Section = ({
  title,
  body,
  imageSrc,
  imageAlt,
  imagePosition,
  ...props
}: SectionProps) => {
  return (
    <section
      className="relative w-full my-16 grid grid-cols-1 lg:grid-cols-6 lg:my-52"
      {...props}
    >
      <div
        className={classNames("aspect-video w-full bg-gray-700 lg:col-span-4", {
          "lg:col-start-3": imagePosition === "right",
        })}
      />
      <div
        className={classNames("p-5 sticky lg:col-span-2 lg:px-12 lg:py-0", {
          "lg:col-start-1 lg:row-start-1": imagePosition === "right",
        })}
      >
        {title && (
          <span className="overflow-y-clip block">
            <SectionTitle
              initial={{ y: "90%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </SectionTitle>
          </span>
        )}
        {body && <SectionBody>{body}</SectionBody>}
      </div>
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
