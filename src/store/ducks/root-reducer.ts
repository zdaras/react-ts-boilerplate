import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from '@reduxjs/toolkit';

import app from './app';
import toast from './toast';
import user from './user';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		app: app.reducer,
		toast: toast.reducer,
		user: user.reducer
	});

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
