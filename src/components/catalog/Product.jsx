import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../../style';
import { storefront, productQuery } from '../../utils';
import SEO from 'react-seo-component';
import { Keyboard, Zoom, Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ImSpinner9} from 'react-icons/im'
import {BsWhatsapp, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {buy} from '../../constants'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Accordion = ({title, content, id, checked}) => {
  
  const [open, setOpen] = useState(false); 

  return (
    <label htmlFor={id}>
      <div className="overflow-hidden cursor-pointer font-primary">
        <input type="checkbox" className='absolute opacity-0 peer' id={id} defaultChecked={checked ? !open : open} onClick={() => setOpen((prev) => !prev)}/>
        <h1 className='flex-1 text-primary py-5 inline-block uppercase font-semibold'>{title}</h1>
        <AiOutlineArrowDown className="text-primary inline-block text-[24px] transition-all translate-y-[100%] float-right peer-checked:rotate-180" />
        <div className=' max-h-0 peer-checked:max-h-screen border-t-2 border-t-primary/20'>
          <p className='py-2 px-3 cursor-normal text-[14px] leading-[25px]'>{content}</p>
        </div>
      </div>
    </label>
  )
}

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
                  <SwiperSlide key={variant.id}>
                    <div className="swiper-zoom-container">
                      <img src={variant.image.url} alt="" className='mx-auto object-cover'/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='md:w-[40%] max-h-[100%] flex flex-col items-center sm:items-start md:pr-7'>
                <h1 className='font-primary font-semibold text-3xl text-primary brightness-75 uppercase text-center sm:text-start'>{product.title}</h1>
                <h3 className='font-primary font-semibold text-lg text-primary/80 brightness-50 uppercase'>{product.vendor}</h3>
                <div id="links" className="flex items-center gap-3 w-[100%] mt-4">
                  <a className='w-[90%] text-center bg-[#1e9c4c] hover:bg-[#17773a] transition-all duration-300 py-4 flex justify-center items-center gap-2 text-white text-[18px] uppercase font-primary' href={`https://api.whatsapp.com/send/?phone=${buy.phone}&text=${buy.message}${product.title.replaceAll(" ", "+")}&type=phone_number&app_absent=0`} target="_blank"><BsWhatsapp className='text-[24px]'/> Ir a whatsapp</a>
                  <Link title="Volver" className='w-[10%] text-center text-secondary hover:brightness-90 transition-all duration-300 py-4 flex justify-center items-center gap-2 text-[18px] uppercase font-primary' to={`/productos?product=${handle}`}><BsFillArrowLeftCircleFill className='text-[24px]'/></Link>
                </div>
                <div className='my-5 sm:w-[100%] w-[80%] '>
                  <Accordion title="Descripcion" content={product.description} checked={true}/>
                  <Accordion title="Envios" content={buy.send}/>
                  <Accordion title="Calidad" content={buy.quality}/>
                </div>
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
        <div className="text-white h-[65vh] flex justify-center items-center"><ImSpinner9 className='animate-spin text-4xl'/></div>
      )}
    </div>
  )
}

export default Product