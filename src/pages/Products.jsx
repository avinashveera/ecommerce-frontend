import React from 'react'
import Footer from '../component/Footer'
import Items from '../component/Items'
import Navbar from '../component/Navbar'
import Newsletter from "../component/Newsletter"

const Product = () => {
  return (
    <>

    <Navbar/>

    <h1>CARS</h1>
    <div style={{display:"flex",justifyContent:"space-between",margin:"0px 20px"}}>
      
        <div style={{display:"flex",alignItems:"center"}}>
        <h3>fillter: &nbsp;&nbsp; </h3>
         <select style={{height:"30px"}} name="" id="">
           <option value="auto"> auto</option>
           <option value="car">car</option>
           <option value="suv">suv</option>
         </select>
         &nbsp;
         <select style={{height:"30px"}} name="" id="">
           <option value="auto">milage</option>
           <option value="car">speed</option>
           <option value="suv">look</option>
         </select>

         
        </div>

        <div style={{display:"flex",alignItems:"center"}}>
        <h3>short: &nbsp;</h3>
         <select style={{height:"30px"}} name="" id="">
           <option value="auto">newest</option>
           <option value="car">price(ase)</option>
           <option value="suv">price(dec)</option>
         </select>
         
        </div>
    </div>


    <Items/>

      <Newsletter/>
      <Footer/>

    </>
  )
}

export default Product