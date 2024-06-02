import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";
import { IProduct } from "store/models/IProduct";

export const fetchProduct = createAsyncThunk<IProduct[], { filters: string, cancelToken?: CancelToken }, { rejectValue?: string }>(
    'product/fetchProducts',
    async ({ filters, cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getProduct(filters, cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);
export const fetchLoadProduct = createAsyncThunk<IProduct[], { filters: string, cancelToken?: CancelToken }, { rejectValue?: string }>(
    'product/fetchLoadProduct',
    async ({ filters, cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getProduct(filters, cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);