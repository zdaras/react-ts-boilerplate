import { ThemeProvider, DefaultTheme } from 'styled-components';

import { FC } from '@/types';

import { IThemeMode, themes, defaultTheme } from './themes';
import { GlobalStyle } from './global';

const Provider: FC<{ theme: IThemeMode }> = ({ theme = defaultTheme, children }) => {
	const activeTheme: DefaultTheme = themes[theme];

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};

export default Provider;
