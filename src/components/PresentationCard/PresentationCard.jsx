import { motion } from 'framer-motion';
import carlos from '../../assets/carlos.png'

export const PresentationCard = () => {
  return (
    <motion.div className='presentationCard'>
      <img className='' src={carlos} alt="logo" />
      <div className="info">
        <h1>
          Carlos Arbelaez
        </h1>
        <p>Full Stack Software Developer</p>
      </div>
    </motion.div>
  )
}
