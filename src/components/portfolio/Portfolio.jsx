import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "react Commerce",
    img: "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A good portfolio website combinesr role, personality, and valuerate their technical skills with micro-interactions, like Enrico Deiana, or write their principles as Tamara Sredojevic does.In addition to the design, using your expertise, like Todd Clarke’s copywriting skills, is a great way to show prospective employers and clients what you have to offer. We hope you’ve found design inspiration from the 15+ examples in this article and generated ideas to apply to your online portfolio.",
  },
  {
    id: 2,
    title: "react Commerce",
    img: "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A good portfolio website combines the right desemonstrate their technical skills with micro-interactions, like Enrico Deiana, or write their principles as Tamara Sredojevic does.In addition to the design, using your expertise, like Todd Clarke’s copywriting skills, is a great way to show prospective employers and clients what you have to offer. We hope you’ve found design inspiration from the 15+ examples in this article and generated ideas to apply to your online portfolio.",
  },
  {
    id: 3,
    title: "react Commerce",
    img: "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A good portfolio website combines the right designticle and generated ideas to apply to your online portfolio.",
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
            <button>See Demo</button>
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
