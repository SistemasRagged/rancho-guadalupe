import React from 'react'
import styles from '../../style'
import {aboutUs} from '../../assets/'

const AboutUs = () => {
  return (
    <main id="aboutus" className={`${styles.boxWidth} my-4`}>
      <div className='w-full h-[100px] md:h-[150px] xl:h-[200px] overflow-hidden relative'>
        <img src={aboutUs} alt="Banner de la pagina Sobre Nosotros" className='object-cover -translate-y-[20%] md:-translate-y-[22%] absolute z-[1] opacity-70'/>
        <h1 className='relative z-[2] text-black text-[65px] flex items-center h-[100%] px-4'>Sobre nosotros</h1>
      </div>
      <section className='my-8 flex gap-12'>
        <p className='text-[23px]'>
        La Hacienda Rancho Guadalupe está ubicada en Planeta Rica ( Córdoba ) y  fue fundada el 18 de Febrero 2011 por el señor Juan Fernando Arbeláez Gómez; Industrial y comerciante antioqueño con el propósito de desarrollar una línea de Ganado Brahman Rojo de las mayores calidades que ofrece la genética nacional y extranjera. Con el trabajo dedicado al estudio y a los cruce en las líneas del Brahman ha logrado desarrollar excelentes líneas que han producido ejemplares de alta calidad, para así ofrecer al mercado ejemplares para el mejoramiento de otros hatos. 
        </p>
        <img src={aboutUs} alt="" className='max-w-[500px] object-contain'/>
      </section>
      <section className='my-8 flex flex-row-reverse gap-12'>
        <p className='text-[22px]'>
          Rancho Guadalupe está ejerciendo un protagonismo muy importante en las competencias en las que ha participado; teniendo como resultado triunfos en ferias y grandes campeonatos tanto en hembras como en machos. En el trascurso de su crecimiento Rancho Guadalupe ha ejercido una tarea muy importante con sus compradores, dándole así una seguridad en los animales producidos por la ganadería, generando confianza en nuestros clientes. Rancho Guadalupe se ha preocupado por la implementación de Biotecnologías reproductivas, caracterizándose a nivel nacional por ser muy buenos oferentes en novillas rojas de reemplazo en los más importantes remates a nivel nacional.
        </p>
        <img src={aboutUs} alt="" className='max-w-[500px] object-contain'/>
      </section>
      <section className='my-8 flex gap-12'>
        <p className='text-[24px]'>
           Rancho Guadalupe es la muestra de que con un trabajo serio, profesional y con procesos bien estructurados se pueden lograr excelentes resultados en un relativo corto tiempo, Hemos obtenido importantes distinciones como grandes campeonatos y/o campeonatos reservados en ferias exposiciones con los siguientes ejemplares:
        </p>
        <img src={aboutUs} alt="" className='max-w-[500px] object-contain'/>
      </section>
    </main>
  )
}

export default AboutUs