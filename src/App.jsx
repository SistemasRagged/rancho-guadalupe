import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout, Front, Products, Product, Cart} from './components/index';

const App = () => {

  return (
    <div className='bg-primary w-full' onLoad={() => window.scrollTo(0, 0)}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Front />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:handle" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App