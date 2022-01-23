import { History, createBrowserHistory } from 'history';
import { Store, configureStore as createStore } from '@reduxjs/toolkit';

import rootReducer, { IRootStore } from './ducks/root-reducer';

export const history: History = createBrowserHistory();

history.listen(() => window.scrollTo(0, 0)); // scroll to top on route change

export const configureStore = (preloadedState: object = {}): Store<IRootStore> => {
	const store: Store<IRootStore> = createStore({
		reducer: rootReducer(),
		preloadedState,
		middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false })],
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
