import { motion } from "framer-motion";
import carlos from "../../assets/carlos.png";

import { fadeInPresentationCard } from "../../motionUtils";

import "./presentationCard.css";

export const PresentationCard = () => {
  return (
    <motion.div 
      className="presentationCard"
      variants={fadeInPresentationCard}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <img className="presentationCard_img" src={carlos} alt="logo" />
      </div>
      <div className="presentationCard_info">
        <h1 className="presentationCard_info--title">Carlos Arbelaez</h1>
        <p className="presentationCard_info--desc">
          Full Stack Software Developer
        </p>
      </div>
    </motion.div>
  );
};
