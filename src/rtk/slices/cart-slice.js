import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action)=>{
            const repeatedProduct = state.find((product)=>product.id === action.payload.id)
            const clonedProduct = {...action.payload, quantity: 1}
            if (repeatedProduct) {
                repeatedProduct.quantity += 1
            }else {
                state.push(clonedProduct)
            }
            console.log(state);
        },
        removeFromCart: (state, action)=>{
            let repeatedProduct = state.find((product)=>product.id === action.payload.id)
            if (+repeatedProduct.quantity > 1) {
                repeatedProduct.quantity--
            }else{
                return state.filter((product)=> product.id !== action.payload.id)
            }
        },
        clearCart: (state, action)=>{
            return []
        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;