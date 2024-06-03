import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import axios, { CancelToken } from "axios";
import { getCookie } from "helpers/cookies";
import { ICart, ICartDto } from "store/models/ICart";
import { ICartItem, ICartItemDto } from "store/models/ICartItem";

const session_key = getCookie('session_key');

export const fetchCartItems = createAsyncThunk<ICart[], { cancelToken?: CancelToken, id?: number }, { rejectValue?: string }>(
    'cart/fetchCartItems',
    async ({ cancelToken, id }, { rejectWithValue }) => {
        try {
            const response = await api.getOwnCartItems(id);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);

export const fetchCartItem = createAsyncThunk<ICartItem[], { cancelToken?: CancelToken }, { rejectValue?: string }>(
    'cart/fetchCartItems',
    async ({ cancelToken }, { rejectWithValue }) => {
        try {
            const response = await api.getCartItem(cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);

export const fetchCartItemById = createAsyncThunk<ICart, { cancelToken?: CancelToken, id: number }, { rejectValue?: string }>(
    'cart/fetchCartItemById',
    async ({ cancelToken, id }, { rejectWithValue }) => {
        try {
            const response = await api.getCartItemById(id, cancelToken);
            return response.data
        } catch (error) {
            return rejectWithValue(typeof error === 'string' ? error : 'Failed to fetch cart items');
        }
    }
);


export const createCart = createAsyncThunk(
    'cart/createCart',
    async ({ data }: { data: ICartDto; }, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.createCart(data, source.token);
        localStorage.setItem('cart_id', response.data.id)
        return response.data;
    }
);


export const addCartItem = createAsyncThunk(
    'cart/createCartItem',
    async ({ data }: { data: ICartItemDto; }, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.createCartItem(data, source.token);
        return response.data;
    }
);


export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({ data, id }: { data: ICartDto; id: number }, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.updateCart(id, data, source.token);
        return response.data;
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem',
    async ({ data, id }: { data: ICartItemDto; id: number }, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.updateCartItem(id, data, source.token);
        return response.data;
    }
);

export const patchCart = createAsyncThunk(
    'cart/createCart',
    async ({ data, id }: { data: ICartDto; id: number }, { signal }) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => source.cancel('Operation canceled by the user.'));
        const response = await api.patchCart(id, data, source.token);
        return response.data;
    }
);