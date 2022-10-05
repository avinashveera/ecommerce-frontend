import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Announcement from './Announcement';

const Navbar = () => {
  return (
   <>
   <Announcement/>
   <div className='navbar'>

     <div style={{flex:1,display:"flex",alignItems:"center",margin:"10px"}}>
      EN &nbsp; <div style={{border:"0.5px solid grey",borderRadius:"15px",padding:"0px 5px ",display:"flex",alignItems:"center"}}><input placeholder='search' style={{border:"none"}}  type="text" name="" id="" ></input> <SearchIcon /></div> 
     </div>
     <div style={{flex:1}}>
   <h1>urban reach</h1>
     </div>
     <div className='navbar3dsec' style={{flex:1,display:"flex",alignItems:"center",justifyContent:"right",marginRight:"30px"}} >
     <a href="/" style={{textDecoration:"none"}}>login</a>
     <a href="/" style={{margin:"0px 20px",textDecoration:"none"}}>signup</a>
      <ShoppingCartIcon/>
     </div>

   </div>
   </>
  )
}

export default Navbar