import React from 'react'
import SEO from 'react-seo-component'
import styles from '../style'
import {Hero, Features, AboutUs} from './index'

const Front = () => {

  return (
    <div>
        <Hero />
        <div className={styles.paddingY} id="features">
          <Features />
        </div>
        {/* <AboutUs /> */}
        <SEO
          title='Inicio'
          titleTemplate='Rancho Guadalupe'
          titleSeparator=' - '
          description='Rancho Guadalupe es esto y esto y esto...'
          pathname={window.location.href}
          siteLanguage='es'
          siteLocale='ES'
          twitterUsername='@ranchoguadaluperg'
        />
    </div>
  )
}

export default Front