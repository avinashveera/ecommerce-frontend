import React from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Newsletter = () => {
  return (
    <div style={{width:"100%",margin:"50px 0px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h1>Newsletter</h1>
        <p>Get timely updates from your favrate product</p>
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
            <input style={{width:"300px",height:"30px"}} type="text" />
            <button style={{border:"1px solid black",backgroundColor:"teal",color:"#000"}} placeholder="email" ><FavoriteBorderIcon style={{width:"50px",height:"30px"}}/> </button>
        </div>

    </div>
  )
}

export default Newsletter