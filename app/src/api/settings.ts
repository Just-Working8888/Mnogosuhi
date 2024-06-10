import { instance } from "api";
import { CancelToken } from "axios";
import { ISettingGet, ISettings } from "store/models/ISetting";

const getSettings = (sourceToken?: CancelToken) =>
    instance.get<ISettingGet>(`/settings/`, { cancelToken: sourceToken });


const endpoints = {
    getSettings,
};
export default endpoints;
