import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      className="fixed h-16 w-full bg-white z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.5,
      }}
    >
      <nav className="h-full w-full max-w-7xl mx-auto flex justify-between items-center px-[30px]">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/to-login"}>
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
