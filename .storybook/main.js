const path = require('path');

module.exports = {
	stories: ['./**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
	webpackFinal: async config => {
		config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
			'@/': path.resolve(__dirname, '../src/*')
		};

		return config;
	}
};
