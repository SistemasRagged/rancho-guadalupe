import React from 'react'
import SEO from 'react-seo-component'

const Cart = () => {

  return (
    <>
      <div>

      </div>
      <SEO
            title='Carrito'
            titleTemplate='Rancho Guadalupe'
            titleSeparator=' - '
            description='Estos son tus productos deseados'
            pathname={window.location.href}
            siteLanguage='es'
            siteLocale='ES'
            twitterUsername='@ranchoguadaluperg'
      />
    </>
  )
}

export default Cart