import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
      const response = await axios.get('https://dummyjson.com/products')
      sessionStorage.setItem("allProducts",JSON.stringify(response.data.products )) 
      return response.data.products  
    }
    )


const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        forFilter:[],
        loading:false,
        error:"",
        prdctPerPage:10,
        currentPage:1
    },
    reducers:{
        filtertData:(state,action)=>{
            const val = action.payload
            state.allProducts = state.forFilter.filter(i=>i.title.toLowerCase().includes(val))
        },
        navigateToNext:(state)=>{
            state.currentPage++
        },
        navigateToPrev:(state)=>{
            state.currentPage--
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true
        }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.forFilter=action.payload
        }),
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false
            state.allProducts = []
            state.error="Error in fetching..."
        })
    }

})

export const {filtertData,navigateToNext,navigateToPrev} = productSlice.actions
export default productSlice.reducer