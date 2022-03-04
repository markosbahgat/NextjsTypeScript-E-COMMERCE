import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "slices/getProducts.slice";
import { authReducer } from '../slices/newUser.slice';

const rootReducer = combineReducers({
    fetch:fetchReducer,
    auth:authReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;