import { CancelToken } from 'axios';
import { instance } from './index'
import { NewsItem, Quetions } from 'types/types';


const getNews = (
    sourceToken?: CancelToken
) =>
    instance.get<NewsItem[]>(
        `posts`,
        { cancelToken: sourceToken }
    );

const getNewsById = (id?: number, sourceToken?: CancelToken) =>
    instance.get<NewsItem>(`/posts/${id}`, {
        cancelToken: sourceToken,
    });


const endpoints = {
    getNews,
    getNewsById
};
export default endpoints;