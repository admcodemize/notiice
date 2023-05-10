import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import { TAxiosPost, TAxiosGet } from "../../assets/types/utils/hooks/useAxios";

export const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.NODE_ENV === "production" ? "https://app.meetngo.ch/api" : "http://localhost:8010/api",
    timeout: 30000,
    timeoutErrorMessage: "Server not reached",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
};

/** @desc Check if internal error has occurred */
export const isInternalError = (err: any): boolean => err.code === "ERR_NETWORK" || err.code === "ECONNABORTED" || !err?.response?.data?.message || !err?.message;

/** @desc Modify reject error object */
export const rejectObj = (err: any): any => ({
    ...err,
    tFunc: err.code === "ERR_NETWORK" || err.code === "ECONNABORTED" || !err?.response?.data?.message || !err?.message,
    internalError: isInternalError(err),
    message: err.code === "ERR_NETWORK" ? "axios.networkError"
        : err.code === "ECONNABORTED" ? "axios.econnAborted"
            : err?.response?.data?.message?.message || err?.response?.data?.message || err?.message?.message || err?.message || "axios.internalServerError"
});

export const useAxiosPublic = () => {
    /** @desc Axios post request */
    const publicPost = async ({ routerPath, data = {} }: TAxiosPost): Promise<AxiosResponse> => new Promise((resolve, reject) => axios.create(axiosConfig).post(routerPath, data, {})
        .then((res) => resolve(res))
        .catch((err) => reject(rejectObj(err))));

    /** @desc Axios read request */
    const publicGet = ({ routerPath, params = {} }: TAxiosGet): Promise<AxiosResponse> => new Promise((resolve, reject) => axios.create(axiosConfig).get(routerPath, { params })
        .then((res) => resolve(res))
        .catch((err) => reject(rejectObj(err))));

    return {
        publicPost,
        publicGet
    };
};