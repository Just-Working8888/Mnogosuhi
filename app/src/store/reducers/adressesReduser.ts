import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";

export const fetchAdresses = createAsyncThunk<any, { query: string, cancelToken?: CancelToken }, { rejectValue?: string }>(
    'adress/fetchAdresses',
    async ({ query, cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getAdresses(query, cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);
