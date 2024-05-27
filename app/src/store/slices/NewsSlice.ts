import { NewsItem, Quetions } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews, fetchNewsById } from 'store/reducers/newsReduser';
import { fetchQuetions, fetchQuetionsById } from 'store/reducers/producRedusers';

interface NewsState {
    data: NewsItem[];
    singleProduct: NewsItem | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: NewsState = {
    data: [],
    status: 'idle',
    singleProduct: null,
    error: null,
    laoding: false
};


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
                state.laoding = false
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch cart items' : 'Failed to fetch cart items';
                state.laoding = false
            })
            .addCase(fetchNewsById.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchNewsById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProduct = action.payload;
                state.laoding = false
            })
            .addCase(fetchNewsById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch product' : 'Failed to fetch product';
                state.laoding = false
            })

    },
});

export const { } = newsSlice.actions;
export const selectProducts = (state: { products: NewsState }) => state.products;

export default newsSlice.reducer;
