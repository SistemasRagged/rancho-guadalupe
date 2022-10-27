import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../style'
import {banners} from '../../constants/index'
import { FaSpinner } from 'react-icons/fa';

const Banners = () => {
  return (
    <section id="banners" className={`${styles.boxWidth} xl:px-0 px-6 my-6 h-[100vh]`}>
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
            {banners.map(banner => (
                <SwiperSlide 
                    key={banner.id}
                    className="h-[95vh] flex items-center justify-center"
                >
                    <div className='absolute text-[3em] animate-spin text-primary'><FaSpinner /></div>
                    <img src={banner.image} alt="" className="w-full h-full object-cover relative z-[2]" />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Banners