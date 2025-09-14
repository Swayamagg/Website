import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Homepage from './landing_page/home/Homepage.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
   <Footer/>
  </BrowserRouter>
)
