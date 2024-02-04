import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.6,
      },
    },
  };
  const introChildren = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  const laptopAnimation = {
    initial: { y: 0 , rotate: 0,scale: 4},
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
    <Container className="lg:h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center pt-16">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold text-nowrap"
        >
          <span className=" text-gray">Don't Worry,</span>
          <br />
          <span>We'll fix it</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-dark-dray max-w-[50ch] mt-10 mb-5 text-lg"
        >
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>{" "}
          , your one-stop place for all kinds of{"  "}
          <span className="text-primary-foreground font-semibold">
            Macbook repair
          </span>
          {"  "}
          and diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-10 w-3/4 xl:w-full mx-auto flex lg:flex-none place-content-center"
        variants={laptopAnimation}
        initial="initial"
        animate="animate"
      >
        <img
          src={macbook}
          className=" h-[90%] object-contain "
          alt=""
        />
      </motion.div>
    </Container>
    </div>
  );
};

export default HeroSection;
