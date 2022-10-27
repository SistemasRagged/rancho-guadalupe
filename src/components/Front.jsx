import React from 'react'
import SEO from 'react-seo-component'
import styles from '../style'
import {Banners, Hero, Features} from './index'

const Front = () => {

  return (
    <div>
        <Banners />
        <Hero />
        <Features />
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