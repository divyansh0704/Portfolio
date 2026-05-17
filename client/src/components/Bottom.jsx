import React from 'react'
import "./bottom.css"
import { FaInstagram, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import SocialIcons from './SocialIcons';

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
                <SocialIcons/>
                

            </div>

        </motion.div>

    )
}

export default Bottom