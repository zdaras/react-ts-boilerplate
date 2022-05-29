import { createSlice, createSelector } from '@reduxjs/toolkit';

import { IRootStore } from '@/store/ducks/root-reducer';

import { IUserState, ILoginSuccessAction } from './user.types';
import * as actions from './user.actions';

const initialState: IUserState = {
	userInfo: null,
	loading: false,
	isLoggedIn: false
};

// slice
const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStartAction: () => ({ ...initialState, loading: true }),
		loginSuccessAction: (state, action: ILoginSuccessAction) => ({
			...state,
			userInfo: action.payload,
			loading: false,
			isLoggedIn: true
		}),
		logoutAction: () => initialState
	}
});

// selectors
export const userSelectors = {
	isLoggedIn: createSelector(
		(state: IRootStore) => state.user,
		user => user.isLoggedIn && user.userInfo !== null
	),
	loading: createSelector(
		(state: IRootStore) => state.user,
		user => user.loading
	),
	userInfo: createSelector(
		(state: IRootStore) => state.user,
		user => user.userInfo
	)
};

// actions
export const userActions = actions;

export default slice;
