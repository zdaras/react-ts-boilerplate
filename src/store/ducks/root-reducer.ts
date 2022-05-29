import { combineReducers } from '@reduxjs/toolkit';

import app from './app';
import toast from './toast';
import user from './user';

const rootReducer = combineReducers({
	app: app.reducer,
	toast: toast.reducer,
	user: user.reducer
});

export type IRootStore = ReturnType<typeof rootReducer>;

export default rootReducer;
