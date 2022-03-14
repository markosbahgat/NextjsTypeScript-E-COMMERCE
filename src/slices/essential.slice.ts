import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store/rootReducer";

interface EssensialState {
	boxModel: boolean;
}

const initialState: EssensialState = {
	boxModel: false,
};

const essentialSlice = createSlice({
	name: "essential",
	initialState,
	reducers: {
		showModel: (state, action) => {
			console.log(action.payload);
			state.boxModel = action.payload;
		},
	},
});
export const {showModel} = essentialSlice.actions;
export const essentialReducer = essentialSlice.reducer;
export const essentialState = (state: RootState) => state.essential;
