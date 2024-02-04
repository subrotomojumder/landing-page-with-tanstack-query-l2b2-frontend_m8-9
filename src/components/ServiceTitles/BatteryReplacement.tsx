import useScrollGrow from "@/hooks/useScrollGrowHooks";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-600 h-60 col-span-12 rounded-md"
    ></motion.div>
  );
};

export default BatteryReplacement;
