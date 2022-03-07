import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store/rootReducer';
import { IProduct } from '../models/interfaces/product.model';

interface CartProducts extends IProduct {
    amount: number
}
interface CartState {
    cartProducts:CartProducts[],
    overAllPrice:number,
}

const initialState:CartState = {
    cartProducts:[],
    overAllPrice:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        appendCart: (state, action) => {
            state.cartProducts.push(action.payload);
            state.overAllPrice += action.payload.amount * action.payload.price;
        },
        increament: (state, action) => {
            console.log(action.payload)
            state.overAllPrice += action.payload;
        },
        decreament: (state, action) => {
            console.log(action.payload)
            state.overAllPrice -= action.payload;
        },
        removeCart:(state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.product.id);
            state.overAllPrice -= action.payload.product.price * action.payload.amount;
        }
    },
    
})
export const {appendCart, increament, decreament, removeCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const cartState = (state:RootState) => state.cart;