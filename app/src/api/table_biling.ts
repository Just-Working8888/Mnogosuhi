import { instance } from "api";
import { CancelToken } from "axios";
import { ITableBilingDto } from "store/models/ITableBiling";

const createTableBiling = (data: ITableBilingDto, sourceToken?: CancelToken) =>
    instance.post('/table_billing/', { ...data }, {
        headers: {
            "Sessionkey": localStorage.getItem('session_key'),
        },
        cancelToken: sourceToken
    });
const endpoints = {
    createTableBiling,
};
export default endpoints;
