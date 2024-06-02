import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";
import { IReviews } from "store/models/IReviews";

export const fetchReviews = createAsyncThunk<IReviews[], { cancelToken?: CancelToken, }, { rejectValue?: string }>(
    'reviews/fetchReviews',
    async ({ cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getReviews(cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch categories');
        }
    }
);