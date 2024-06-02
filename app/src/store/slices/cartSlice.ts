import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from 'store/models/ICart';
import { fetchCartItems } from 'store/reducers/cartReduser';



interface cartState {
    data: ICart[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: cartState = {
    data: [],
    status: 'idle',
    error: null,
    laoding: false
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchCartItems.fulfilled, (state, action: PayloadAction<ICart[]>) => {
                state.status = 'succeeded';
                state.data = [...state.data, ...action.payload]
                state.laoding = false
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
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

// export const { } = cartSlice.actions;
export const selectCart = (state: { products: cartState }) => state.products;

export default cartSlice.reducer;
