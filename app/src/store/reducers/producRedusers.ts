import { createAsyncThunk } from "@reduxjs/toolkit";
import { CancelToken } from "axios";
import { api } from "../../api";
import { Quetions } from "types/types";


export const fetchQuetions = createAsyncThunk<Quetions[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'cart/fetchItems',
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await api.getQuetions();
            return response.data as Quetions[];
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchQuetionsById = createAsyncThunk<Quetions, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'products/fetchQuetionsById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.getQuetionsById(id);
            return response.data as Quetions;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
