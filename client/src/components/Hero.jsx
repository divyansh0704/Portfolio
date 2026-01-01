import React from 'react'
import { motion } from "framer-motion"
import image1 from "../assets/image1.svg"
import "./hero.css"

const Hero = () => {
  return (

    <motion.section className='hero'
    // initial={{opacity:0,y:40}}
    // animate={{opacity:1,y:0}}
    // transition={{duration:0.8}}
    >
      <div className="hero-left">
        <motion.img src={image1}  animate={{ y: [-3, -7, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} height={240} alt="avatr" />
      </div>
      <div className="hero-right">
        <motion.h4 initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Hello! I Am
          <span >
            DIVYANSH</span>
        </motion.h4>
        <div className="who">
          <motion.h5
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >A Software Engineer Who</motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >turns logic</motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >into <span>experience</span>...</motion.h2>
          <motion.h6
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >Because code should feel as good as it works.</motion.h6>

        </div>
      </div>

    </motion.section>

  )
}

export default Hero