import React from 'react'
import styles from '../../style'
import {AiOutlineArrowDown} from 'react-icons/ai'

const SeeMore = () => (
  <a href="#features" className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-secondary p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col gap-2 text-white transition-colors hover:bg-secondary duration-300 bg-primary w-[100%] h-[100%] rounded-full`}>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        Ver más
      </p>
      <span className="text-[23px]"><AiOutlineArrowDown /></span>
    </div>
  </a>
)

const Hero = () => (
    <section className={`${styles.boxWidth} flex md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              Lorem <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Impsum</span> {" "}
            </h1>
            <div className='ss:flex hidden md:mr-4 mr-0'>
              <SeeMore />
            </div>
          </div>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Dolore Consequat</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Duis aute sit labore duis proident amet esse labore reprehenderit esse aliquip commodo ipsum proident. Culpa anim non nisi velit Lorem nisi nulla mollit laborum eu sit aliqua aliqua. Ut nostrud elit eu aute adipisicing.</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={"https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg"} alt="Billing"  className='w-[100%] xl:h-[100%] h-[90%] object-contain relative z-[5]'/>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <SeeMore />
        </div>
    </section>
)


export default Hero