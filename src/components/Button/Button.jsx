/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./button.css";

export const Button = ({ children, count }) => {
  return (
    <motion.button
      className="framerButton"
      initial={{ opacity: 0.2 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1, transition: {duration: 1} }}
      onClick={() => count()}
    >
      {children}
    </motion.button>
  );
};
