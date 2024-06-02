import { CancelToken } from 'axios';
import { instance } from './index'
import { ICategories, ICategoriesDto } from 'store/models/Categories';



const getCategories = (sourceToken?: CancelToken) =>
    instance.get<ICategories[]>(`/categories/`, { cancelToken: sourceToken });

const getCategoriesById = (id: number, sourceToken?: CancelToken) =>
    instance.get<ICategories>(`/categories/${id}`, { cancelToken: sourceToken });

const createCategory = (id: number, data: ICategoriesDto, sourceToken?: CancelToken) =>
    instance.post<ICategoriesDto>(`/categories/${id}`, { ...data }, { cancelToken: sourceToken })

const updateCategory = (id: number, data: ICategoriesDto, sourceToken?: CancelToken) =>
    instance.put<ICategoriesDto>(`/categories/${id}`, { ...data }, { cancelToken: sourceToken })

const patchCategory = (id: number, data: ICategoriesDto, sourceToken?: CancelToken) =>
    instance.patch<ICategoriesDto>(`/categories/${id}`, { ...data }, { cancelToken: sourceToken })

const deleteCategoryById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/categories/${id}`, { cancelToken: sourceToken });


const endpoints = {
    getCategories,
    getCategoriesById,
    createCategory,
    updateCategory,
    patchCategory,
    deleteCategoryById
};
export default endpoints;
