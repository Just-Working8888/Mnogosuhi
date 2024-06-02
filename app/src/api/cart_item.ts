import { CancelToken } from 'axios';
import { instance } from './index'
import { ICartItem, ICartItemDto } from 'store/models/ICartItem';




const getCartItem = (sourceToken?: CancelToken) =>
    instance.get<ICartItem[]>(`/cart_item`, { cancelToken: sourceToken });

const getCartItemById = (id: number, sourceToken?: CancelToken) =>
    instance.get<ICartItem>(`/cart_item/${id}`, { cancelToken: sourceToken });

const createCartItem = (data: ICartItemDto, sourceToken?: CancelToken) =>
    instance.post('/cart_item', { ...data }, { cancelToken: sourceToken });

const updateCartItem = (id: number, data: ICartItemDto, sourceToken?: CancelToken) =>
    instance.put(`/cart_item/${id}`, { ...data }, { cancelToken: sourceToken });

const patchCartItem = (id: number, data: ICartItemDto, sourceToken?: CancelToken) =>
    instance.patch(`/cart_item/${id}`, { ...data }, { cancelToken: sourceToken });

const deleteCartItemById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/cart_item/${id}`, { cancelToken: sourceToken });

const endpoints = {
    getCartItem,
    getCartItemById,
    createCartItem,
    updateCartItem,
    patchCartItem,
    deleteCartItemById
};
export default endpoints;
