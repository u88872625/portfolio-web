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
            年的工作經驗。這段經歷讓我擁有很多和網站接觸的機會，也讓我培養了對介面的美感及使用者體驗的敏銳度。
            <br />
            <br />
            同時也因為接觸久了，開始希望能更精進自己，我開始自己學習html，於是開啟了我的前端之旅！最後因為學出了興趣和熱情，不僅透過自學，還參加了Alpha
            Camp的課程讓自己的基礎更加紮實。
            <br />
            <br />
            轉職過程不僅是技術上的挑戰，也是一次對自我能力和毅力的考驗。但透過這些考驗，也更加讓我確認對這個領域的熱情，以及愛上每次解決問題的成就感。
            <br />
            <br />
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
