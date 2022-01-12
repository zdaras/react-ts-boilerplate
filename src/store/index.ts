import { routerMiddleware } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { Store, Middleware, configureStore as createStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer, { IRootStore } from './ducks/root-reducer';

export const history: History = createBrowserHistory();
const historyMiddleware: Middleware = routerMiddleware(history);
const middlewares = [...getDefaultMiddleware({ serializableCheck: false }), historyMiddleware];

export const configureStore = (preloadedState: object = {}): Store<IRootStore> => {
	const store: Store<IRootStore> = createStore({
		reducer: rootReducer(history),
		preloadedState,
		middleware: middlewares,
		devTools: process.env.NODE_ENV === 'development'
	});

	if (process.env.NODE_ENV === 'development') {
		if (module.hot) {
			module.hot.accept('./ducks/root-reducer', () => {
				store.replaceReducer(require('./ducks/root-reducer').default(history));
			});
		}
	}

	return store;
};
