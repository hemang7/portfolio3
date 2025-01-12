import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my projects. I have worked on a variety of projects, from web applications to mobile applications. I have experience with a variety of technologies, including React, Node.js, and Python.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <Tilt key={index} options={{ max: 45 }} className="w-full sm:w-[360px]">
            <motion.div
              variants={fadeIn('up', 'spring', 0.5, 0.75)}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col"
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                  {/* GitHub Button */}
                  <div
                    onClick={() => window.open(project.source_code_link, '_blank')}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  {/* Live App Button */}
                  <div
                    onClick={() => window.open(project.live_app_link, '_blank')}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm">Live</span>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
