import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from '../components/Hero'
import Info from '../components/Info'
import Tech from '../components/Tech'
import Works from '../components/Works'
import Feedback from '../components/Feedback'
import Contact from '../components/Contact'
import { styles } from '../style'

const About = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Header />
      <Hero />
      </div>
      <Info />
      <Works />
      <h1 className={`text-center ${styles.sectionHeadText}`}><br className='sm:block hidden'/><br className='sm:block hidden'/><span className='text-white'>Tech Stack</span></h1>
      <Tech />
      <Contact />
        <div className='relative z-0'>
      
      <Footer />

          
    </div>
    </div>
  )
}

export default About