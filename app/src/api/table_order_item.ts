import { CancelToken } from 'axios';
import { instance } from './index'
import { ITableOrderItem, ITableOrderItemDto } from 'store/models/ITableOrderItem';




const getTableOrderItem = (sourceToken?: CancelToken) =>
    instance.get<ITableOrderItem[]>(`/table_orders_item`, { cancelToken: sourceToken });

const getTableOrderItemById = (id: number, sourceToken?: CancelToken) =>
    instance.get<ITableOrderItem>(`/table_orders_item/${id}`, { cancelToken: sourceToken });

const createTableOrderItem = (data: ITableOrderItemDto, sourceToken?: CancelToken) =>
    instance.post('/table_orders_item', { ...data }, { cancelToken: sourceToken });

const updateTableOrderItem = (id: number, data: ITableOrderItemDto, sourceToken?: CancelToken) =>
    instance.put(`/table_orders_item/${id}`, { ...data }, { cancelToken: sourceToken });

const patchTableOrderItem = (id: number, data: ITableOrderItemDto, sourceToken?: CancelToken) =>
    instance.patch(`/table_orders_item/${id}`, { ...data }, { cancelToken: sourceToken });

const deleteTableOrderItemById = (id: number, sourceToken?: CancelToken) =>
    instance.delete(`/table_orders_item/${id}`, { cancelToken: sourceToken });

const endpoints = {
    getTableOrderItem,
    getTableOrderItemById,
    createTableOrderItem,
    updateTableOrderItem,
    patchTableOrderItem,
    deleteTableOrderItemById
};
export default endpoints;
