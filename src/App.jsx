import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout, Front, Products, Product, NotFound, AboutUs, Ubication, Events, Reproductores} from './components/index';

const App = () => {

  return (
    <div className='bg-white w-full font-primary' onLoad={() => window.scrollTo(0, 0)}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Front />} />
            <Route exact path="/productos" element={<Products />} />
            <Route exact path="/productos/:handle" element={<Product />} />
            <Route exact path="/nosotros" element={<AboutUs />} />
            <Route exact path="/ubicacion" element={<Ubication />} />
            <Route exact path="/feriasyeventos" element={<Events />} />
            <Route exact path="/categorias/reproductores" element={<Reproductores />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App