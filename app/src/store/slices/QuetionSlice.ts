import { Quetions } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuetions, fetchQuetionsById } from 'store/reducers/producRedusers';

interface QuetionsState {
    data: Quetions[];
    singleProduct: Quetions | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: QuetionsState = {
    data: [],
    status: 'idle',
    singleProduct: null,
    error: null,
    laoding: false
};


const quetionSlice = createSlice({
    name: 'quetion',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuetions.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchQuetions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
                state.laoding = false
            })
            .addCase(fetchQuetions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch cart items' : 'Failed to fetch cart items';
                state.laoding = false
            })
            .addCase(fetchQuetionsById.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchQuetionsById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProduct = action.payload;
                state.laoding = false
            })
            .addCase(fetchQuetionsById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch product' : 'Failed to fetch product';
                state.laoding = false
            })

    },
});

export const { } = quetionSlice.actions;
export const selectProducts = (state: { products: QuetionsState }) => state.products;

export default quetionSlice.reducer;
