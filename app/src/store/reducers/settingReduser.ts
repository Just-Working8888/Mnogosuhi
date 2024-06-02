import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";
import { ISettings } from "store/models/ISetting";

export const fetchSetting = createAsyncThunk<ISettings[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'setting/fetchSetting',
    async ({ cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getSettings(cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);
