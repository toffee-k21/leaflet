import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import{services} from '../cont';

const ServiceCard =({ index, title,icon,desc})=>{
  return (
    <Tilt className="ws:w-[250px] ">
      <motion.div 
      className='lg:mx-24 mx-[80px] w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div 
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className=' bg-tertiary rounded-[20px] py-5 lg:px-12 px-10 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      <p className='text-white text-[13px] font-italic text-center'>{desc}</p>
      </div>
      </motion.div></Tilt>
      
  )
}

const Info = () => {
  return (
    <>
    <motion.div>
    <p className={`mt-10 ml-11 ${styles.sectionSubText}`}><br className='sm:block hidden'/>Introduction</p>
    <h2 className={`ml-10 ${styles.sectionHeadText}`}>Overview.</h2>
    </motion.div>
    <motion.p
    className='mt-4 ml-11 text-secondary text-[20px] max-w-3x1 leading-[30px]'>
      Digital Book Library , In a world increasingly reliant on digital platforms, Our library seamlessly integrates frontend, backend, and machine learning to revolutionize how we access and interact with literature.<br className='sm:block hidden'/>
      <br className='sm:block hidden'/>
      A platform where readers can explore an endless array of books, tailored to their preferences and interests, all at their fingertips.


    </motion.p>
      <br className='sm:block hidden'/>
      <br className='sm:block hidden'/>
    <h2 className={`ml-10 ${styles.sectionHeadText}`}>Solution.</h2>
    <div className='mt-20 flex flex-wrap gap-10'>
    {}
    </div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}
    </div>
    </>
  )
}

export default Info