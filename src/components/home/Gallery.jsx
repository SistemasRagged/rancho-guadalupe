import React from 'react'
import styles from '../../style'
import SEO from 'react-seo-component'

const Gallery = () => {
  return (
    <div className={`${styles.boxWidth} px-3 sm:px-0 my-6`}>
        <iframe src="https://snapwidget.com/embed/1018777" class="snapwidget-widget border-0 overflow-hidden w-full h-[45em] ss:h-[50em] sm:h-[58em] md:h-[75em] xl:h-[105em]" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        <SEO
          title="Galeria"
          titleTemplate='Rancho Guadalupe'
          titleSeparator=' - '
          description="Aquí podrás encontrar algunas de las fotos o eventos que montamos diariamente en nuestro instagram @rancho.guadalupe"
          pathname={window.location.href}
          image={''}
          siteLanguage='es'
          siteLocale='ES'
          twitterUsername='@ranchoguadaluperg'
        />
    </div>
  )
}

export default Gallery