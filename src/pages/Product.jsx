import React from 'react'

import Navbar from '../component/Navbar'
import Category from '../component/Category'
import Items from '../component/Items'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'

const product = () => {
  return (

    <>
      <Navbar />

       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

         <div style={{Width:"400px",Height:"700px"}}>
           <img  style={{Width:"400px",maxHeight:"500px"}} src="https://www.bajajauto.com/-/media/Assets/bajajauto/three-wheelers/re/Saving-Calculator/savings_calculator_image_RE-01.ashx" alt="" />
         </div>

         <div style={{display:"flex",alignItems:"left",width:"400px",flexDirection:"column",padding:"20px"}}>
           <h1>Title : Bajaj</h1>
           <p>description : Bajaj Auto Limited is an Indian multinational automotive manufacturing company based in Pune.<br/> It manufactures motorcycles, scooters and auto rickshaws. Bajaj Auto is a part of the Bajaj Group. It was founded by Jamnalal Bajaj in Rajasthan in the  </p>
           <p>price : $20000</p>
            <div style={{display:"flex"}}><div className='autoColor' ></div> <div className='autoColor secondColor'></div> <div className='autoColor thirdColor'></div>   
            
            <select style={{marginLeft:"30px"}}>
              <option value="pertol">pertol</option>
              <option value="desdeal">Diesal</option>
              <option value="cng">CNG</option>
            </select>

            </div>

            <div style={{display:"flex",alignItems:"center",margin:"30px 0px"}}>
              <button style={{width:"30px"}}>-</button>
              <input type="text" value="1" disabled style={{width:"20px",margin:"0px 20px"}} />
              <button>+</button>

              <button style={{marginLeft:"50px"}}>ADD TO CART</button>
            </div>

         </div>

       </div>


      <Newsletter />
      <Footer />
    </>

  )
}

export default product