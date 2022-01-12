import { createSlice, createSelector } from '@reduxjs/toolkit';

import { IRootStore } from '@/store/ducks/root-reducer';

import { IUserState, ILoginSuccessAction, IUpdateInfoAction } from './user.types';
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
		logoutAction: () => initialState,
		enable2FAAction: state => ({
			...state,
			userInfo:
				state.userInfo !== null
					? {
							...state.userInfo,
							hasTwoFa: true
					  }
					: null
		}),
		disable2FAAction: state => ({
			...state,
			userInfo:
				state.userInfo !== null
					? {
							...state.userInfo,
							hasTwoFa: false
					  }
					: null
		}),
		enable2FAOnLoginAction: state => ({
			...state,
			userInfo:
				state.userInfo !== null
					? {
							...state.userInfo,
							hasTwoFaOnLogin: true
					  }
					: null
		}),
		disable2FAOnLoginAction: state => ({
			...state,
			userInfo:
				state.userInfo !== null
					? {
							...state.userInfo,
							hasTwoFaOnLogin: false
					  }
					: null
		}),
		updateInfo: (state, action: IUpdateInfoAction) => ({
			...state,
			userInfo:
				state.userInfo !== null
					? {
							...state.userInfo,
							...action.payload
					  }
					: null
		})
	}
});

// selectors
export const userSelectors = {
	userInfo: createSelector(
		(state: IRootStore) => state.user,
		user => user.userInfo
	),
	userHas2FA: createSelector(
		(state: IRootStore) => state.user,
		user => user.userInfo?.hasTwoFa
	),
	userHas2FaOnLogin: createSelector(
		(state: IRootStore) => state.user,
		user => user.userInfo?.hasTwoFaOnLogin
	),
	userInitials: createSelector(
		(state: IRootStore) => state.user,
		user =>
			user.userInfo?.fname && user.userInfo?.lname
				? `${String(user.userInfo.fname).charAt(0)}${String(user.userInfo.lname).charAt(0)}`
				: ''
	)
};

// actions
export const userActions = actions;

export default slice;
