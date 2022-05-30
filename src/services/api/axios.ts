import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import storage from '@/utils/storage';
import { ILoginResponse } from '@/types/models/user';
import { IError } from '@/types/error';
import { userActions } from '@/store/ducks/user';
import { store } from '@/store';
import config from '@/utils/config';

export const otpHeader = 'x-as-otp';

const baseURL = config.API_BASE_URL;
export const authToken = String(config.AUTH_TOKEN);

const instance = axios.create({ baseURL });

const noAuthInstance = axios.create({ baseURL });

export const setAuthHeader = (response: Pick<ILoginResponse, 'access_token' | 'refresh_token'>) => {
	storage('access_token').set(response.access_token);
	storage('refresh_token').set(response.refresh_token);
	instance.defaults.headers.common[authToken] = `Bearer ${response.access_token}`; // set on getCurrentUser success action
};

export const deleteAuthHeader = () => {
	storage('access_token').unset();
	storage('refresh_token').unset();
	delete instance.defaults.headers.common[authToken]; // remove on logout action
};

let authTokenRequest: Promise<any> | null;

function resetAuthTokenRequest() {
	authTokenRequest = null;
}

function getAuthToken(refreshToken: string) {
	if (!authTokenRequest) {
		authTokenRequest = noAuthInstance.post('/auth/refresh', { refreshToken });
		authTokenRequest.then(resetAuthTokenRequest, resetAuthTokenRequest);
	}

	return authTokenRequest;
}

instance.interceptors.response.use(
	res => res,
	async (error: AxiosError<IError>) => {
		const originalRequest: AxiosRequestConfig & { _retry?: boolean } = error.config;
		const invalidToken = error.response?.status === 401;

		if (invalidToken) {
			const refreshToken = storage('refresh_token').get();

			if (!['undefined', 'null'].includes(String(refreshToken)) && !originalRequest._retry) {
				delete originalRequest.headers?.[authToken];
				try {
					const res = await getAuthToken(refreshToken);
					if ([200, 201].includes(res.status)) {
						setAuthHeader(res.data);
						originalRequest._retry = true;
						if (originalRequest.headers) originalRequest.headers[authToken] = `Bearer ${res.data.access_token}`;
						return instance(originalRequest);
					}
				} catch (err: any) {
					store.dispatch<any>(userActions.logout());
					return Promise.reject(err?.response?.data);
				}
			} else {
				return Promise.reject(error?.response?.data);
			}
		}

		return Promise.reject(error?.response?.data);
	}
);

export const { get, post, put, delete: del } = instance;

export default instance;
