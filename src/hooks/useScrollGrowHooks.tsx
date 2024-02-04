import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.5 1"], // first element component er scroll start and end niddes kore . koto tuko scroll hole complete hobe
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  //   const xValues = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };
  return { componentRef, style };
};

export default useScrollGrow;
