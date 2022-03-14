import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {GetProducts} from "middelwares";
import {fetchParams} from "models";
import {RootState, persistedReducer} from "./rootReducer";

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
			},
		}),
});
store.dispatch(GetProducts(fetchParams));

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
