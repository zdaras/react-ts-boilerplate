import { createSlice, createSelector } from '@reduxjs/toolkit';

import { IRootStore } from '@/store/ducks/root-reducer';

import { IShowToastAction, IHideToastAction, IToast, IToastState } from './toast.types';
import * as actions from './toast.actions';

const initialState: IToastState = {
	data: [],
	isProcessing: false,
	processToasts: [],
	minimizedModal: false
};

// slice
const slice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		showToast: (state, { payload }: IShowToastAction) => ({ ...state, data: [...state.data, payload] }),
		addProcessToast: (state, { payload }: IShowToastAction) => ({ ...state, processToasts: [...state.data, payload] }),
		hideToast: (state, { payload }: IHideToastAction) => ({
			...state,
			data: state.data.filter((toast: IToast) => toast.id !== payload.id),
			processToasts: state.processToasts.filter((toast: IToast) => toast.id !== payload.id)
		}),
		setProgress: state => ({ ...state, isProcessing: true }),
		unsetProgress: state => ({ ...state, isProcessing: false, minimizedModal: false }),
		minimizeModal: state => ({ ...state, minimizedModal: true })
	}
});

// selectors
export const toastSelectors = {
	data: createSelector(
		(state: IRootStore) => state.toast,
		toast => toast.data
	),
	isProcessing: createSelector(
		(state: IRootStore) => state.toast,
		toast => toast.isProcessing
	),
	processToasts: createSelector(
		(state: IRootStore) => state.toast,
		toast => toast.processToasts.filter(i => !toast.data.map(t => t.id).includes(i.id))
	),
	minimizedModal: createSelector(
		(state: IRootStore) => state.toast,
		toast => toast.isProcessing && toast.minimizedModal
	)
};

// actions
export const toastActions = actions;

export default slice;
