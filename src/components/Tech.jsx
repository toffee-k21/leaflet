import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import{technologies} from '../cont';

const ServiceCard =({ index, title,icon,desc})=>{
  return (
    <Tilt className="xs:w-[180px] w-full">
      <motion.div 
      className='mx-24 w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div 
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[35px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt={title} className='w-90 h-90 object-contain'/>
      </div>
      </motion.div></Tilt>
      
  )
}

const Info = () => {
  return (
    <>
    <div className='mt-5 flex flex-wrap gap-10'>
    {}
    </div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {technologies.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}
    </div>
    </>
  )
}

export default Info