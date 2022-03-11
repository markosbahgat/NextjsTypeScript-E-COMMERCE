import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "slices";
import { authReducer } from '../slices/newUser.slice';
import { essentialReducer } from 'slices';
import { cartReducer } from "slices/cart.slice";
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from "./storage";



const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    whitelist:['auth', 'fetch', 'cart']
  }


const rootReducer = combineReducers({
    fetch:fetchReducer,
    auth:authReducer,
    essential:essentialReducer,
    cart:cartReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;