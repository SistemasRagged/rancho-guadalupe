import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../style'

const banners = [ {id: 1,}, {id: 2,}, {id: 3,}, {id: 4,} ]

const Banners = () => {
  return (
    <section id="banners" className={`${styles.boxWidth} xl:px-0 px-6 my-6`}>
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
                    className={styles.bannerItem}
                >
                    {`Swiper ${banner.id}`}
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Banners