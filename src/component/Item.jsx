import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {cart} from "../action/cartReducer"


const Item = ({img,id}) => {

const dispach=useDispatch();
  const addCart=(e)=>{

   axios.get(`https://veera-backend.herokuapp.com/product/find/${e}`,{}).then(res=>{
     dispach(cart(...res.data))
   })




  }


  

  return (
    <div  id='itemCard' style={{width:"300px",height:"400px",maxWidth:"300px",padding:"10px",position:"relative"}}>

        <img style={{width:"100%",height:"100%"}} src={img} alt="" srcset="" />
        <div className="iconsChild" style={{width:"100%",height:"100%",position:"absolute",top:"0",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <ShoppingCartIcon onClick={()=>{addCart(id)}} key={id}  className='iconBackground' />
         <SearchIcon className='iconBackground' />
         <FavoriteBorderIcon className='iconBackground' />
        </div>

    </div>
  )
}

export default Item