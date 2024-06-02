import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";
import { ICategories } from "store/models/Categories";

export const fetchCategories = createAsyncThunk<ICategories[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'category/fetchCategories',
    async ({ cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getCategories(cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);
