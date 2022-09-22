import React from 'react'
import { Link } from 'react-router-dom'
import SEO from 'react-seo-component'
import styles from '../../style'

const NotFound = () => {
  return (
    <>
    <div className={`${styles.boxWidth} xl:px-0 sm:px-16 px-6 flex flex-col sm:flex-row justify-between items-center h-[90vh]`}>
        <div className='text-white'>
            <h1 className='text-[48px] font-bold'>¡Oh no!, parece que te has perdido.</h1>
            <p className='opacity-80 mb-10 text-[24px]'>No te preocupes, puedes volver a intentarlo más tarde.</p>
            <Link to="/" className='py-4 px-8 text-[18px] max-w-[120px] text-center bg-secondary rounded-full hover:bg-secondary/80 transition-all duration-300'>
                Volver al inicio
            </Link>
        </div>
        <div>
          <img src={"https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg"} alt="Billing"  className='w-[100%] xl:h-[100%] h-[90%] object-contain relative z-[5]'/>
        </div>
    </div>
    <SEO
            title='Pagina no encontrada'
            titleTemplate='Rancho Guadalupe'
            titleSeparator=' - '
            description='Lo sentimos, no hemos podido encontrar la pagina que deseabas'
            pathname={window.location.href}
            siteLanguage='es'
            siteLocale='ES'
            twitterUsername='@ranchoguadaluperg'
      />
    </>
  )
}

export default NotFound