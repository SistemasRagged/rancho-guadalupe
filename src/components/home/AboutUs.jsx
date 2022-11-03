import React, { useState, useEffect } from 'react'
import styles from '../../style'
import {aboutUsBanner, aboutUs1, aboutUs2} from '../../assets/'
import PrismaZoom from 'react-prismazoom'
import {IoMdClose} from 'react-icons/io';
import {AiOutlineZoomIn} from 'react-icons/ai'

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


const AboutUs = () => {

  const [modalZoomed, setModalZoomed] = useState(false);
  const [imgSelected, setImgSelected] = useState(undefined)

  return (
    <>
      <main id="aboutus" className={`${styles.boxWidth} md:my-4`}>
        <div className='w-full h-[100px] md:h-[150px] xl:h-[200px] overflow-hidden relative'>
          <img src={aboutUsBanner} alt="Banner de la pagina Sobre Nosotros" className='object-cover -translate-y-[20%] md:-translate-y-[22%] absolute z-[1] opacity-70'/>
          <h1 className='relative z-[2] text-black text-[45px] md:text-[65px] flex items-center h-[100%] px-4'>Sobre nosotros</h1>
        </div>
        <section className='px-2'>
          <article className='my-3 md:my-8 flex flex-col md:flex-row gap-4 md:gap-12'>
            <p className='text-[18px] md:text-[23px] font-secondary'>
            La Hacienda Rancho Guadalupe está ubicada en Planeta Rica ( Córdoba ) y  fue fundada el 18 de Febrero 2011 por el señor Juan Fernando Arbeláez Gómez; Industrial y comerciante antioqueño con el propósito de desarrollar una línea de Ganado Brahman Rojo de las mayores calidades que ofrece la genética nacional y extranjera. Con el trabajo dedicado al estudio y a los cruce en las líneas del Brahman ha logrado desarrollar excelentes líneas que han producido ejemplares de alta calidad, para así ofrecer al mercado ejemplares para el mejoramiento de otros hatos. 
            </p>
            <div className="relative sm:hover:scale-95 sm:hover:rotate-[2deg] transition-all duration-300">
              <img src={aboutUs1} alt="" className='shadow-2xl sm:max-w-[500px] m-auto object-contain cursor-zoom-in' onClick={() => {setModalZoomed(true); setImgSelected(aboutUs1)}}/>
              <AiOutlineZoomIn className="absolute text-[28px] top-4 left-4 text-white"/>
            </div>
          </article>
          <article className='my-3 md:my-8 flex flex-col md:flex-row-reverse gap-4 md:gap-12'>
            <p className='text-[18px] md:text-[22px] font-secondary'>
              Rancho Guadalupe está ejerciendo un protagonismo muy importante en las competencias en las que ha participado; teniendo como resultado triunfos en ferias y grandes campeonatos tanto en hembras como en machos. En el trascurso de su crecimiento Rancho Guadalupe ha ejercido una tarea muy importante con sus compradores, dándole así una seguridad en los animales producidos por la ganadería, generando confianza en nuestros clientes. Rancho Guadalupe se ha preocupado por la implementación de Biotecnologías reproductivas, caracterizándose a nivel nacional por ser muy buenos oferentes en novillas rojas de reemplazo en los más importantes remates a nivel nacional.
            </p>
            <div className="relative sm:hover:scale-95 sm:hover:-rotate-[2deg] transition-all duration-300">
              <img src={aboutUs2} alt="" className='shadow-2xl sm:max-w-[500px] m-auto object-contain cursor-zoom-in' onClick={() => {setModalZoomed(true); setImgSelected(aboutUs2)}}/>
              <AiOutlineZoomIn className="absolute text-[28px] top-4 right-4 text-white"/>
            </div>
          </article>
          {/* <article className='my-3 md:my-8 flex flex-col md:flex-row gap-4 md:gap-12'>
            <p className='text-[18px] md:text-[24px] font-secondary'>
              Rancho Guadalupe es la muestra de que con un trabajo serio, profesional y con procesos bien estructurados se pueden lograr excelentes resultados en un relativo corto tiempo, Hemos obtenido importantes distinciones como grandes campeonatos y/o campeonatos reservados en ferias exposiciones con los siguientes ejemplares:
            </p>
            <img src={aboutUs} alt="" className='shadow-2xl sm:max-w-[500px] m-auto object-contain hover:scale-95 hover:rotate-[2deg] transition-all duration-300'/>
          </article> */}
        </section>
      </main>
      {modalZoomed && <ZoomModal status={modalZoomed} changeStatus={setModalZoomed} img={imgSelected}/>}
    </>
    
  )
}

export default AboutUs