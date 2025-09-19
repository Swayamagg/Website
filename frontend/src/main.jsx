import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Homepage from './landing_page/home/Homepage.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import Pricing from './landing_page/pricing/Pricing.jsx';
import Support from './landing_page/support/Support.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
   <Footer/>
  </BrowserRouter>
)
