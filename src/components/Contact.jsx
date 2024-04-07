import React from 'react'
import {styles} from "../style"
const Contact = () => {
  return (
    <div><h1 className={`text-center ${styles.sectionHeadText}`}><br className='sm:block hidden'/><span className='text-white'>TEAM MEMBERS</span></h1><br className='sm:block hidden' />
    <p className={`${styles.heroSubText} mt-2 text-left ml-15
text-white-100 `}>
  <div>
    1- TAUFIQ HASSAN <br className='sm:block hidden'/>(BACKEND DEVELOPER)<br className='sm:block hidden'/> 
  </div>
  <br className='sm:block hidden'/>
  <div>
    2- ABHIJEET DUBEY  <br className='sm:block hidden'/>(ANDROID DEVELOPER)<br className='sm:block hidden' />
  </div>
  <br className='sm:block hidden'/>
  <div>
    3- PIYUSH DIXIT <br className='sm:block hidden'/> (AR VR DEVELOPER)<br className='sm:block hidden' />
  </div>
  <br className='sm:block hidden'/>
  <div>
    4- TEJAS ARORA  <br className='sm:block hidden'/>(FRONTEND DEVELOPER)  
  </div>
    </p>
    </div>
  )
}

export default Contact