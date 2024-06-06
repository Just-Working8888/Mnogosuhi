import { CancelToken } from 'axios';
import { instance } from './index'
import { IBiling } from 'store/models/IBiling';





const getBilingItem = (sourceToken?: CancelToken) =>
    instance.get<IBiling[]>(`/biling`, { cancelToken: sourceToken });

const getBilingItemById = (id: number, sourceToken?: CancelToken) => {
    const sessionKey = localStorage.getItem('session_key');
    return instance.get<IBiling>(`/biling/${id}/`, {
        headers: {
            "Sessionkey": sessionKey,
        },
        cancelToken: sourceToken
    },);
}
const createBilingItem = (data: IBiling, sourceToken?: CancelToken) =>
    instance.post('/billing/', { ...data }, {
        headers: {
            "Sessionkey": localStorage.getItem('session_key'),
        },
        cancelToken: sourceToken
    });

const updateBilingItem = (id: number, data: IBiling, sourceToken?: CancelToken) =>
    instance.put(`/biling/${id}/`, { ...data }, { cancelToken: sourceToken });

const patchBilingItem = (id: number, data: IBiling, sourceToken?: CancelToken) =>
    instance.patch(`/biling/${id}`, { ...data }, { cancelToken: sourceToken });

const deleteBilingItemById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/biling/${id}/`, {
        headers: {
            "Sessionkey": localStorage.getItem('session_key'),
        },
        cancelToken: sourceToken
    });

const endpoints = {
    getBilingItem,
    getBilingItemById,
    createBilingItem,
    updateBilingItem,
    patchBilingItem,
    deleteBilingItemById
};
export default endpoints;
