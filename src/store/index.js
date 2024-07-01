import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import CartItemsReducer from './cartItemsSlice'

const store=configureStore({
    reducer:{
        cart: cartReducer,
        cartitems: CartItemsReducer
    }
})

export default store