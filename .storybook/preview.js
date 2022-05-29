import { addDecorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import ThemeProvider from '../src/styled/theme-provider';
import { themes } from '../src/styled/themes';

addDecorator((story, params) => {
	return <ThemeProvider theme={useDarkMode() ? 'dark' : 'light'}>{story()}</ThemeProvider>;
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: {
		default: 'light theme',
		values: [
			{
				name: 'light theme',
				value: themes.light.BG_COLOR
			},
			{
				name: 'dark theme',
				value: themes.dark.BG_COLOR
			}
		]
	}
};
