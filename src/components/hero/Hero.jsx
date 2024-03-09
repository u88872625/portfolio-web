import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const slideVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "-200%",
      transition: {
        duration: 55,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.img
          className="slidingImage"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          src="/fish.svg"
        ></motion.img>
        <div className="imageContainer">
          <img src="/bubble.png" alt="" />
        </div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Front-end Developer</motion.h1>
          <motion.h2 variants={textVariants}>葉明荃 Mindy</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>最新作品</motion.button>
            </a>
            <a href="#聯絡方式">
              <motion.button variants={textVariants}>聯絡我</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
