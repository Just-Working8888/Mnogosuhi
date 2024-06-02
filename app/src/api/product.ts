import { CancelToken } from 'axios';
import { instance } from './index'
import { IProduct, IProductDto } from 'store/models/IProduct';




const getProduct = (filters: string, sourceToken?: CancelToken) =>
    instance.get<IProduct[]>(`/product/?${filters}`, { cancelToken: sourceToken });

const getProductById = (id: number, sourceToken?: CancelToken) =>
    instance.get<IProduct>(`/products/${id}`, { cancelToken: sourceToken });

const createProduct = (data: IProductDto, sourceToken?: CancelToken) =>
    instance.post('/products', { ...data }, { cancelToken: sourceToken });

const updateProduct = (id: number, data: IProductDto, sourceToken?: CancelToken) =>
    instance.put(`/products/${id}`, { ...data }, { cancelToken: sourceToken });

const patchProduct = (id: number, data: IProductDto, sourceToken?: CancelToken) =>
    instance.patch(`/products/${id}`, { ...data }, { cancelToken: sourceToken });

const deleteProductById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/products/${id}`, { cancelToken: sourceToken });

const endpoints = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProductById
};
export default endpoints;
