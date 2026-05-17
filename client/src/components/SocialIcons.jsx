import React from 'react'
import "./bottom.css"
import { FaInstagram, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from 'framer-motion'
const SocialIcons = () => {
    return (
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
    )
}

export default SocialIcons