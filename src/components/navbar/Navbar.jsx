import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Sidebar />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          MING CHUAN YEH
        </motion.span>

        <a href="https://github.com/u88872625">
          <img src="/github-mark-white.svg" alt="github.svg" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
