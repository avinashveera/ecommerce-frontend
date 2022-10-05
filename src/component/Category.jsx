import React from 'react'
import {category} from "../data"
import Card from './Card'
const Category = () => {
  return (
<>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"40px"}}>

 
{category.map((data)=>{

    return (<>

      <Card 
      img={data.img}
      category={data.category}
      key={data.id}
      />
    </>)

})}
  </div> 
</>
  )
}

export default Category;