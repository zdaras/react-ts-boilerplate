import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import ToastContainer from '@/components/toast';
import TopAlert from '@/components/top-alert';
import { appSelectors } from '@/store/ducks/app';
import { MainLayout } from '@/components/layout';

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
				<Routes>
					{routes.map(r => (
						<Route
							key={r.path}
							path={r.path}
							element={
								<r.Layout>
									<r.Component />
								</r.Layout>
							}
						/>
					))}
					<Route
						path="*"
						element={
							<MainLayout>
								<AsyncPage page="not-found" />
							</MainLayout>
						}
					/>
				</Routes>
			</>
		</ThemeProvider>
	);
};

export default hot(App);
