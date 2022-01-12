import { Configuration as WebpackConfiguration } from 'webpack';

import { PATHS } from './paths';
import { tsConfig } from './webpack.rules';

const config: WebpackConfiguration = {
	mode: 'production',
	target: 'node',
	entry: ['./server/index.ts'],
	context: PATHS.root,
	output: {
		path: PATHS.dist,
		filename: 'server.js',
		publicPath: '/'
	},
	module: {
		rules: [tsConfig]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['server', 'node_modules']
	}
};

module.exports = config;
