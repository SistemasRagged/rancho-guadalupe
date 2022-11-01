import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import styles from '../../style';
import { storefront, collectionQuery } from '../../utils';
import {FaSpinner} from 'react-icons/fa'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Collection = () => {

  const { collection } = useParams();
  const [collectionShopify, setCollectionShopify] = useState(undefined)

  const getCollection = async () => {
    const { data } = await storefront(collectionQuery, {handle:collection});
    // console.log(data.collection);
    setCollectionShopify(data.collection);
  }

  useEffect(() => {
    getCollection();
  },[collection])

  return (
    <div className={`${styles.boxWidth} my-4 px-4`}>
        {collectionShopify ? (
            <>
                <h1 className='text-[36px]'>{collectionShopify?.title}</h1>
                <div className='border-t-2'>
                  <ul>
                    {collectionShopify?.products?.nodes.map((product, index) => (
                      <li key={product.id} className={`flex sm:justify-between border-b-2 border-b-gray-500 py-2 flex-col ${(index + 1) % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} `}>
                        <div className=''>
                          <Zoom>
                            <img alt={product.title} src={product.variants.nodes[0].image.url}  className='sm:max-w-[550px] m-auto' />
                          </Zoom>
                        </div>
                        <div className={`${(index + 1) % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6'} my-2 sm:my-0 w-[100%] h-[100%]`}>
                          <h1 className='text-[24px] font-secondary font-bold'>{product.title}</h1>
                          <p className='font-secondary'>{product.description}</p>
                          <Link to={`/productos/${product.handle}`} className="px-4 py-2 my-2 bg-secondary inline-block text-white hover:brightness-95">Ver más</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
            </>
        ) : (
          <div className='h-[80vh] flex items-center justify-center'><FaSpinner className='text-[3em] animate-spin text-primary '/></div>
        )}
    </div>
  )
}

export default Collection