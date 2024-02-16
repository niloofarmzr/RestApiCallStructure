import {errorHandler} from './axios/errorHandler.ts';
import axios from './axios/axiosInstance.ts'
import {AxiosRequestConfig} from "axios";

class Request {
    call = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios(options)
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };

    get = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios({...options, method: 'GET'})
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };

    post = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios({...options, method: 'POST'})
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };

    put = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios({...options, method: 'PUT'})
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };

    patch = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios({...options, method: 'PATCH'})
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };

    delete = async <T, D = void>(options: AxiosRequestConfig<D>): Promise<T> => {
        return axios({...options, method: 'DELETE'})
            .then((response) => response.data)
            .catch((error) => errorHandler(error));
    };
}

export default Request;
