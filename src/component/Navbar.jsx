import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"

import Announcement from './Announcement';
import { positions } from '@mui/system';

const Navbar = () => {


  const cart=useSelector(state=>state.cart.value);


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

{
    
  localStorage.getItem('username')?<Link to="/login" style={{textDecoration:"none"}}>&nbsp;&nbsp;{localStorage.getItem('username')}&nbsp;&nbsp;</Link>
  :<><Link to="/login" style={{textDecoration:"none"}}>login</Link>
  <Link to="/register" style={{margin:"0px 20px",textDecoration:"none"}}>signup</Link></>

}




      <Link to="/cart" style={{textDecoration:"none",display:"flex",position:"relative"}}> <ShoppingCartIcon /><strong style={{position:"absolute",top:"-10px",left:"25px"}} >{cart.length}</strong></Link>
     </div>

   </div>
   </>
  )
}

export default Navbar