import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import { storefront, productQuery } from '../../utils';
import SEO from 'react-seo-component';
import { Keyboard, Zoom, Navigation, Pagination, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Product = () => {

  const [product, setProduct] = useState(undefined);

  const { handle } = useParams();

  const getProduct = async () => {
    const {data} =  await storefront(productQuery, {handle});
    setProduct(data.product);
    console.log(data.product);  
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className={`${styles.boxWidth} ${styles.paddingX} py-6 xl:px-0`}>
      {product ? (
        <div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="md:w-[60%] bg-transparent">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#801a00",
                  "--swiper-pagination-color": "#801a00",
                }}
                modules={[Keyboard, Zoom, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
                zoom={true}
                spaceBetween={10}
                autoHeight={true}
                className="mySwiper"
              >
                {product.media.nodes.map((variant) => (
                  <SwiperSlide>
                    <div className="swiper-zoom-container">
                      <img src={variant.image.url} alt="" className='mx-auto object-cover'/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='md:w-[40%] max-h-[100%] lg:hover:overflow-auto lg:overflow-hidden overflow-auto pr-7'>
                <h1 className='font-poppins font-semibold text-3xl text-white'>{product.title}</h1>
                {/* <a href="https://api.whatsapp.com/send/?phone=573202871949&text=Hola,+Soy+Alejandro+Mira&type=phone_number&app_absent=0" target="_blank">Ir a whatsapp</a> */}
                <div className="text-white font-poppins mt-5" dangerouslySetInnerHTML={{ __html: product.descriptionHtml}}/>
            </div>
        </div>
        <SEO
          title={product.title}
          titleTemplate='Rancho Guadalupe'
          titleSeparator=' - '
          description={product.description}
          pathname={window.location.href}
          image={''}
          siteLanguage='es'
          siteLocale='ES'
          twitterUsername='@ranchoguadaluperg'
        />
        </div>
      ) : (
        <h1 className='font-poppins font-semibold text-3xl text-white text-center'>No se encontraron resultados</h1>
      )}
    </div>
  )
}

export default Product