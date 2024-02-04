import useScrollGrow from "@/hooks/useScrollGrowHooks";
import { motion } from "framer-motion";

const DataRecovery = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-600 h-32 col-span-6 lg:col-span-7 rounded-md"
    ></motion.div>
  );
};

export default DataRecovery;
