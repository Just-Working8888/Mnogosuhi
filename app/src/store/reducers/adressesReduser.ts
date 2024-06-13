import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { CancelToken } from "axios";

export const fetchAdresses = createAsyncThunk<any, { query: string, cancelToken?: CancelToken }, { rejectValue?: string }>(
    'adress/fetchAdresses',
    async ({ query, cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getAdresses(query, cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);

export const fetchAdressesById = createAsyncThunk<any, { itemId: number, cancelToken?: CancelToken }, { rejectValue?: string }>(
    'adress/fetchAdresses',
    async ({ itemId, cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getAdressesById(itemId, cancelToken);
            if (response.data.result && response.data.result.items[0] && response.data.result.items[0].point) {
                const point = response.data.result.items[0].point;
                console.log([point.lon, point.lat]);

                return [point.lon, point.lat]; // Вернуть массив с долготой и широтой
            } else {
                throw new Error('Координаты не найдены для данного объекта.');
            }
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);
