import { ThunkA } from '@/types';
import { randomInt } from '@/utils/helpers';

import toast, { toastSelectors } from '.';
import { IToast, IPartialToast } from './toast.types';

const defaultOptions = (): IToast => ({
	id: randomInt(),
	text: '',
	type: 'info',
	autoClose: true,
	closeOnClick: true,
	position: 'bottomRight',
	timeout: 5000
});

const show = (options: IPartialToast): ThunkA => async dispatch => {
	const opts = { ...defaultOptions(), ...options };
	dispatch(toast.actions.showToast(opts));
};

const addProcess = (options: IPartialToast): ThunkA => async dispatch => {
	const opts = { ...defaultOptions(), ...options };
	dispatch(toast.actions.addProcessToast(opts));
};

export const info = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'info' });

export const success = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'success' });

export const warning = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'warning' });

export const danger = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'danger' });

export const process = (
	text = 'Your request is in progress',
	options: IPartialToast = { timeout: 50000, closeOnClick: false, autoClose: false }
) => addProcess({ ...options, text, type: 'processing' });

export const showProcess = (text = 'Your request is in progress', options: IPartialToast = {}) =>
	show({ ...options, text, type: 'processing', timeout: 50000, closeOnClick: false, autoClose: false });

export const showErrorOnProgess = (err: Record<string, any> = { errorDescription: '' }, open = true): ThunkA => async (
	dispatch,
	getState
) => {
	const minimizedModal = toastSelectors.minimizedModal(getState());
	if (minimizedModal && open) dispatch(danger(err.errorDescription));
};
