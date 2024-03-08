import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(45deg, #020a0c, #1a3c68, #84c7ca)"
            : "linear-gradient(180deg,#040B61,#2838B0)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "ABOUT" : "What I Did?"}
      </motion.h1>
      <motion.div
        className="coral"
        style={{
          backgroundImage: `url(${
            type === "about" ? "/coral.png" : "/mountain.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="animal"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "/animal.png" : "/whale.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: yBg,
          backgroundImage: `url(${
            type === "about" ? "/stars.png" : "/light.png"
          })`,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
