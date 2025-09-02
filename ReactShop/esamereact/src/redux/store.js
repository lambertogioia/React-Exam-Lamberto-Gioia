import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart/cartReducer"


const store = configureStore({
    reducer: {
       
        cart: cartReducer,
        
    }
})

export default store