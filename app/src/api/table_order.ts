import { CancelToken } from 'axios';
import { instance } from './index'
import { ITableOrder, ITableOrderDto } from 'store/models/ITableOrder';




const getTableOrder = (sourceToken?: CancelToken) =>
    instance.get<ITableOrder[]>(`/table_orders`, { cancelToken: sourceToken });

const getTableOrderById = (id: number, sourceToken?: CancelToken) =>
    instance.get<ITableOrder>(`/table_orders/${id}`, { cancelToken: sourceToken });

const createTableOrder = (data: ITableOrderDto, sourceToken?: CancelToken) =>
    instance.post('/table_orders', { ...data }, { cancelToken: sourceToken });

const updateTableOrder = (id: number, data: ITableOrderDto, sourceToken?: CancelToken) =>
    instance.put(`/table_orders/${id}`, { ...data }, { cancelToken: sourceToken });

const patchTableOrder = (id: number, data: ITableOrderDto, sourceToken?: CancelToken) =>
    instance.patch(`/table_orders/${id}`, { ...data }, { cancelToken: sourceToken });

const deleteTableOrderById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/table_orders/${id}`, { cancelToken: sourceToken });

const endpoints = {
    getTableOrder,
    getTableOrderById,
    createTableOrder,
    updateTableOrder,
    patchTableOrder,
    deleteTableOrderById
};
export default endpoints;
