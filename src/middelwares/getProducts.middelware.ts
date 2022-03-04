import { createAsyncThunk } from "@reduxjs/toolkit";
import { IParams, IProduct } from 'models';
import {axios} from 'utils';

interface FetchError {
    errorMessage: string | null
}
export const GetProducts = createAsyncThunk<
    IProduct[],
    IParams,
    {rejectValue: FetchError}
>('fetch/allProducts', async (params:IParams, {rejectWithValue}) => {
    const {limit, id, sort} = params;
    console.log(limit, id, sort)
    try{
        const response = await axios.get<IProduct[]>('/products', {params:{limit:limit, id:id, sort:sort}});
        return response.data
    }
    catch (error:any) {
        return rejectWithValue(error as FetchError);
    }
})