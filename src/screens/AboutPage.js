import React from 'react'
import Skills from '../components/Skills'
import About from '../components/About'
import { motion } from 'framer-motion'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const AboutPage = ({ data }) => {
    return (
        <div >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="about"
            >
                <About data={data} />
                <Skills />
            </motion.div>
        </div>
    )
}

export default AboutPage
