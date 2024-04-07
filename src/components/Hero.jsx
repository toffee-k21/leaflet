import { motion } from 'framer-motion';
import {styles} from '../style';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full lg:h-screen md:h-screen h-[400px]  mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hello, <br className='sm:block hidden'/>We Are <br className='sm:block hidden'/><span className='text-[#915eff]'>INFO BYTE</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Creators of leaflet, a digital book library created to connect multiple readers. 
            </p>
          </div>

        </div>
        <div className='h-[100px]'>
        </div>
        
        <ComputersCanvas />
        
             </section>
  )
}

export default Hero