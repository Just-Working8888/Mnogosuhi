import { instance } from "api";
import { CancelToken } from "axios";
import { IPromotionResponse, ISettingGet, ISettings } from "store/models/ISetting";

const getSettings = (sourceToken?: CancelToken) =>
    instance.get<ISettingGet>(`/settings/`, { cancelToken: sourceToken });

const getSettingsPromotions = (sourceToken?: CancelToken) =>
    instance.get<IPromotionResponse>(`/settings_promotions/`, { cancelToken: sourceToken });

const endpoints = {
    getSettings,
    getSettingsPromotions
};
export default endpoints;
