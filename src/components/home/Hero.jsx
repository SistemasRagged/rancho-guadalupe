import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { hero } from '../../assets'
import { Navigation, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { productQuery, storefront } from '../../utils'
import {FaSpinner} from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {

  const [heroShopify, setHeroShopify] = useState([])

  const getHeros = async () => {
    const {data} =  await storefront(productQuery, {handle: 'hero'});
    setHeroShopify(data.product.media.nodes);
  }

  useEffect(() => {
    getHeros();
  }, [])


  return (
    <section className={`${styles.boxWidth} flex md:flex-row flex-col md:justify-between`}>
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
          {/* <img src={hero} alt="Billing"  className='w-[100%] xl:h-[100%] h-[100%] object-contain shadow-2xl rounded-xl'/> */}
          <Swiper
                style={{
                  "--swiper-navigation-color": "#801a00",
                }}
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                autoHeight={true}
                className="w-[100vw] md:w-[45vw] xl:w-[50vw] rounded-xl shadow-2xl relative"
              >
                {heroShopify.map((variant) => (
                  <SwiperSlide key={variant.id} className="relative flex align-center">
                    {variant.mediaContentType === 'IMAGE' ? (
                      <div className='max-w-[100%] relative'>
                        <FaSpinner className='absolute top-[50%] left-[50%] z-[1] translate-y-[100%] translate-x-[100%] text-[3em] animate-spin text-primary' />
                        <img src={variant.image.url} alt="" className='max-w-[100%] relative z-[2]' />
                      </div>
                    ) : (
                      <div className='h-[60vh] md:h-[60vh]'>
                        <iframe src={variant.embedUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen allowTransparency className="w-full h-[100%]"></iframe>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>

    </section>
    )
}



export default Hero