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

  const getBanners = async (handle) => {
    const {data} =  await storefront(productQuery, {handle});
    setBannersShopify(data.product.media.nodes);
    // console.log(data.product);  
  }

  useEffect(() => {
    let handle = 'banner-mobile'
    if(screen.width >= 1020){
      handle = 'banners'
    }
    getBanners(handle);
  }, [])


  return (
    <section id="banners" className={`${styles.boxWidth} xl:px-0 md:px-6 md:my-6 h-[80vh] md:h-[100vh] xl:h-[80vh]`}>
        <Swiper
            style={{ "--swiper-navigation-color": "#5F0010", "--swiper-pagination-color": "#5F0010"}}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 6000,
                disableOnInteraction: true,
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
                    className="h-[80vh] md:h-[100vh] xl:h-[80vh] flex items-center justify-center"
                >
                    <div className='absolute text-[3em] animate-spin text-primary'><FaSpinner /></div>
                    {banner.mediaContentType === 'IMAGE' ? (
                      <img src={banner.image && banner.image.url} alt="" className="w-full h-full object-fill md:object-cover relative z-[2]" />
                    ) : (
                      <iframe src={banner.embedUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{width: '100%', height: '75vh', position: 'relative', zIndex: 2}} ></iframe>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Banners