import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { hero } from '../../assets'
import { productQuery, storefront } from '../../utils'

const Hero = () => {

  const [heroShopify, setHeroShopify] = useState([])

  const getHeros = async () => {
    const {data} =  await storefront(productQuery, {handle: 'hero'});
    setHeroShopify(data.product.media.nodes);
    console.log(data.product);  
  }

  useEffect(() => {
    getHeros();
  }, [])


  return (
    <section className={`${styles.boxWidth} flex md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-6`}>

          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-primary font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
              Lorem <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Impsum</span> {" "}
            </h1>
          </div>

          <h1 className='font-primary font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>Dolore Consequat</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Duis aute sit labore duis proident amet esse labore reprehenderit esse aliquip commodo ipsum proident. Culpa anim non nisi velit Lorem nisi nulla mollit laborum eu sit aliqua aliqua. Ut nostrud elit eu aute adipisicing.</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative px-6 md:px-0`}>
          <img src={hero} alt="Billing"  className='w-[100%] xl:h-[100%] h-[100%] object-contain shadow-2xl rounded-xl'/>
        </div>

    </section>
    )
}



export default Hero