import {AxiosError} from "axios";

export const errorHandler = (error: AxiosError) => {
    alert(error.message)
    return Promise.reject(error);
};
