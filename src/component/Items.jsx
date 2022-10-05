import React from 'react'
import {items} from "../data"
import Item from './Item'

const Items = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"40px"}}>

    
{
      items.map((item)=>{

        return( <Item
         img={item.img}
         key={item.id}
         />)
 
     })
}
</div> 
  )


}

export default Items