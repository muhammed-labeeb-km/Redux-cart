import { createSlice } from "@reduxjs/toolkit";

const caSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
           const existingPrd = state.find(i=>i.id == action.payload.id)
           if (existingPrd){

            const remainingPrd= state.filter(i=>i.id != existingPrd.id) 

            existingPrd.quantity++
            existingPrd.totalPrice = (existingPrd.quantity)*(existingPrd.price) 
            
            state = ([...remainingPrd,existingPrd])

           } else{
            state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
           }
        },
        removeFromCart:(state,action)=>{
            const currentProduct = state.find(i=>i.id==action.payload.id)
            const notRemoved = state.filter(i=>i.id !== action.payload.id)
            if(currentProduct.quantity>1){
                currentProduct.quantity--
                currentProduct.totalPrice = (currentProduct.quantity)*(currentProduct.price)
                state=([...notRemoved,currentProduct])
            }
            else{
                return notRemoved
            }
        },
        removeAll:(state)=>{
            return [];
        }
    }
})

export const {addToCart,removeFromCart,removeAll} = caSlice.actions
export default caSlice.reducer