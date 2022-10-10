import {configureStore} from "@reduxjs/toolkit"
 import cartReducer from "./action/cartReducer"
 import registerReducer from "./action/registerReducer";
 import loginReducer from "./action/loginReducer";


const store= configureStore({
    reducer:{
        cart:cartReducer,
        register:registerReducer,
        login:loginReducer
    }
})
export default store;