import React, { useState, useEffect } from 'react'
import styles from '../../style'
import {aboutUsBanner, aboutUs1, aboutUs2} from '../../assets/'
import PrismaZoom from 'react-prismazoom'
import {IoMdClose} from 'react-icons/io';
import {AiOutlineZoomIn} from 'react-icons/ai'
import { productQuery, storefront } from '../../utils';
import SEO from 'react-seo-component';

const ZoomModal = ({status, changeStatus, img}) => {

  const bodyClass = document.body.classList;

  const closeModal = () => {
    bodyClass.remove('overflow-y-hidden');
    changeStatus(!status);
  }

  useEffect(() => bodyClass.add('overflow-y-hidden'),[])

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-[99] flex justify-center items-center'>
      <div className='bg-white/60 backdrop-blur-lg h-screen w-screen absolute top-0 left-0 z-[1]' onClick={() => closeModal()}/>
      <IoMdClose className='fixed top-0 right-0 z-[2] text-[48px] cursor-pointer' onClick={() => closeModal()}/>
      <div className='relative z-[2] bg-transparent md:bg-white md:shadow-2xl md:rounded-lg md:max-w-[95vw] h-[80vh] md:h-[95vh] overflow-hidden animate-fadeIn'>
        <PrismaZoom>
          <img src={img} alt="" className='md:max-w-[95vw] h-[80vh] md:h-[95vh] object-contain md:object-cover' />
        </PrismaZoom>
      </div>
    </div>
  )
}

const ArticleAboutUs = ({text, img, index, toggleModal, toggleImg}) => {
  
  return (
    <article className={`my-3 md:my-8 flex flex-col gap-4 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <p className='text-[18px] md:text-[23px] leading-[31px] font-secondary'>
        {text}
      </p>
      <div className={`relative sm:hover:scale-95 ${index % 2 !== 0 ? 'sm:hover:-rotate-[2deg]' : 'sm:hover:rotate-[2deg]'} transition-all duration-300`}>
        <img src={img} alt="Imagen sobre nosotros" className='shadow-2xl sm:max-w-[500px] m-auto object-contain cursor-zoom-in' onClick={() => {toggleModal(true); toggleImg(img); console.log('click')}}/>
        <AiOutlineZoomIn className={`absolute text-[28px] top-4 ${index % 2 !== 0 ? 'right-4' : 'left-4'} text-white`}/>
      </div>
    </article>
  )
}


const AboutUs = () => {

  const [modalZoomed, setModalZoomed] = useState(false);
  const [imgSelected, setImgSelected] = useState(undefined)

  const [aboutUsImg, setAboutUsImg] = useState([]);

  const getImgAboutUs = async () => {
    const { data } = await storefront(productQuery, {handle: 'about-us'});
    setAboutUsImg(data.product.media.nodes)
    console.log(data.product.media.nodes);
  }

  useEffect(() => {
    getImgAboutUs();
  }, [])

  const texts = ["La Hacienda Rancho Guadalupe está ubicada en Planeta Rica ( Córdoba ) y  fue fundada el 18 de Febrero 2011 por el señor Juan Fernando Arbeláez Gómez; Industrial y comerciante antioqueño con el propósito de desarrollar una línea de Ganado Brahman Rojo de las mayores calidades que ofrece la genética nacional y extranjera. Con el trabajo dedicado al estudio y a los cruce en las líneas del Brahman ha logrado desarrollar excelentes líneas que han producido ejemplares de alta calidad, para así ofrecer al mercado ejemplares para el mejoramiento de otros hatos.", "Rancho Guadalupe está ejerciendo un protagonismo muy importante en las competencias en las que ha participado; teniendo como resultado triunfos en ferias y grandes campeonatos tanto en hembras como en machos. En el trascurso de su crecimiento Rancho Guadalupe ha ejercido una tarea muy importante con sus compradores, dándole así una seguridad en los animales producidos por la ganadería, generando confianza en nuestros clientes. Rancho Guadalupe se ha preocupado por la implementación de Biotecnologías reproductivas, caracterizándose a nivel nacional por ser muy buenos oferentes en novillas rojas de reemplazo en los más importantes remates a nivel nacional."]

  return (
    <>
      <main id="aboutus" className={`${styles.boxWidth} md:my-4`}>
        <div className='w-full h-[100px] md:h-[150px] xl:h-[200px] overflow-hidden relative'>
          <img src={aboutUsBanner} alt="Banner de la pagina Sobre Nosotros" className='object-cover -translate-y-[20%] md:-translate-y-[22%] absolute z-[1] opacity-70'/>
          <h1 className='relative z-[2] text-black text-[45px] md:text-[65px] flex items-center h-[100%] px-4'>Sobre nosotros</h1>
        </div>
        <section className='px-2'>
          {aboutUsImg.map((img, index) => (
            <ArticleAboutUs text={texts[index]} img={img.image.url} index={index} toggleModal={setModalZoomed} toggleImg={setImgSelected}/>
          ))}
        </section>
      </main>
      {modalZoomed && <ZoomModal status={modalZoomed} changeStatus={setModalZoomed} img={imgSelected}/>}
      <SEO
          title="Sobre nosotros"
          titleTemplate='Rancho Guadalupe'
          titleSeparator=' - '
          description="Esta es nuestra historia, aqui nace nuestra marca y nuestro camino a ser los mejores en calidad y genetica"
          pathname={window.location.href}
          image={''}
          siteLanguage='es'
          siteLocale='ES'
          twitterUsername='@ranchoguadaluperg'
        />
    </>
    
  )
}

export default AboutUs