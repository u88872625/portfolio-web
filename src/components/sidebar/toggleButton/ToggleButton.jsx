import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button className="toggleButton" onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L20 2.5" },
            open: { d: "M 3 16.5 L17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d={"M 2 9.423 L20 9.423"}
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L20 16.346" },
            open: { d: "M 3 2.5 L17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
