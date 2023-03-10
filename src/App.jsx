import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout, Front, Product, NotFound, AboutUs, Ubication, Events, Gallery, Collection} from './components/index';

const App = () => {



  return (
    <div className='bg-white w-full font-primary'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route index element={<Front />} />
            <Route exact path="/productos/:handle" element={<Product />} />
            <Route exact path="/nosotros" element={<AboutUs />} />
            <Route exact path="/ubicacion" element={<Ubication />} />
            <Route exact path="/eventos" element={<Events />} />
            <Route exact path="/galeria" element={<Gallery />} />
            <Route exact path="/categoria/:collection" element={<Collection />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App