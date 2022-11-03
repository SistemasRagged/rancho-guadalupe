import React from 'react'
import styles from '../../style'

const Ubication = () => {

  const urlMaps = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31730.881461128112!2d-75.61019207882988!3d6.216140925559401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8e442994f9919eb1%3A0xd890101f275cadb6!2sEstaci%C3%B3n%20La%20Palma%2C%20Medell%C3%ADn%2C%20Antioquia!3m2!1d6.231065399999999!2d-75.60107239999999!4m5!1s0x8e468279efa8dbdb%3A0x47827ca991a42cdc!2sRAGGED%2C%20Calle%206%20Sur%2C%20Guayabal%2C%20Medell%C3%ADn%2C%20Antioquia!3m2!1d6.2038144!2d-75.5854542!5e0!3m2!1ses!2sco!4v1667219392418!5m2!1ses!2sco"

  return (
    <main id="ubication" className={`${styles.boxWidth} mb-4`}>
      <h1 className='border-b-2 text-[36px] my-2 py-2 px-4 md:px-0'>Ubicación</h1>
      <div className='w-full h-[60vh] md:h-[90vh]'>
        <iframe src={urlMaps} className="w-[100%] h-[100%]" allowFullScreen frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </main>
  )
}

export default Ubication