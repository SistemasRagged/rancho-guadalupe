import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer, Sidebar} from './index'


const Layout = () => {
  return (
    <Fragment>
        <Navbar />
        <Sidebar />
          <Outlet />
        <Footer />
    </Fragment>
  )
}

export default Layout