import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import {SectionWrapper} from '../hoc'


const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-32 h-32' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')