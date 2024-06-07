import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { api } from "api";
import axios from "axios";
import { IBiling } from "store/models/IBiling";

export const createBiling = createAsyncThunk(
    'biling/createBiling',
    async ({ data }: { data: IBiling; }, { signal }) => {
        try {
            const source = axios.CancelToken.source();
            signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
            const response = await api.createBilingItem(data, source.token);
            localStorage.setItem('cart_id', response.data.id)
            message.success('Successfully created')
            return response.data;
        } catch (error) {
            message.error('Ошибка сервера')
        }

    }
);
