import React from 'react'

const Cartcard = () => {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>

        <img style={{height:"150px"}} src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/40453/tiago-ev-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75&wm=1" alt="" />

         <div>
             <p><strong>product :</strong> tata tiago</p>
             <p><strong>id : </strong> 78897378</p>
             <p>color : black</p>
             <p><strong>size : </strong> xm</p>

         </div>

         <div style={{margin:"20px 50px"}}>
             <button>-</button>
             <strong style={{margin:"0px 20px"}}>1</strong>
             <button>+</button>  

             <h2>$4999</h2>  
         </div>
    </div>
    </>
  )
}

export default Cartcard