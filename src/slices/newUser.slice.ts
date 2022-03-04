import { createSlice } from "@reduxjs/toolkit";
import {PostNewUser} from 'middelwares';
import { RootState } from '../store/rootReducer';

interface AuthState {
    loading:boolean,
    errorMessage:string | null | undefined
}

const initialState:AuthState = {
    loading:false,
    errorMessage:null
};

const authUserSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(PostNewUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(PostNewUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(PostNewUser.rejected, (state, action) => {
            state.errorMessage = action.payload?.errorMessage;
            state.loading = false;
        })
    },
})

export const authReducer = authUserSlice.reducer;
export const authState = (state:RootState) => state.auth;