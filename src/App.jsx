import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout, Front, Products, Product, Cart, NotFound} from './components/index';

const App = () => {

  return (
    <div className='bg-primary w-full font-poppins' onLoad={() => window.scrollTo(0, 0)}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Front />} />
            <Route exact path="/productos" element={<Products />} />
            <Route exact path="/productos/:handle" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App