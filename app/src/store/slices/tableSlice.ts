import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITable } from 'store/models/ITable';
import { fetchTable } from 'store/reducers/tableReduser';



interface tableState {
    data: ITable[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: tableState = {
    data: [],
    status: 'idle',
    error: null,
    laoding: false
};


const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTable.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchTable.fulfilled, (state, action: PayloadAction<ITable[]>) => {
                state.status = 'succeeded';
                state.data = [...state.data, ...action.payload]
                state.laoding = false
            })
            .addCase(fetchTable.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch products' : 'Failed to fetch products';
                state.laoding = false
            })

        // .addCase(fetchShops.pending, (state) => {
        //     state.status = 'pending';
        //     state.laoding = true
        // })
        // .addCase(fetchShops.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.data = action.payload;
        //     state.laoding = false
        // })
        // .addCase(fetchShops.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error ? action.error.message || 'Failed to fetch products' : 'Failed to fetch products';
        //     state.laoding = false
        // })

        // .addCase(fetchShopById.pending, (state) => {
        //     state.status = 'pending';
        //     state.laoding = true
        // })
        // .addCase(fetchShopById.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.selectedShop = action.payload;
        //     state.laoding = false
        // })
        // .addCase(fetchShopById.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error ? action.error.message || 'Failed to fetch product' : 'Failed to fetch product';
        //     state.laoding = false
        // });
    },
});

// export const { } = tableSlice.actions;
export const selectCart = (state: { products: tableState }) => state.products;

export default tableSlice.reducer;
