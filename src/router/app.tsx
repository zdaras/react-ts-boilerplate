import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import ToastContainer from '@/components/toast';
import TopAlert from '@/components/top-alert';
import { appSelectors } from '@/store/ducks/app';
import { AppRoute, MainLayout } from '@/components/layout';

import { routes, AsyncPage } from './routes';

const App = () => {
	const theme = useSelector(appSelectors.theme);
	const activeTheme: DefaultTheme = themes[theme];

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<TopAlert />
				<ToastContainer />
				<GlobalStyle />
				<Switch>
					{routes.map(r => (
						<AppRoute key={r.path} path={r.path} exact={r.exact} Component={r.component} Layout={r.Layout} />
					))}
					<AppRoute Component={() => <AsyncPage page="not-found" />} Layout={MainLayout} />
				</Switch>
			</>
		</ThemeProvider>
	);
};

export default hot(App);
