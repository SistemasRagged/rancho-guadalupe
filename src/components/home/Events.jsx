import React, { useState, useEffect } from 'react'
import styles from '../../style'
import { collectionQuery, storefront } from '../../utils'
import {FaSpinner} from 'react-icons/fa';
import SEO from 'react-seo-component';
import { Link } from 'react-router-dom';

const Events = () => {

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const { data } = await storefront(collectionQuery, {handle: 'eventos'});
    setEvents(data.collection);
    console.log(data.collection);
  }

  useEffect(() => {
    getEvents();
  },[])

  return (
    <main id="events" className={`${styles.boxWidth} my-4 px-4`}>
        {events ? (
            <>
                <h1 className='text-[36px]'>{events?.title}</h1>
                <div className='border-t-2'>
                  <ul>
                    {events?.products?.nodes.map((product, index) => {

                      const splitDescription = product.description.split('///');

                      const description = splitDescription[0];
                      const wspGroup = splitDescription[1];
                      const pdfLink = splitDescription[2];
                      
                      return (
                      <li key={index} className={`flex sm:justify-between border-b-2 py-2 flex-col ${(index + 1) % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} `}>
                        <div className="relative">
                            {<img alt={product.title} src={product.variants.nodes[0].image.url}  className='sm:max-w-[350px] m-auto'/>}
                            <div className={`absolute top-4 flex items-center justify-center bg-white p-2 rounded-[50%] shadow-2xl ${(index + 1) % 2 === 0 ? 'left-4' : 'right-4'}`}>
                            </div>
                        </div>
                        <div className={`${(index + 1) % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6'} my-2 sm:my-0 w-[100%] h-[100%]`}>
                          <h1 className='text-[24px] font-secondary font-bold'>{product.title}</h1>
                          <p className='font-secondary'>{description}</p>
                          <a href={wspGroup} target="_blank" rel="no-referrer" className="px-4 py-2 my-2 bg-green-600 mr-2 inline-block text-white hover:brightness-95">{wspGroup}</a>
                          <a href={pdfLink} target="_blank" rel="no-referrer" className="px-4 py-2 my-2 bg-red-600 mx-2 inline-block text-white hover:brightness-95">{pdfLink}</a>
                          <Link to={`/productos/${product.handle}`} className="px-4 py-2 my-2 bg-secondary mx-2 inline-block text-white hover:brightness-95">Ver más</Link>
                        </div>
                      </li>
                    )})}
                
                  </ul>
                </div>
                <SEO
                  title="Eventos"
                  titleTemplate='Rancho Guadalupe'
                  titleSeparator=' - '
                  description='Rancho Guadalupe es esto y esto y esto...'
                  pathname={window.location.href}
                  siteLanguage='es'
                  siteLocale='ES'
                  twitterUsername='@ranchoguadaluperg'
                />
            </>
        ) : (
          <div className='h-[80vh] flex items-center justify-center'><FaSpinner className='text-[3em] animate-spin text-primary '/></div>
        )}
    </main>
  )
}

export default Events