import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const useScrollDown = () => {
  const { scrollY } = useScroll();
  const [scrolledDown, setScrolledDown] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  });

  return scrolledDown;
};

export default useScrollDown;
