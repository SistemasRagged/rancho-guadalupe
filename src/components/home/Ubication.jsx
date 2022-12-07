import React from 'react'
import SEO from 'react-seo-component'
import styles from '../../style'

const Ubication = () => {

  const urlMaps = "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d51602.78581598689!2d-75.57824629160073!3d8.324082052094573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x8e5baf0b6f021019%3A0x652c61d2b1bed231!2sHotel%20Restaurante%20Punta%20Del%20Sol!3m2!1d8.3379934!2d-75.5494551!4m4!2zOMKwMTknMzcuOSJOIDc1wrAzMyczOC4wIlc!3m2!1d8.3271944!2d-75.5605556!5e0!3m2!1sen!2sco!4v1670427657659!5m2!1sen!2sco"

  return (
    <main id="ubication" className={`${styles.boxWidth} mb-4`}>
      <h1 className='border-b-2 text-[36px] my-2 py-2 px-4 md:px-0'>UBICACIÓN</h1>
      <div className='w-full h-[60vh] md:h-[90vh]'>
        <iframe src={urlMaps} className="w-[100%] h-[100%]" allowFullScreen frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <SEO
        title='Ubicación'
        titleTemplate='Rancho Guadalupe'
        titleSeparator=' - '
        description='Rancho Guadalupe es esto y esto y esto...'
        pathname={window.location.href}
        siteLanguage='es'
        siteLocale='ES'
        twitterUsername='@ranchoguadaluperg'
      />
    </main>
  )
}

export default Ubication