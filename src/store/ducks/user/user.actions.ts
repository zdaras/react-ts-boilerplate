import { ThunkA } from '@/types';
import { ILoginParams, IRecoverPasswordParams, IRegisterParams } from '@/services/api/user/types';
import Api from '@/services/api';
import { auth } from '@/services/firebase';
import app, { appActions } from '@/store/ducks/app';
import { toastActions } from '@/store/ducks/toast';

import user from '.';

export const logout = (): ThunkA => async dispatch => {
	await auth.signOut();
	dispatch(user.actions.logoutAction());
	dispatch(app.actions.clearAlerts());
};

export const getCurrentUser = (): ThunkA => async dispatch => {
	try {
		dispatch(user.actions.loginStartAction());
		const data = auth.currentUser;
		if (data) {
			dispatch(user.actions.loginSuccessAction(data as any));
		} else {
			dispatch(logout());
		}
	} catch (e) {
		dispatch(logout());
	}
};

export const login = (p: ILoginParams): ThunkA => async () => {
	try {
		await auth.signInWithEmailAndPassword(p.username, p.password);
		return Promise.resolve();
	} catch (e) {
		return Promise.reject(e);
	}
};

export const register = (p: IRegisterParams): ThunkA => async () => {
	try {
		await auth.createUserWithEmailAndPassword(p.username, p.password);
		return Promise.resolve();
	} catch (e) {
		return Promise.reject(e);
	}
};

export const recoverPassword = (params: IRecoverPasswordParams): ThunkA => async dispatch => {
	try {
		await Api.user.recoverPassword(params);
		dispatch(appActions.routerPush('/login'));
		dispatch(toastActions.success('You can now login with the new password', { timeout: 10000 }));
		return Promise.resolve();
	} catch (e) {
		return Promise.reject(e);
	}
};
