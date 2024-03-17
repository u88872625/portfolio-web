import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transtion: {
      duration: 2,
    },
  },
};

const About = () => {
  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <div className="wrapper">
        <motion.div className="imageContainer" variants={variants}>
          <motion.img src="/photo.jpg" alt="" />
        </motion.div>
        <motion.div className="textContainer" variants={variants}>
          <motion.h2>嗨，我是葉明荃 Mindy！</motion.h2>
          <motion.p>
            *目前主要使用的技術：HTML、CSS、JavaScripts、React
          </motion.p>
          <motion.p>
            在進入前端開發的世界之前，我在電商行銷領域擁有 1-2
            年的工作經驗。這段經歷讓我擁有很多和網站接觸的機會，除了讓我培養了對使用者體驗的敏銳度，也讓我產生了對技術層面上的興趣。
            <br />
            <br />
            目前主要使用的技術是 React
            ，近幾年也有陸續建立幾個專案作品，類型從獨立接案到個人練習小品都有，如果有興趣的話歡迎隨時與我聯繫！
            <br />
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
