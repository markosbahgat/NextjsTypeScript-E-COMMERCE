import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from 'models';
import GetProducts from 'middelwares/getProducts.middelware';
import { RootState } from '../store/rootReducer';

interface FetchState {
    allProducts:IProduct[],
    loading:boolean,
    errorMessage:string | null | undefined
}

const initialState:FetchState = {
    allProducts:[],
    loading:false,
    errorMessage:null
};

const fetchProductSlice = createSlice({
    name:'fetch',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(GetProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(GetProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loading = false;
        })
        builder.addCase(GetProducts.rejected, (state, action) => {
            state.errorMessage = action.payload?.errorMessage;
            state.loading = false;
        })
    },
})

export const fetchReducer = fetchProductSlice.reducer;
export const fetchState = (state:RootState) => state.fetch;