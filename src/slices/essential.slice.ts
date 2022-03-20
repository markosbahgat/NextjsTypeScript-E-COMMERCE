import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";

interface EssensialState {
	boxModel: boolean;
	darkMode: boolean;
}

const initialState: EssensialState = {
	boxModel: false,
	darkMode: false,
};

const essentialSlice = createSlice({
	name: "essential",
	initialState,
	reducers: {
		showModel: (state, action) => {
			console.log(action.payload);
			state.boxModel = action.payload;
		},
		showDarkMode: (state, action) => {
			state.darkMode = action.payload;
		},
	},
});
export const { showModel, showDarkMode } = essentialSlice.actions;
export const essentialReducer = essentialSlice.reducer;
export const essentialState = (state: RootState) => state.essential;
