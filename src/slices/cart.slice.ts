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
            const product = state.cartProducts.find(item => item.id === action.payload.product.id)
            if(product){
                state.overAllPrice += action.payload.product.price;
                product.amount = action.payload.amount;
            }
        },
        decreament: (state, action) => {
            //console.log(current(state))
            const product = state.cartProducts.find(item => item.id === action.payload.product.id)
            if(product){
                state.overAllPrice -= action.payload.product.price;
                product.amount = action.payload.amount;
            }
        },
        removeCart:(state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.product.id);
            state.overAllPrice -= action.payload.product.price * action.payload.amount;
        },
        clearCart: (state) => {
            state.cartProducts.length = 0;
            state.overAllPrice = 0;
        }
    },
    
})
export const {appendCart, increament, decreament, removeCart, clearCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const cartState = (state:RootState) => state.cart;