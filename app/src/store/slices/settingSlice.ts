import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettings } from 'store/models/ISetting';
import { fetchSetting } from 'store/reducers/settingReduser';



interface settingState {
    data: ISettings[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    laoding: boolean
}

const initialState: settingState = {
    data: [],
    status: 'idle',
    error: null,
    laoding: false
};


const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSetting.pending, (state) => {
                state.status = 'pending';
                state.laoding = true
            })
            .addCase(fetchSetting.fulfilled, (state, action: PayloadAction<ISettings[]>) => {
                state.status = 'succeeded';
                state.data = [...state.data, ...action.payload]
                state.laoding = false
            })
            .addCase(fetchSetting.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error ? action.error.message || 'Failed to fetch products' : 'Failed to fetch products';
                state.laoding = false
            })
    },
});

// export const { } = settingSlice.actions;
export const selectSetting = (state: { products: settingState }) => state.products;

export default settingSlice.reducer;
