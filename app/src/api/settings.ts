import { instance } from "api";
import { CancelToken } from "axios";
import { ISettings } from "store/models/ISetting";

const getSettings = (sourceToken?: CancelToken) =>
    instance.get<ISettings[]>(`/settings`, { cancelToken: sourceToken });


const endpoints = {
    getSettings,
};
export default endpoints;
