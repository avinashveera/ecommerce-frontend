import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Card = ({img,category}) => {

  return (

    
   <>
   <div style={{width:"400px",minWidth:"400px",height:"auto",padding:"1%",position:"relative"}}>
       <img style={{width:"100%",height:"100%",overflow:"hidden",}} src={img} alt="" srcset="" />
      <div style={{position:"absolute",top:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
      <h2 style={{color:"#fff"}}>{category}</h2>
       <Link to="/products"><button  style={{padding:"5px 10px",background:"#fff",color:"grey",border:"none",cursor:"pointer"}}>SHOP NOW</button></Link>
      </div>
   </div>
   </>
  )
}

export default Card