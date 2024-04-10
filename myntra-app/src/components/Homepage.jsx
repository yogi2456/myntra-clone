import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FakeStoreAllProducts from './FakeStoreAllProducts'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <FakeStoreAllProducts/>
      <Footer/>
    </div>
  )
}

export default Homepage
