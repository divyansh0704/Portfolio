import React from 'react'
import "./bottom.css"
import { FaInstagram, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

import { motion } from 'framer-motion'
const Bottom = () => {
    return (
        <motion.div className='bottom-container'
            initial={{ opicity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                initial={{ opicity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >Contact </motion.h2>
            <div className="bottom-content">
                <p>I'm currently looking to join a cross-functional team that values improving people's lives
                    through accessible design. or have a project in mind? Let's connect.</p>
                <p>sainidivyansh2005@gmail.com</p>
                <div className="social-icons">
                    <motion.a href="https://www.instagram.com/divyanshsaini829/"
                        whileHover={{ scale: 1.25, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    ><FaInstagram style={{ fontSize: "28px" }} /></motion.a>
                    <motion.a href="https://github.com/divyansh0704"
                        whileHover={{ scale: 1.25, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    > <FaGithub style={{ fontSize: "28px" }} /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/divyansh-saini-004683286/"
                        whileHover={{ scale: 1.25, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    > <FaLinkedin style={{ fontSize: "28px" }} /></motion.a>
                    <motion.a href="https://leetcode.com/u/divyansh298/"
                        whileHover={{ scale: 1.25, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    > <FaCode style={{ fontSize: "28px" }} /></motion.a>

                </div>

            </div>

        </motion.div>

    )
}

export default Bottom