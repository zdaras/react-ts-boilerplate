import { ThunkA } from '@/types';
import { ILoginParams, IRecoverPasswordParams, IRegisterParams } from '@/services/api/user/types';
import Api from '@/services/api';
import { appActions } from '@/store/ducks/app';
import { toastActions } from '@/store/ducks/toast';
import storage from '@/utils/storage';
import { setAuthHeader, deleteAuthHeader } from '@/services/api/axios';

import user from '.';

export const logout = (): ThunkA => async dispatch => {
	const refresh_token: string = storage('refresh_token').get();
	Api.user.logout({ refresh_token });
	dispatch(user.actions.logoutAction());
	deleteAuthHeader();
};

export const getCurrentUser =
	(withLoading = true): ThunkA =>
	async dispatch => {
		try {
			if (withLoading) dispatch(user.actions.loginStartAction());
			const access_token: string = storage('access_token').get();
			const refresh_token: string = storage('refresh_token').get();
			const data = await Api.user.currentUser(access_token);
			setAuthHeader({ access_token, refresh_token });
			dispatch(user.actions.loginSuccessAction(data));
			return Promise.resolve();
		} catch (e) {
			dispatch(logout());
			return Promise.reject(e);
		}
	};

export const login =
	(p: ILoginParams, redirect?: string): ThunkA =>
	async dispatch => {
		try {
			const res = await Api.user.login(p);
			setAuthHeader(res);
			await dispatch(getCurrentUser(false));
			if (redirect) dispatch(appActions.routerPush(redirect));
			return Promise.resolve();
		} catch (e) {
			return Promise.reject(e);
		}
	};

export const register =
	(p: IRegisterParams): ThunkA =>
	async () => {
		try {
			const res = await Api.user.register(p);
			return Promise.resolve(res);
		} catch (e) {
			return Promise.reject(e);
		}
	};

export const recoverPassword =
	(params: IRecoverPasswordParams): ThunkA =>
	async dispatch => {
		try {
			await Api.user.recoverPassword(params);
			dispatch(appActions.routerPush('/login'));
			dispatch(toastActions.success('You can now login with the new password'));
			return Promise.resolve();
		} catch (e) {
			return Promise.reject(e);
		}
	};
