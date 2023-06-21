import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "./useAxiosPublic";

import { useRefreshToken } from "./useRefreshToken";
import { useAuthContext } from "./useContext";

import { TAxiosGet, TAxiosPost } from "../../assets/types/utils/hooks/useAxios";

export const useAxiosPrivate = () => {
    /** @desc Returns refresh token for authentication */
    const refreshToken = useRefreshToken();

    /** @desc Destructuring auth context -> ../context.Auth.tsx */
    const { auth } = useAuthContext();

    /** @desc Check out hook "../hooks/useAxiosPrivate.tsx" */
    const axiosPrivateCall = axios.create(axiosConfig);

    useEffect(() => {
        const reqIntercept = axiosPrivateCall.interceptors.request.use(
            (config) => {
                if (config?.headers && !config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
                } return config;
            }, (err) => Promise.reject(err));

        const resIntercept = axiosPrivateCall.interceptors.response.use(
            (res) => res,
            async (err) => {
                const prevReq = err?.config;

                /** @desc Check if failed due to an expired access token and handle endless request */
                if (err?.response?.status === 403 && !prevReq?.sent) {
                    prevReq.send = true;
                    const accessToken = await refreshToken();
                    prevReq.headers["Authorization"] = `Bearer ${accessToken}`;
                    return axiosPrivateCall(prevReq);
                } return Promise.reject(err);
            });

        return () => {
            /** @desc Remove interceptor during cleanup */
            axiosPrivateCall.interceptors.request.eject(reqIntercept);
            axiosPrivateCall.interceptors.response.eject(resIntercept);
        }
    }, [auth, refreshToken]);

    /** @desc Axios post request */
    const privatePost = async ({ routerPath, data = {} }: TAxiosPost): Promise<AxiosResponse> => axiosPrivateCall.post(routerPath, data, {});

    /** @desc Axios read request */
    const privateGet = async ({ routerPath, params = {} }: TAxiosGet): Promise<AxiosResponse> => axiosPrivateCall.get(routerPath, { params });

    return {
        privatePost,
        privateGet
    };
}
