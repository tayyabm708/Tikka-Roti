import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Information from './pages/Information'
import BookUs from './pages/BookUs'
import CrispProvider from './components/CrispProvider'
import ScrollToTop from './components/ScrollToTop'
export default function App() {
  return (
    <div className='bg-[#fef3d8] min-h-screen'>
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <CrispProvider />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/info" element={<Information />} />
      <Route path="/book" element={<BookUs />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  )
}
