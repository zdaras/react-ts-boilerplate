import { History, createBrowserHistory } from 'history';
import { Store, configureStore as createStore } from '@reduxjs/toolkit';

import config from '@/utils/config';

import rootReducer, { IRootStore } from './ducks/root-reducer';

export const history: History = createBrowserHistory();

history.listen(() => window.scrollTo(0, 0)); // scroll to top on route change

export const store: Store<IRootStore> = createStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false })],
	devTools: config.isDev
});
