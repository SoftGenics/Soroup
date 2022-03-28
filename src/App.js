import React from 'react'
import Header from './Components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components//Pages/Home';
import Distribution from './Components//Pages/Distribution';
import TradeContract from './Components/Pages/TradeContract';
import Products from './Components/Pages/Products'
import ScrollToTop from './Components/ScrollToTop'
import MasalatProduct from './Components/Pages/MasalaProduct';
import BlendedSpices from './Components/Pages/BlendedSpices'
import Groceries from './Components/Pages/Groceries'
import Rice from './Components/Pages/Rice'
import OurBrands from './Components/Pages/OurBrands'
import SPICESWHOLE from './Components/Pages/SPICESWHOLE'
import AboutPage from './Components/Pages/AboutPage';
function App() {
  return (
    <div> 
<BrowserRouter>
      <Header />
      <ScrollToTop />
    <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/import_and_distributor" element={<Distribution />} /> 
          <Route path="/trading_and_contracting" element={<TradeContract />} /> 
          <Route path="/Products" element={<Products />}/>
          <Route path="/Masala-Products" element={<MasalatProduct />} />   
          <Route path="/Blended-Spices" element={<BlendedSpices />} />
          <Route path="/Groceries" element={<Groceries />} />
          <Route path="/Rice" element={<Rice />} />
          <Route path="/Brands" element={<OurBrands />} />
          <Route path="/spices-whole" element={<SPICESWHOLE />} />
          <Route path="/About" element={<AboutPage />} />
          </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App