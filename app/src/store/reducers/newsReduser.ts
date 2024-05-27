import { createAsyncThunk } from "@reduxjs/toolkit";
import { CancelToken } from "axios";
import { api } from "../../api";
import { NewsItem, Quetions } from "types/types";


export const fetchNews = createAsyncThunk<NewsItem[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'news/fetchNews',
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await api.getNews();
            return response.data as NewsItem[];
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
export const fetchNewsById = createAsyncThunk<NewsItem, { id: number; cancelToken?: CancelToken }, { rejectValue?: string }>(
    'news/fetchNewsById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.getNewsById(id);
            return response.data as NewsItem;
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch product');
        }
    }
);
