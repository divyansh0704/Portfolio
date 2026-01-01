import React from 'react'
import { motion } from 'framer-motion'
import "./about.css"

const About = () => {
  return (
    <motion.section className='about'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}
    >
      <h2>I'm a Software Engineer.|</h2>
      <h6>I’m a Software Engineer and BTech CSE student at Chitkara University, building full-stack MERN applications and strengthening my problem-solving skills through consistent DSA practice.</h6>
    </motion.section>
  )
}

export default About