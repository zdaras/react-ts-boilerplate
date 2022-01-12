import axios, { AxiosError } from 'axios';

import storage from '@/utils/storage';
import { ILoginResponse } from '@/types/models/user';
import { IError } from '@/types/error';
import { userActions } from '@/store/ducks/user';
import { store } from '@/index';

const API_LOCALSTORAGE: string = storage('API_LOCALSTORAGE').get();

export const otpHeader = 'x-as-otp';

const baseURL = API_LOCALSTORAGE || process.env.API_BASE_URL;
export const authToken = String(process.env.AUTH_TOKEN);

const instance = axios.create({ baseURL });

const noAuthInstance = axios.create({ baseURL });

export const setAuthHeader = async (response: Pick<ILoginResponse, 'access_token' | 'refresh_token'>) => {
	storage('access_token').set(response.access_token);
	storage('refresh_token').set(response.refresh_token);
	instance.defaults.headers.common[authToken] = `Bearer ${response.access_token}`; // set on getCurrentUser success action
	return Promise.resolve();
};

export const deleteAuthHeader = () => {
	storage('access_token').unset();
	storage('refresh_token').unset();
	delete instance.defaults.headers.common[authToken]; // remove on logout action
};

export const setApiUrl = (url?: string) => {
	if (url) {
		storage('API_LOCALSTORAGE').set(url);
		instance.defaults.baseURL = url;
	} else {
		storage('API_LOCALSTORAGE').unset();
		instance.defaults.baseURL = process.env.API_BASE_URL;
	}
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
		const originalRequest = error.config;
		const invalidToken = error.response?.status === 401;

		if (invalidToken) {
			const refreshToken = storage('refresh_token').get();
			// @ts-ignore
			if (!['undefined', 'null'].includes(String(refreshToken)) && !originalRequest._retry) {
				delete originalRequest.headers[authToken];
				try {
					const res = await getAuthToken(refreshToken);
					if ([200, 201].includes(res.status)) {
						await setAuthHeader(res.data);
						// @ts-ignore
						originalRequest._retry = true;
						originalRequest.headers[authToken] = `Bearer ${res.data.access_token}`;
						return instance(originalRequest);
					}
				} catch (err) {
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
