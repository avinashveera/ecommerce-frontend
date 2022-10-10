import React, { useEffect, useState } from 'react'
import {items} from "../data"
import Item from './Item'
import axios from 'axios'
const Items = () => {

  const[apidata,setApidata]=useState([])

useEffect(()=>{

  try {

    axios.get("https://veera-backend.herokuapp.com/product/products").then((res)=>{
      setApidata(res.data)

    
    }).catch((err)=>{
      return err
    })
    
  } catch (error) {

    setApidata({message:"server error"})
    
  }

},[])

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"40px"}}>

    
{
      apidata.map((item)=>{
        
        return( <Item
        id={item._id}
         img={item.img}
         
         />)
 
     })
}
</div> 
  )


}

export default Items;