import React from 'react'

const Cartcard = ({img,title,id,color,size,price}) => {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>

        <img style={{height:"150px"}} src={img} alt="" />

         <div>
             <p><strong>product :</strong> {title}</p>
             <p><strong>id : </strong>{id}</p>
             <p>color : {color}</p>
             <p><strong>size : </strong> {size}</p>

         </div>

         <div style={{margin:"20px 50px"}}>
             <button>-</button>
             <strong style={{margin:"0px 20px"}}>1</strong>
             <button>+</button>  

             <h2>${price}</h2>  
         </div>
    </div>
    </>
  )
}

export default Cartcard