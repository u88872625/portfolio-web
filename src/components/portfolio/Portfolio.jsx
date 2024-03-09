import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "國和汽車",
    img: "/國和汽車.png",
    url: "https://guo-huo-web.vercel.app/",
    description:
      "使用到的技術有\nReact,\nbootstrap\n及\nfirebase。\n 透過官方網站建立品牌形象，除了前台基本的內容之外，因應業主需求建立後台，讓授權的使用者擁有新增、刪除及修改文章和\nBanner\n的功能，同時也建立讓使用者利用\nGoogle\n帳號登入的功能，增加便利性。",
  },
  {
    id: 2,
    title: "MBTI Talk",
    img: "/mbtiTalk.png",
    url: "https://u88872625.github.io/mbti-talk/",
    description:
      "使用到的技術主要有\nReact\n及\nSocket.io\n。利用\nMBTI\n16人格類型建立一個配對聊天網站，除了可以自己選擇\nMBTI\n類型外，也可以透過心理測驗得到自己的\nMBTI\n進入聊天室。",
  },
  {
    id: 3,
    title: "Meal Planner",
    img: "/mealplanner.png",
    url: "https://github.com/u88872625/meal-planner",
    description:
      "利用 react native 及 firebase 建立的三餐規劃 App。作品原型參考自 Youtube 上的 Sujan Anand，除了原本可以規劃自己的三餐之外，同時新增了一週食材統計和內建食譜，讓使用者方便採買及規劃。",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
