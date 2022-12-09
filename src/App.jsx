import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout, Front, Products, Product, NotFound, AboutUs, Ubication, Events, Reproductores, Collection} from './components/index';

const App = () => {



  return (
    <div className='bg-white w-full font-primary'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Front />} />
            {/* <Route exact path="/productos" element={<Products />} /> */}
            <Route exact path="/productos/:handle" element={<Product />} />
            <Route exact path="/nosotros" element={<AboutUs />} />
            <Route exact path="/ubicacion" element={<Ubication />} />
            <Route exact path="/eventos" element={<Events />} />
            <Route exact path="/categoria/:collection" element={<Collection />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App