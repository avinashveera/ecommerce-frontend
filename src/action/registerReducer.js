import {createSlice} from "@reduxjs/toolkit"

const regiaterData=createSlice({
    name:"cart",
    initialState:{
        value:
        {
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
        repassword:""
        
        }
    }
    ,
    reducers:{

        eFunc:(state,action)=>{
            const {name,value}=action.payload

            state.value={
                ...state.value,
                [name]: value
              }

        }



    }


})
export const {eFunc} =regiaterData.actions;

export default regiaterData.reducer;