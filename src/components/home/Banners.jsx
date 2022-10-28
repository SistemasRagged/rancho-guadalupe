import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../style'
import { FaSpinner } from 'react-icons/fa';
import { storefront, productQuery } from '../../utils';

const Banners = () => {

  const [bannersShopify, setBannersShopify] = useState([])

  const handle = 'banners'

  const getBanners = async () => {
    const {data} =  await storefront(productQuery, {handle});
    setBannersShopify(data.product.media.nodes);
    // console.log(data.product);  
  }

  useEffect(() => {
    getBanners();
  }, [])


  return (
    <section id="banners" className={`${styles.boxWidth} xl:px-0 px-6 my-6 h-[90vh] md:h-[100vh] xl:h-[80vh]`}>
        <Swiper
            style={{ "--swiper-navigation-color": "#5F0010", "--swiper-pagination-color": "#5F0010"}}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {bannersShopify.map(banner => (
                <SwiperSlide 
                    key={banner.id}
                    className="h-[90vh] xl:h-[80vh] flex items-center justify-center"
                >
                    <div className='absolute text-[3em] animate-spin text-primary'><FaSpinner /></div>
                    <img src={banner.image && banner.image.url} alt="" className="w-full h-full object-cover relative z-[2]" />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Banners