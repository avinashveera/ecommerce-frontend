import React from 'react'
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import Footer from "../component/Footer"
import Cartcard from '../component/Cartcard'

const Cart = () => {
  return (
    <>
      <Navbar />


      <h1 style={{ textAlign: "center" }}>YOUR BAG</h1>

      <div className='mainContainer' style={{ display: "flex",flexWrap:"wrap", alignContent: "center", justifyContent: "center", margin: "50px 50px" }}>



        <div className='containerCart1' style={{ flex: "2" }}>

          <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 20px" }}>
            <button style={{ border: "1px solid black", padding: "5px 20px" }}>CONTINING SHOPPING</button>
            <div>
              <a href="/">shopping bag 0</a>&nbsp;&nbsp;&nbsp;
              <a href="/">your wishlist 2</a>
            </div>

          </div>

          <Cartcard/><Cartcard/> <Cartcard/>
        </div>

        <div style={{ position:"relative",flex: "1"}}>
        <button style={{position:"absolute",right:"10px", border: "1px solid black",backgroundColor:"#000",color:"#fff", padding: "5px 20px" }}>CHECKOUT</button>
           
           <div>
             <h1>Order summery</h1>
             <p>subtotal $800</p>
             <p>estimate shipping $ 20</p>
             <p>discount $10</p>
             <p>total $700</p>
             <button>CHECKOUT</button>
           </div>
        </div>

      </div>



      <Newsletter />
      <Footer />

    </>
  )
}

export default Cart