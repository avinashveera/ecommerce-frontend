import {createSlice} from "@reduxjs/toolkit"

const locaData=JSON.parse(localStorage.getItem('cart'))



const cartReducer=createSlice({
    name:"cart",
    initialState:{
        value:[

       ...locaData  

        ]
    },
    reducers:{
 
         cart:(state,action)=>{

           
    

            const {_id,img,title,price,color}=action.payload;
       
            

           state.value=[
       {       
           _id:_id,
              img:img,
              title:title,
              price:price,
              color:color
            },
            ...state.value
               
       
        ]

       
       


         }  

    }


})

export const {cart}= cartReducer.actions

export default cartReducer.reducer;