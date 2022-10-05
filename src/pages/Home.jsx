import Slider from '../component/Slider'
import React from 'react'

import Navbar from '../component/Navbar'
import Category from '../component/Category'
import Items from '../component/Items'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Slider /> 

  <Category />

    <Items />    

  <Newsletter/>
  <Footer/>
    </>

  )
}

export default Home