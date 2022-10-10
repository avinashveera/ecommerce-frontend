import {createSlice} from "@reduxjs/toolkit"

const cartReducer=createSlice({
    name:"cart",
    initialState:{
        value:[
            
        ]
    },
    reducers:{
 
         cart:{
            
         }
  

    }


})

export const {cart}= cartReducer.actions

export default cartReducer.reducer;