import React, { Fragment, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer, Sidebar} from './index'
import { BsArrowUpSquareFill } from 'react-icons/bs'


const Layout = () => {

  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    })
  }, []);

  return (
    <Fragment>
        <Navbar />
        <Sidebar />
          <Outlet />
        <Footer />
        {scrollUp && <BsArrowUpSquareFill className='fixed bottom-0 z-[2] right-0 text-[3em] m-2 text-primary hover:text-primary/90 transition-all hover:-translate-y-2 cursor-pointer animate-fadeIn' onClick={() => window.scroll({top: 0, left:0, behavior:'smooth'})} />}
    </Fragment>
  )
}

export default Layout