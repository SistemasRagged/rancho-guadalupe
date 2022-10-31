import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from '../../style';
import { storefront, collectionQuery } from '../../utils';
import {FaSpinner} from 'react-icons/fa'

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

  console.log(collectionShopify)

  return (
    <div className={`${styles.boxWidth} my-4`}>
        {collectionShopify ? (
            <>
                <h1 className='text-[36px]'>{collectionShopify?.title}</h1>
                <div className=''>
                  <ul>
                    {collectionShopify?.products?.nodes.map(product => (
                      <li key={product.id}>
                        <img src={product.variants.nodes[0].image.url} alt="" />
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