import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { api } from "api";
import axios from "axios";
import { setSessionKey } from "helpers/session_key";
import { useAppDispatch } from "store/hook";
import { IBiling } from "store/models/IBiling";
import { createCart } from "./cartReduser";

export const createBiling = createAsyncThunk(
    'biling/createBiling',
    async ({ data }: { data: IBiling; }, { signal }) => {

        try {
            const source = axios.CancelToken.source();
            signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
            const response = await api.createBilingItem(data, source.token);
            message.success('Successfully created')

            return response.data;
        } catch (error) {
            message.error('Ошибка сервера')
        } finally {
            localStorage.removeItem('cart_id')
            localStorage.removeItem('table_key')
            localStorage.removeItem('session_key')
        }

    }
);

