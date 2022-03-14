import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "models";
import axios from "axios";
import useRouter from "next/router";
import { setCookie } from "nookies";

interface FetchError {
	errorMessage: string | null;
}
export const PostNewUser = createAsyncThunk<IUser[], IUser, { rejectValue: FetchError }>(
	"fetch/newUser",
	async (params: IUser, { rejectWithValue }) => {
		const router = useRouter;
		try {
			const response = await axios.post("https://jsonplaceholder.typicode.com/users", params);
			localStorage.setItem("userId", response.data.id);
			if (response.status === 201) {
				router.push("/home");
				setCookie(null, "authUser", params.email, {
					maxAge: 30 * 24 * 60 * 60,
					path: "/",
				});
			}
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error as FetchError);
		}
	}
);
