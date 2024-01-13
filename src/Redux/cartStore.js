import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import wishlistSlice from "./slice/wishSlice";
import caSlice from './slice/cartSlice'

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishReducer:wishlistSlice,
        cartReducer:caSlice
    }
})

export default cartStore