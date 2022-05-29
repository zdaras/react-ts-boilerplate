import { history } from '@/store';
import { ThunkA } from '@/types';
import storage from '@/utils/storage';
import { IThemeMode, defaultTheme } from '@/styled/themes';
import { userActions } from '@/store/ducks/user';

import app from '.';

export const themeSwitchAction =
	(theme: IThemeMode): ThunkA =>
	async dispatch => {
		storage('theme').set(theme);
		dispatch(app.actions.themeSwitch(theme));
	};

export const routerPush =
	(path: string, state?: any): ThunkA =>
	async () => {
		history.push(path, state);
	};

export const initApp = (): ThunkA => async dispatch => {
	const storageTheme = storage('theme').get();
	const accessToken = storage('access_token').get();
	if (storageTheme && storageTheme !== defaultTheme) dispatch(themeSwitchAction(storageTheme));
	if (accessToken) dispatch(userActions.getCurrentUser());
};
