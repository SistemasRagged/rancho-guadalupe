import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import styles from '../../style';
import { storefront, collectionQuery } from '../../utils';
import {FaSpinner} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import PrismaZoom from 'react-prismazoom'
import {AiOutlineZoomIn} from 'react-icons/ai'


const ZoomModal = ({status, changeStatus, img}) => {

  const bodyClass = document.body.classList;

  const closeModal = () => {
    bodyClass.remove('overflow-y-hidden');
    changeStatus(!status);
  }

  useEffect(() => bodyClass.add('overflow-y-hidden'),[])

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-[99] flex justify-center items-center'>
      <div className='bg-white/60 backdrop-blur-lg h-screen w-screen absolute top-0 left-0 z-[1]' onClick={() => closeModal()}/>
      <IoMdClose className='fixed top-0 right-0 z-[2] text-[48px] cursor-pointer' onClick={() => closeModal()}/>
      <div className='relative z-[2] bg-transparent md:bg-white md:shadow-2xl md:rounded-lg md:max-w-[95vw] h-[80vh] md:h-[95vh] overflow-hidden animate-fadeIn'>
        <PrismaZoom>
          <img src={img} alt="" className='md:max-w-[95vw] h-[80vh] md:h-[95vh] object-contain md:object-cover' />
        </PrismaZoom>
      </div>
    </div>
  )
}

const Collection = () => {

  const { collection } = useParams();
  const [collectionShopify, setCollectionShopify] = useState(undefined)
  const [modalZoomed, setModalZoomed] = useState(false);
  const [imgSelected, setImageSelected] = useState(undefined)

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
                      <li key={product.id} className={`flex sm:justify-between border-b-2 py-2 flex-col ${(index + 1) % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} `}>
                        <div className="relative">
                            <img alt={product.title} src={product.variants.nodes[0].image.url}  className='sm:max-w-[550px] m-auto cursor-zoom-in' onClick={() => {setModalZoomed(true); setImageSelected(product.variants.nodes[0].image.url)}}/>
                            <div className={`absolute top-4 flex items-center justify-center bg-white p-2 rounded-[50%] shadow-2xl cursor-zoom-in ${(index + 1) % 2 === 0 ? 'left-4' : 'right-4'}`} onClick={() => {setModalZoomed(true); setImageSelected(product.variants.nodes[0].image.url)}}>
                              <AiOutlineZoomIn className=" text-[28px] text-black"/>
                            </div>
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
                {modalZoomed && <ZoomModal status={modalZoomed} changeStatus={setModalZoomed} img={imgSelected}/>}
            </>
        ) : (
          <div className='h-[80vh] flex items-center justify-center'><FaSpinner className='text-[3em] animate-spin text-primary '/></div>
        )}
    </div>
  )
}

export default Collection