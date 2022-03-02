import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "slices/getProducts.slice";

const rootReducer = combineReducers({
    fetch:fetchReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;