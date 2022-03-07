import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "slices";
import { authReducer } from '../slices/newUser.slice';
import { essentialReducer } from 'slices';
import { cartReducer } from "slices/cart.slice";

const rootReducer = combineReducers({
    fetch:fetchReducer,
    auth:authReducer,
    essential:essentialReducer,
    cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;