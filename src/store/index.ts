import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import {GetProducts} from "middelwares";
import { fetchParams } from 'models';
import { RootState } from './rootReducer';




const store = configureStore({
    reducer: rootReducer
})
store.dispatch(GetProducts(fetchParams))

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;