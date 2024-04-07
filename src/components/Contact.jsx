import React from 'react'
import {styles} from "../style"
const Contact = () => {
  return (
    <div><h1 className={`text-center ${styles.sectionHeadText}`}><br className='sm:block hidden'/><span className='text-white'>TEAM MEMBERS</span></h1><br className='sm:block hidden' />
    <p className={`${styles.heroSubText} mt-2
    ml-20 mr-20 text-white-100 `}>
      <span className='text-left '>1 - TAUFIQ HASSAN </span>
      <span className='float-right '> BACKEND DEVELOPER</span><br className='sm:block hidden'/>
      <span className='text-left '>2 - ABHIJEET DUBEY </span>
      <span className='float-right '> ANDROID  DEVELOPER</span><br className='sm:block hidden'/>
      <span className='text-left '>3 - PIYUSH DIXIT</span>
      <span className='float-right '>AR-VR DEVELOPER</span><br className='sm:block hidden'/>
      <span className='text-left '>4 - TEJAS ARORA</span>
      <span className='float-right '>FRONTEND DEVELOPER</span>
                   
                   
                    
            </p>
    </div>
  )
}

export default Contact