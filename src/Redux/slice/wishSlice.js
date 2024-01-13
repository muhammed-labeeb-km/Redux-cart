import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addTo:(state,action)=>{
            state.push(action.payload)
        },
        deleteFrom:(state,action)=>{
            return state.filter((i)=>i.id != action.payload)
        }
    }
})

export const {addTo,deleteFrom} = wishlistSlice.actions
export default wishlistSlice.reducer