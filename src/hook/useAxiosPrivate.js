import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';
import auth from '../utils/auth';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers.authorization) {
                    config.headers.authorization = `Bearer ${auth.getAccessToken()}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (error.response.status === 403) {
                    const newAccessToken = await refresh();
                    prevRequest.headers.authorization = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );
        return () => {
            axiosPrivate.interceptors.response.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [auth.getAccessToken(), refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;
