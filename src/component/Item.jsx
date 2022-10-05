import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = ({img}) => {
  return (
    <div id='itemCard' style={{width:"300px",height:"400px",maxWidth:"300px",padding:"10px",position:"relative"}}>

        <img style={{width:"100%",height:"100%"}} src={img} alt="" srcset="" />
        <div className="iconsChild" style={{width:"100%",height:"100%",position:"absolute",top:"0",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <ShoppingCartIcon className='iconBackground' /><SearchIcon className='iconBackground' /><FavoriteBorderIcon className='iconBackground' />
        </div>

    </div>
  )
}

export default Item