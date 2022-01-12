import { createSlice, createSelector } from '@reduxjs/toolkit';

import { defaultTheme } from '@/styled/themes';
import { IRootStore } from '@/store/ducks/root-reducer';

import { IAppState, IThemeSwitchAction, IHideAlertAction, IShowAlertAction, ITopAlert } from './app.types';
import * as actions from './app.actions';

const initialState: IAppState = {
	theme: defaultTheme,
	alerts: []
};

// slice
const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		themeSwitch: (state, action: IThemeSwitchAction) => ({ ...state, theme: action.payload }),
		showAlert: (state, { payload }: IShowAlertAction) => ({ ...state, alerts: [...state.alerts, payload] }),
		hideAlert: (state, { payload }: IHideAlertAction) => ({
			...state,
			alerts: state.alerts.filter((alert: ITopAlert) => alert.id !== payload.id)
		}),
		clearAlerts: state => ({ ...state, alerts: initialState.alerts })
	}
});

// selectors
export const appSelectors = {
	theme: createSelector(
		(state: IRootStore) => state.app,
		app => app.theme
	),
	alerts: createSelector(
		(state: IRootStore) => state.app,
		app => app.alerts
	)
};

// actions
export const appActions = actions;

export default slice;
