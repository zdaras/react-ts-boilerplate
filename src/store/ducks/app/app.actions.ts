import { history } from '@/store';
import { ThunkA } from '@/types';
import storage from '@/utils/storage';
import { randomInt } from '@/utils/number';
import { IThemeMode } from '@/styled/themes';

import app from '.';
import { ITopAlert } from './app.types';

export const themeSwitchAction = (theme: IThemeMode): ThunkA => async dispatch => {
	storage('theme').set(theme);
	dispatch(app.actions.themeSwitch(theme));
};

export const routerPush = (path: string, state?: any): ThunkA => async dispatch => {
	history.push(path, state);
};

const defaultOptions = (): ITopAlert => ({
	id: randomInt(),
	text: '',
	type: 'warning'
});

const show = (options: Partial<ITopAlert>): ThunkA => async dispatch => {
	const opts = { ...defaultOptions(), ...options };
	dispatch(app.actions.showAlert(opts));
};

export const info = (text: string, options: Partial<ITopAlert> = {}) => show({ ...options, text, type: 'info' });

export const success = (text: string, options: Partial<ITopAlert> = {}) => show({ ...options, text, type: 'success' });

export const warning = (text: string, options: Partial<ITopAlert> = {}) => show({ ...options, text, type: 'warning' });

export const danger = (text: string, options: Partial<ITopAlert> = {}) => show({ ...options, text, type: 'danger' });
