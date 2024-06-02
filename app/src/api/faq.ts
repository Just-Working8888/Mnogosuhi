import { instance } from "api";
import { CancelToken } from "axios";
import { IFaq } from "store/models/IFaq";


const getFaq = (sourceToken?: CancelToken) =>
    instance.get<IFaq[]>(`/faq`, { cancelToken: sourceToken });


const endpoints = {
    getFaq,
};
export default endpoints;
