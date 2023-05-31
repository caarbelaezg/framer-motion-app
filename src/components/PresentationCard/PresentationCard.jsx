import { motion } from "framer-motion";
import { useFadeOutScroll } from "../../hooks/useFadeOut";
import { fadeOutValues } from "./utils"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";
import carlos from "../../assets/carlos.png";

import { fadeInPresentationCard } from "../../motionUtils";

import "./presentationCard.css";

export const PresentationCard = () => {
  const { xValues, opacityValues} = fadeOutValues;
  const { x, opacity } = useFadeOutScroll(xValues, opacityValues)

  return (
    <motion.div className="presentationCard" style={{x, opacity}}>
      <motion.div
        className="presentationCard_container"
        variants={fadeInPresentationCard}
        initial="initial"
        animate="animate"
        exit="exit"
        on
      >
        <div>
          <img className="presentationCard_img" src={carlos} alt="logo" />
        </div>
        <div className="presentationCard_info">
          <h1 className="presentationCard_info--title">Carlos Arbelaez</h1>
          <p className="presentationCard_info--desc">
            Full Stack Software Developer
          </p>
          <div className="presentationCard__networks">
            <a className="network_link" href="https://github.com/caarbelaezg">
              <GoMarkGithub />
            </a>
            <a
              className="network_link"
              href="https://www.linkedin.com/in/caarbelaezg/"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="network_link"
              href="https://www.instagram.com/caarbelaezg/"
            >
              <IoLogoInstagram />
            </a>
            <a className="network_link" href="mailto:caarbelaezg@gmail.com">
              <IoMail />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
