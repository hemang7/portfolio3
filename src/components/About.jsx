import React from 'react'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';

import {styles} from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'

const About = () => {
  return (
    <>
    <motion.div>
      <p className={`${styles.sectionSubText} text-center`}
        >Introduction
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Overview
      </h2>
    </motion.div>

    <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'>  
      
      I'm a software developer with a passion for creating innovative and efficient solutions. I have experience in a variety of programming languages and frameworks, and I'm always looking to learn new technologies and improve my skills.  
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service) => (
        <Tilt key={service.title} options={{max: 45}}>
          <motion.div variants={fadeIn('up','spring',0.5,0.75)} className='w-[250px] p-[1px] rounded-[20px] shadow-card'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')