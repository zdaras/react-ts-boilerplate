import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import ToastContainer from '@/components/toast';
import { appSelectors } from '@/store/ducks/app';

import { routes } from './routes';

const App = () => {
	const theme = useSelector(appSelectors.theme);
	const activeTheme: DefaultTheme = themes[theme];

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<ToastContainer />
				<GlobalStyle />
				<Routes>
					{routes.map(({ path, AuthCheck, Layout, Component }) => (
						<Route
							key={path}
							path={path}
							element={
								<AuthCheck>
									<Layout>
										<Component />
									</Layout>
								</AuthCheck>
							}
						/>
					))}
				</Routes>
			</>
		</ThemeProvider>
	);
};

export default App;
